import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import JobApplication from "@/models/JobApplication";
import { deleteFileFromGridFS } from "@/lib/gridfs";

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();

    const { id } = await context.params;

    console.log("Delete request for application ID:", id);

    // Validate ID
    if (!id) {
      return NextResponse.json(
        { error: "Application ID is required" },
        { status: 400 }
      );
    }

    // Find the application
    const application = await JobApplication.findById(id);

    if (!application) {
      console.error("Application not found for deletion:", id);
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    console.log("Deleting resume from GridFS:", application.resumeId);

    // Delete resume from GridFS
    try {
      await deleteFileFromGridFS(application.resumeId);
      console.log("Resume deleted from GridFS successfully");
    } catch (gridfsError) {
      console.error("GridFS deletion error:", gridfsError);
      // Continue with application deletion even if GridFS deletion fails
    }

    // Delete application from database
    await JobApplication.findByIdAndDelete(id);
    console.log("Application deleted from database successfully");

    return NextResponse.json(
      { success: true, message: "Application deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Failed to delete application:", error);
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    return NextResponse.json(
      { error: "Failed to delete application", details: error.message },
      { status: 500 }
    );
  }
}
