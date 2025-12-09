import mongoose from "mongoose";
import { GridFSBucket } from "mongodb";
import dbConnect from "./db";

let bucket: GridFSBucket | null = null;

export async function getGridFSBucket(): Promise<GridFSBucket> {
  if (bucket) {
    return bucket;
  }

  await dbConnect();

  if (!mongoose.connection.db) {
    throw new Error("Database connection not established");
  }

  bucket = new GridFSBucket(mongoose.connection.db, {
    bucketName: "resumes",
  });

  return bucket;
}

export async function uploadFileToGridFS(
  file: Buffer,
  filename: string,
  contentType: string
): Promise<mongoose.Types.ObjectId> {
  const bucket = await getGridFSBucket();

  return new Promise((resolve, reject) => {
    const uploadStream = bucket.openUploadStream(filename, {
      metadata: { contentType },
    });

    uploadStream.on("finish", () => {
      resolve(uploadStream.id as mongoose.Types.ObjectId);
    });

    uploadStream.on("error", (error) => {
      reject(error);
    });

    uploadStream.end(file);
  });
}

export async function deleteFileFromGridFS(
  fileId: mongoose.Types.ObjectId
): Promise<void> {
  const bucket = await getGridFSBucket();
  await bucket.delete(fileId);
}

export async function getFileStreamFromGridFS(fileId: mongoose.Types.ObjectId) {
  const bucket = await getGridFSBucket();
  return bucket.openDownloadStream(fileId);
}
