module.exports = (api) => {
  api.cache.never();
  
  return {
    presets: [
      '@babel/react',
      [
        '@babel/env', 
        {
          // debug: true,
          spec: true,
          loose: false,
          modules: false,
          useBuiltIns: 'usage',
          corejs: "3",
        },
      ],
    ],
    plugins: ['@babel/proposal-class-properties'],
  };
}