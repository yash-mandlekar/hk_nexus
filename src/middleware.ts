import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Define paths that require authentication
    const isProtectedPath = path.startsWith("/admin/dashboard");

    if (isProtectedPath) {
        const token = await getToken({
            req: request,
            secret: process.env.NEXTAUTH_SECRET || "your-secret-key",
        });

        if (!token) {
            const url = new URL("/admin", request.url);
            url.searchParams.set("callbackUrl", path);
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/dashboard/:path*"],
};
