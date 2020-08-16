<h1 align="center">
  Deriv.com
</h1>


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
    npm start
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## To update translations

-   Checkout crowdin branch, pull the latest changes, and create new branch from crowdin
    ```sh
    git checkout crowdin
    git pull upstream crowdin
    git checkout -b [_your_branch_name]
    ```
-   Pull the latest changes from dev branch
    ```sh
    git pull upstream dev
    ```
-   Extract translation text to update `messages.json`
    ```sh
    cd scripts/
    node extract-translations.js
    ```
-   Commit changes and make pull request to upstream `crowdin` branch
-   Merge pull request will trigger crowdin hook to update translation text in crowdin

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

## Release

`git tag ${RELEASE_TARGET}_vYYYYMMDD_${INTEGER} -m 'some message'`

Based on `RELEASE_TARGET` there are 2 types of release:

1. Release to staging:

    1. `git tag staging_v20191205 -m 'release staging'` # the tag needs to follow the RegExp format `/^staging_*/`
    2. `git push origin staging_v20191205`

2. Release to production:
    1. `git tag production_v20191205 -m 'release production'` # the tag needs to follow the RegExp format `/^production_*/`
    2. `git push origin production_v20191205`
