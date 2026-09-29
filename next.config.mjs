/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/resources.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/diagnosis.html',
        destination: '/cotizador',
        permanent: true,
      },
      {
        source: '/diagnosis',
        destination: '/cotizador',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
