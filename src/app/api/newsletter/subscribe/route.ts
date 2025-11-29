import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Subscriber from "@/models/Subscriber";
import { transporter, mailOptions } from "@/lib/email";

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            );
        }

        await dbConnect();

        // Check if already subscribed
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return NextResponse.json(
                { message: "Already subscribed" },
                { status: 200 }
            );
        }

        await Subscriber.create({ email });

        // Send Welcome Email
        try {
            await transporter.sendMail({
                ...mailOptions,
                to: email,
                subject: "Welcome to HK Nexus Newsletter",
                text: "Thank you for subscribing to our newsletter! We'll keep you updated with the latest insights and news.",
                html: `
                    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                        <h1 style="color: #594ad2;">Welcome to HK Nexus!</h1>
                        <p>Thank you for subscribing to our newsletter.</p>
                        <p>We're excited to share our latest insights, updates, and news with you.</p>
                        <br/>
                        <p>Best regards,</p>
                        <p><strong>The HK Nexus Team</strong></p>
                    </div>
                `,
            });
        } catch (emailError) {
            console.error("Failed to send welcome email:", emailError);
            // Continue execution even if email fails, as subscription was successful
        }

        return NextResponse.json(
            { message: "Subscribed successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Subscribe error:", error);
        return NextResponse.json(
            { error: "Failed to subscribe" },
            { status: 500 }
        );
    }
}
