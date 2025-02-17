import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://raw.githubusercontent.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    child-src https://auth.privy.io https://verify.walletconnect.com https://verify.walletconnect.org https://privy.privy-upgrade-to-production-testing.vercel.app;
    frame-src https://auth.privy.io https://verify.walletconnect.com https://verify.walletconnect.org https://challenges.cloudflare.com https://privy.privy-upgrade-to-production-testing.vercel.app;
    connect-src 'self' https://auth.privy.io https://verify.walletconnect.com https://verify.walletconnect.org https://challenges.cloudflare.com wss://www.walletlink.org https://*.rpc.privy.systems https://explorer-api.walletconnect.com https://privy.privy-upgrade-to-production-testing.vercel.app;
`;

const nextConfig: NextConfig = {
  /* config options here */
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "Content-Security-Policy", value: cspHeader.replace(/\n/g, "") },
        { key: "X-Frame-Options", value: "none" },
      ],
    },
  ],
};

export default nextConfig;
