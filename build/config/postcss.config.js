  /* eslint-disable global-require */

const pkg = require('../../package.json');
// const postcssCssnext = require('postcss-cssnext');

module.exports = () => ({

  plugins: [

    require('autoprefixer')({
      browsers: pkg.browserslist,
      flexbox: true,
    }),
  ],
});
