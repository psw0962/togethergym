/** @type {import('next').NextConfig} */
// const withInterceptStdout = require('next-intercept-stdout');

const nextConfig = {
  reactStrictMode: false,
  siteUrl: 'https://www.salon5120.com',
  generateRobotsTxt: true,
  // images: {
  //   domains: [],
  // },
  // module: {
  //   rules: [
  //     {
  //       test: /\.mp3$/,
  //       use: {
  //         loader: 'file-loader',
  //       },
  //     },
  //   ],
  // },
};

// module.exports = withInterceptStdout(nextConfig, text =>
//   text.includes('Duplicate atom key') ? '' : text,
// );

module.exports = nextConfig;
