module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 1,
    }),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-calc'),
    require('postcss-assets')({
      loadPaths: ['**']
    })
  ],
};