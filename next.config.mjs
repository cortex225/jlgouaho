/** @type {import('next').NextConfig} */

const securityHeaders = [
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "SAMEORIGIN" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
];

const nextConfig = {
    poweredByHeader: false,
    reactStrictMode: true,
    images: {
        formats: ["image/avif", "image/webp"],
    },
    async headers() {
        return [
            { source: "/(.*)", headers: securityHeaders },
            {
                source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff2|mp4)",
                headers: [
                    { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
                ],
            },
        ];
    },
    async rewrites() {
        return {
            // afterFiles runs AFTER middleware + filesystem routes.
            // This is the last-resort fallback: if both the middleware
            // and the route handler somehow fail, rewrite to /fr.
            afterFiles: [
                {
                    source: "/:path((?!en|fr|api|_next|static|og|icon|apple-icon|manifest|llms|robots|sitemap).*)",
                    destination: "/fr/:path",
                },
            ],
        };
    },
};

export default nextConfig;
