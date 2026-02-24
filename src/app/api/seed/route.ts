import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET() { 
    try {
        await dbConnect();

        const email = "admin@hknexus.com";
        const password = "adminpassword123"; // Change this immediately after login

        const existingUser = await User.findOne({ email });
 
        if (existingUser) {
            return NextResponse.json({ message: "Admin user already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            email,
            password: hashedPassword,
            role: "admin",
        });

        return NextResponse.json({
            message: "Admin user created successfully",
            email,
            password,
        });
    } catch (error) {
        console.error("Seed error:", error);
        return NextResponse.json(
            { error: "Failed to create admin user", details: (error as Error).message },
            { status: 500 }
        );
    }
}
