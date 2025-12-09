import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import JobApplication from "@/models/JobApplication";
import { getFileStreamFromGridFS } from "@/lib/gridfs";
import mongoose from "mongoose";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await context.params;

    console.log("Fetching application with ID:", id);

    // Find the application to get resume metadata
    const application = await JobApplication.findById(id);

    if (!application) {
      console.error("Application not found:", id);
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    console.log("Application found:", {
      id: application._id,
      resumeId: application.resumeId,
      resumeFilename: application.resumeFilename,
      resumeMimeType: application.resumeMimeType,
    });

    // Get file stream from GridFS
    const fileStream = await getFileStreamFromGridFS(application.resumeId);

    // Create a readable stream for the response
    const stream = new ReadableStream({
      start(controller) {
        fileStream.on("data", (chunk: Buffer) => {
          controller.enqueue(chunk);
        });
        fileStream.on("end", () => {
          console.log("File stream completed successfully");
          controller.close();
        });
        fileStream.on("error", (error) => {
          console.error("File stream error:", error);
          controller.error(error);
        });
      },
    });

    // Return the file with proper headers
    return new NextResponse(stream, {
      headers: {
        "Content-Type": application.resumeMimeType,
        "Content-Disposition": `attachment; filename="${application.resumeFilename}"`,
      },
    });
  } catch (error: any) {
    console.error("Failed to download resume:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    return NextResponse.json(
      { error: "Failed to download resume", details: error.message },
      { status: 500 }
    );
  }
}
