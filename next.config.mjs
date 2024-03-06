/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/bitcoin',
                permanent: true,
            },
        ];
    },
    images: {
        domains: ['assets.coingecko.com'],
    },
};

export default nextConfig;
