/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_URL_API_WEATHER: process.env.NEXT_PUBLIC_URL_API_WEATHER,
    NEXT_PUBLIC_KEY_API_WEATHER: process.env.NEXT_PUBLIC_KEY_API_WEATHER,
    NEXT_PUBLIC_KEY_API_IP_LOCATION:
      process.env.NEXT_PUBLIC_KEY_API_IP_LOCATION,
  },
  images: {
    domains: ["cdn.weatherapi.com"],
  },
};

module.exports = nextConfig;
