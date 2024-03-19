const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
});

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/ES',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = withNextra(nextConfig);
