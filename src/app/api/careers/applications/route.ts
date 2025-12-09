import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import JobApplication from "@/models/JobApplication";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    // Get total count
    const total = await JobApplication.countDocuments();

    // Get paginated applications
    const applications = await JobApplication.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-resumeId") // Exclude GridFS ID from response
      .lean();

    // Calculate stats
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

    const newThisMonth = await JobApplication.countDocuments({
      createdAt: { $gte: firstDayOfMonth },
    });

    return NextResponse.json({
      applications,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
      stats: {
        total,
        newThisMonth,
      },
    });
  } catch (error) {
    console.error("Failed to fetch job applications:", error);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
