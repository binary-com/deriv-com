## File Structure

In this project, try to keep relevant files in 5 major directories which are `common`, `components`, `images`, `pages`, `themes`, `translations`.

Below is a sample file structure of the project.

```
src
    ├── common/
    │   ├── websocket/ --- Websocket configuration
    │   ├── storage.js --- Includes `localStorage`, `sessionStorage`, and `cookies`
    │   ├── country-base.js --- Europe contries list and configuration
    │   ├── keycodes.js --- Client input keycodes
    │   ├── login.js --- Login url and oneall configuration
    │   ├── os-detect.js --- List of devices to check from user agent
    │   ├── traffic-source.js --- Marketing items configuration `UTMs`, `Affiliate token`, etc..
    │   ├── os-detect.js --- Common validation input
    │   └── utility.js --- Helper functions
    ├── components/
    │   ├── containers/ --- Box templates from various displays, and common container boxes
    │   ├── elements/ --- Common elements `Accordion`, `Image`, `Carousel`, etc..
    │   ├── form/ --- Components inside forms `Input`, `Button`, etc..
    │   ├── layout/ --- Components inside layout `Nav`, `Footer`, etc..
    │   ├── hooks/ --- Reusable hooks that used throughout the project
    │   ├── localization/ --- Components to configure localization
    │   ├── svgs/ --- Customizable SVGs
    │   ├── graphql/ --- GraphQL queries
    │   ├── custom/ --- Custom elements specific to product
    ├── images/
    │   ├── common/ --- `png`, `jpg`, `jpeg`
    │   ├── svg/ --- `svg`
    ├── pages/
    │   ├── besquare/
    │   │   ├── index.js
    │   │   ├── _component-name.js --- aside from index, other component should have prefix `_`
    │   │   ├── ...
    │   ├── help-centre/
    │   ├── 404.js
    │   ├── index.js
    │   ├── ...
    ├── themes/
    │   ├── global-style.js --- Contain global styling rules
    │   ├── reset.js --- Reset css in js
    │   ├── variables.js --- Contain css variables used throughout the project
    │   ├── device.js --- Contain media queries and device screensizes
    ├── translations/
    │   ├── ach.json --- Translation texts for crowdin
    │   ├── *.json --- Translation texts for languages
    ├── types/
    │   ├── *.types.ts --- Type declaration for project wide use. types in here are usually generic types that are extended or automatically generated.
static
    ├── css/ --- Hold third party css
    ├── payment-methods/ --- Payment method documents
    ├── regulatory/ --- Regulatory documents
    ├── tnc/ --- Terms and conditions document
scripts
    ├── extract-translations.js --- Script to extract translation

gatsby-browser.js --- Lifecycle on client side rendering
gatsby-config.js --- Gatsby extensions and Gatsby configuration
gatsby-node.js --- Lifecycle on compilation
gatsby-ssr.js --- Lifecycle on server side rendering
commitlint.config.js --- declartion of commit convention

...other_config_file.xx

```
