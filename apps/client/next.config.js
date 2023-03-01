/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		transpilePackages: [
			'@travel-tailor/types',
			'@travel-tailor/functions',
			'@travel-tailor/hooks',
			'@travel-tailor/contexts',
			'@travel-tailor/services',
		],
	},
};

module.exports = nextConfig;
