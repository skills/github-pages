/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // This is needed for bcrypt to work on the server side
      config.externals = [...(config.externals || []), 'bcrypt'];
    }

    if (!isServer) {
      // Don't resolve these server-only modules on the client
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        child_process: false,
        'aws-sdk': false,
        'mock-aws-s3': false,
        'nock': false,
        net: false,
        tls: false,
        dns: false,
        module: false,
      };
    }

    return config;
  },
  // Avoid issues with server components importing node modules
  serverExternalPackages: ['bcrypt'],
};

export default nextConfig;
