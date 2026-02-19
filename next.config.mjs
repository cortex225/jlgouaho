/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    async rewrites() {
        return {
            // afterFiles runs AFTER middleware + filesystem routes.
            // This is the last-resort fallback: if both the middleware
            // and the route handler somehow fail, rewrite to /fr.
            afterFiles: [
                {
                    source: "/:path((?!en|fr|api|_next|static).*)",
                    destination: "/fr/:path",
                },
            ],
        };
    },
};

export default nextConfig;
