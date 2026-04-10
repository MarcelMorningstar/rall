/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  reactStrictMode: true,
  ...nextTranslate(),
  images: {
    unoptimized: true,
    domains: ['rall.lv'],
  }
}

module.exports = nextConfig
