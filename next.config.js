module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    );

    config.resolve.extensions.push('.md');

    return config;
  },
}