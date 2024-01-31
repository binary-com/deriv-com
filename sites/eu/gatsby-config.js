const path = require("path")

module.exports = {
    plugins: [{ resolve: `gatsby-theme-deriv`, options: {isEUPage: true, 
      buildDirPath: path.resolve(__dirname, "..", "..", "sites", "row", 'public/index.html')} }],
  }
  