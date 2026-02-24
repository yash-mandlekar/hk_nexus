import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;

    // Define protected paths
    const isProtectedPath = path.startsWith("/admin/") && path !== "/admin";

    if (isProtectedPath) {
        // Explicitly check for both standard and secure cookie names
        const hasSessionToken = request.cookies.has("next-auth.session-token");
        const hasSecureSessionToken = request.cookies.has("__Secure-next-auth.session-token");

        if (!hasSessionToken && !hasSecureSessionToken) {
            const url = new URL("/admin", request.url);
            url.searchParams.set("callbackUrl", path);
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}

export const config = {
    // Apply middleware to all /admin sub-routes
    matcher: ["/admin/:path*"],
};
