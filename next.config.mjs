/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "room-booking-and-management-system-server.onrender.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
