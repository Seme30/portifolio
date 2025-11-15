/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
            {
                protocol: 'https',
                hostname: 'icon.icepanel.io',
            },
            {
                protocol: 'https',
                hostname: 'fendisha-tech.pages.dev',
            },
            {
                protocol: 'https',
                hostname: 'play-lh.googleusercontent.com',
            },
        ],
    },
};

export default nextConfig;
