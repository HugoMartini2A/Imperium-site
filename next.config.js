/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), microphone=(), camera=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      // Google Maps embed (contact page)
      "frame-src https://www.google.com",
      // Stripe API calls from server (kept here for when Stripe.js is added)
      "connect-src 'self' https://api.stripe.com https://checkout.stripe.com",
      // Forms can only submit to our server or Stripe checkout
      "form-action 'self' https://checkout.stripe.com",
    ].join("; "),
  },
];

const nextConfig = {
  images: {
    domains: [],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
