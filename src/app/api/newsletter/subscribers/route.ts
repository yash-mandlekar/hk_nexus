import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect from "@/lib/db";
import Subscriber from "@/models/Subscriber";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(request: Request) {
    try {
        const session = await getServerSession(authOptions);

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await dbConnect();

        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1");
        let limit = parseInt(searchParams.get("limit") || "10");

        // Handle export (fetch all)
        if (limit === 0) {
            limit = await Subscriber.countDocuments();
        }

        const skip = (page - 1) * limit;

        const total = await Subscriber.countDocuments();

        // Calculate new subscribers this month
        const startOfMonth = new Date();
        startOfMonth.setDate(1);
        startOfMonth.setHours(0, 0, 0, 0);
        const newThisMonth = await Subscriber.countDocuments({
            createdAt: { $gte: startOfMonth }
        });

        const subscribers = await Subscriber.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        return NextResponse.json({
            subscribers,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
            stats: {
                newThisMonth,
            }
        });
    } catch (error) {
        console.error("Fetch subscribers error:", error);
        return NextResponse.json(
            { error: "Failed to fetch subscribers" },
            { status: 500 }
        );
    }
}
