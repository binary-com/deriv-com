<h1 align="center">
  deriv-com
</h1>

Deriv.com static content

[![Netlify Status](https://api.netlify.com/api/v1/badges/cbcd400a-686a-4470-b000-4780f427fee8/deploy-status)](https://app.netlify.com/sites/deriv-com/deploys)

## Requirements

-   node
-   npm
-   gatsby-cli (npm install -g gatsby-cli)

## Editor helpers

-   Prettier setup in your editor https://prettier.io/ (or you can run `npm run format`)
-   Stylelint setup in your editor https://stylelint.io/ (or you can run `npm run stylelint`)
-   Eslint setup in your editor https://eslint.org/ (or you can run `npm run eslint`)

## 🚀 Quick start

1.  **Install your dependencies:**

    ```sh
    npm install
    ```

2.  **To start developing:**

    ```sh
    npm start // to start development server in port `80`
    ```

    or

    ```sh
    gatsby develop // to start development server in port `8000`
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 💫 Deploy

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

## 📦 GH-pages deployment

1. **Basic name.github.io/deriv-com/**

    ```sh
    npm run deploy-dev
    ```

    ⚠️ This will remove your branch deployments

2. **To a specific branch:**

    ```sh
    branch_name=fix_all_the_bugs npm run deploy-branch
    ```

    - This will be deployed to name.github.io/deriv-com/br/fix_all_the_bugs
    - To cleanup all branches run `npm run deploy-dev`
