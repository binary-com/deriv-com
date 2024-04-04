const path = require("path")

module.exports = {
    plugins: [
      {
        resolve: `gatsby-theme-deriv`,
        options: {
          region: 'eu',
          buildDirPath: path.resolve(__dirname, "..", "..", "sites", "eu", 'public/index.html')
        }
      }
    ],
  }
  