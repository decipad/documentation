module.exports = {
  presets: [
    '@nrwl/web/babel',
    [
      require.resolve('@babel/preset-react'),
      { runtime: 'automatic', importSource: '@emotion/react' },
    ],
    require.resolve('@docusaurus/core/lib/babel/preset'),
  ],
  plugins: [
    [
      require.resolve('@babel/plugin-proposal-private-methods'),
      { loose: true },
    ],
    [
      require.resolve('@babel/plugin-proposal-private-property-in-object'),
      { loose: true },
    ],
    require.resolve('@emotion/babel-plugin'),
  ],
};
