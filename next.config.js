const hostnames = ['images.unsplash.com', 'lh3.googleusercontent.com', 'drive.google.com'];
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: 'https',
      hostname,
    })),
  },
};
module.exports = nextConfig;
