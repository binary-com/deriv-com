const path = require("path")

module.exports = {
    plugins: [
      {
        resolve: `gatsby-theme-deriv`,
        options: {
          region: 'row',
          buildDirPath: path.resolve(__dirname, "..", "..", "sites", "row", 'public/index.html')
        }
      }
    ],
  }
  