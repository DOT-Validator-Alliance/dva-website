/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)?", // Matches all pages
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self' 'unsafe-eval' 'unsafe-inline' *.googleapis.com *.gstatic.com; frame-ancestors 'none'; font-src 'self' 'unsafe-eval' data: *.googleapis.com *.gstatic.com; connect-src 'self'"
                .replace(/\s{2,}/g, " ")
                .trim(),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
