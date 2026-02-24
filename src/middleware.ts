import { withAuth } from "next-auth/middleware";

export default withAuth({
    callbacks: {
        authorized: ({ req, token }) => {
            const path = req.nextUrl.pathname;
            // Protect all /admin/* routes except exact /admin
            if (path.startsWith("/admin/")) {
                return !!token;
            }
            return true;
        },
    },
    pages: {
        signIn: "/admin",
    },
    secret: process.env.NEXTAUTH_SECRET || "your-secret-key",
});

export const config = {
    // Apply middleware to all /admin sub-routes
    matcher: ["/admin/:path*"],
};
