const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/terms-and-conditions': { page: '/terms-and-conditions' }
    };
  }
});
