<h1 align="center">
  Deriv.com
</h1>

Deriv.com - An online trading platform that offers a wide selection of derivatives to trade on 24/7.

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/binary-com/deriv-com/Release%20Staging) ![node](https://img.shields.io/badge/node-%3E%3D18.12.1-blue.svg) ![npm](https://img.shields.io/badge/npm-%3E%3D8.19.2-blue.svg) [![GATSBY](https://img.shields.io/badge/Gatsby-663399?style=flat&logo=gatsby&logoColor=white)](https://github.com/styled-components/styled-components) [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components) ![Sonar Tech Debt](https://img.shields.io/sonar/tech_debt/binary-com_deriv-com?server=https%3A%2F%2Fsonarcloud.io)
![Sonar Violations (short format)](https://img.shields.io/sonar/violations/binary-com_deriv-com?server=https%3A%2F%2Fsonarcloud.io)

## In this document:

-   [Other documents](#other-documents)
-   [Pre-installation](#pre-installation)
-   [Quick start](#quick-start)
-   [How to contribute](#how-to-contribute)
-   [PR Formating guideline](#pr-formating-guideline)
-   [PR without translations](#pr-without-translation)
-   [PR with translations](#pr-with-translation)
-   [Manage releases](#manage-releases)
-   [Test link deployment](#test-link-deployment)
-   [FAQ](#faq)

## Other Documents

-   [General implementation](documents/implementation-guide.md) - Contain ways to do development in deriv.com
-   [Development guidelines](documents/development-guidelines.md) - Contain advice for developers working on this project
-   [Git best practice](documents/git-best-practices.md) - Contain git practices and commit guidelines
-   [File structures](documents/file-structures.md)
-   [GTM workflow](documents/gtm-workflow.md) - Contains Google Tag Manager workflow and additional information
-   [Translation workflow](documents/translation-workflow.md) - Contains general workflow and commands required for our translation process
-   [Typescript guidelines](documents/typescript-guidelines.md) - Contains Typescript guidelines and conventions for this project

## Pre-installation

Before running or contribute to this project, you need to have the setup of the following packages in your environment

-   node >=18.12.1
-   npm >=8.19.2
-   git (for `contribution`)
-   gatsby-cli (npm install -g gatsby-cli) (for using commands that aren't listed in scripts)

Moreover, having these extensions will help you to speed up the development process and adhere to the best practices

-   Prettier: setup in your editor https://prettier.io/ (or you can run `npm run format`.
    Installation guide for
    VS Code - https://www.codementor.io/@myogeshchavan97/how-to-automatically-format-code-in-visual-studio-code-using-prettier-1nebhfbxak
    WebStorm - https://www.jetbrains.com/help/webstorm/prettier.html#prettier_before_you_start
-   Stylelint: setup in your editor https://stylelint.io/ (or you can run `npm run stylelint`)
-   Eslint: setup in your editor https://eslint.org/ (or you can run `npm run eslint`)

## Quick start

1.  **Fork the project**

    In order to work on your own version of the Deriv application, please fork the project to your own repo.

2.  **Clone using SSH**

    ```sh
    git clone git@github.com:your-github-username/deriv-com.git
    ```

3.  **Enter project directory**

    ```sh
    cd deriv-com
    ```

4.  **Install your dependencies:**

    ```sh
    npm ci
    ```

5.  **Add env variables:**

    Create two files `.env.development` and `.env.production` inside your project root directory.

    Then check your **lastpass** you'll see a shared item named **Deriv-com Env Variables** copy the variables, they look like this:

    And paste them into the files.

6.  **To start developing:**

    ```sh
    npm start
    ```

7.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## How to contribute

To contribute in the project, we need to create PRs to master. We have two types of PRs (Pull request):

### PR Formating guideline

1. Use the `{Developer}/{Clickup Card ID}/{Description}` format for PR titles. (e.g.: `[Dev's Name]/COJ-247/Align next-button on mt5 modal`).
2. Start the description with a verb in an imperative declaration for clarity and conciseness. For example, "Fix issue with..." or "Implement feature to...".
3. Add screenshots of change for easier reviewing (whenever applicable) and brief description
4. Use Draft PRs if you don't mean to request for reviews yet. [Read more here.](https://github.blog/2019-02-14-introducing-draft-pull-requests/)

### PR without translation

PR will be based on the master branch if the commits are not having text changes

1. Create branch from the latest master branch

    ```sh
    git checkout master
    git pull upstream master
    git checkout -b [_your_branch_name]
    ```

2. Make your changes

3. Make pull request following PR formatting guidelines.

-   Push your changes to your origin , add `-u` flag for the first time push

    ```sh
    git push -u origin [_your_branch_name]
    ```

-   Click on the autogenerated link from the terminal to open the PR

-   Make sure to change the PR base to `master` branch


### PR with translation

-   Pre-requisite:

    -   Install crowdin-cli

        ```sh
        brew tap crowdin/crowdin
        brew install crowdin
        ```

    -   Set up your Crowdin API KEY in your .bash_profile or .zshrc

-   Creating Branch

    ```sh
    npm run branch:create
    ```    
    Proceed by choosing Normal Translation

-   Download Translations

    ```sh
    npm run translation:pull
    ```
    This command will trigger the workflow to pull latest translation from the specific branch and automatically add the commit to that PR.

-   Push the changes in the PR

-   Conflicts on message.json file

    Don't worry it's easy to resolve, you can either resolve it using your changes or their changes doesn't matter because after you commit, it will again generate an updated messages.json file based on your current code, as long as you have all the changes from the master you are good to go.

    Pulled the translations but strings are still not translated
    First you need to check if you have all the translations in your codebase.
    Search for the string and copy the corresponding hashed value for the string, can be found on messages.json

    Now search the whole codebase using the hash, if json files for each languages appeared on your search results then you check if the values are not in English.
    Once the translations are proven to be there, you need to check where the strings are used
    Usually if your are using localize function when not in the react component it is failing to translate strings properly, you can convert them to <Localize translate_text="" /> instead


## Manage releases

There are 2 types of releases:

1. Release to staging:

Merging to master (squash and merge) will automatically release the last commit to the staging server https://staging.deriv.com


2. Release to production:

Releasing to production requires a tag using the following format:

`production_VYYYYMMDD_${Integer}` --- Integer is the release version

Example of release steps

-   Create the tag following today's date

    ```sh
    git tag production_V20200806_0 -m 'release to production'
    ```

-   Push the tag to the main repository

    ```sh
    git push upstream production_V20200806_0
    ```

## Test link deployment

Upon creating PR, [Vercel](https://vercel.com/) and Cloudflare will auto-generate two test links inside the PR. you can use that to preview the test link for the changes you have made.
