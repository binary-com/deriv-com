# Development Style Guide

In this project, tey to keep relevant files in 5 major directories which are `common`, `components`, `images`, `pages`, `themes`.
We will describe them more in the enxt sections.

## File Structure

Below is a sample file structure of the project.

```
src
    ├── common/
    │   ├── websocket/
    │   ├── storage.js
    │   └── utility.js
    ├── components/
    │   ├── containers/
    │   ├── elements/
    │   ├── form/
    │   ├── layout/
    ├── images/
    │   ├── common/
    │   ├── svg/
    ├── pages/
    │   ├── index.js
    │   ├── 404.js
    │   ├── ...
    ├── themes/
    │   ├── global-style.js
    │   ├── reset.js
    │   ├── variables.js

gatsby-browser.js
gatsby-config.js
gatsby-node.js
```

This guide is based on presentational and container components.
If you're not sure of the distinction between them, we recommend you read the
[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
article first.

## common

The `common` directory contains common javascript to be used for utilities or for websocket calls.

## components

All reusable components will be stored in this directory.
contains React components, of either stateless or stateful varieties.
The optimal structure for components is to place files relevant to a component inside
its own subdirectory, e.g.:

```
Components/
├── containers/
└── elements/
└── form/
└── layout/
```

`containers` used to store specific function component for e.g. (Localization or SEO); `elements` used to store reusable piece of ui component such as card, image, header, wrapper, etc; `form` used to store form component such as button or input; and lastly `layout` used to store main wrapper for pages.

## images

This directory contains all image resources. all images are handled with `gatsby-image` for `lazy-loading` image purposes. you can take a look at [Gatsby Image](https://www.gatsbyjs.org/packages/gatsby-image/?=gatsby-image) page to understand more about its function and the usage. except for svg will be handled by `gatsby-plugin-react-svg` which overriding `svg-react-loader`, you can take a look at [Gatsby SVG](https://www.gatsbyjs.org/packages/gatsby-plugin-react-svg/) to see its usage.

## pages

This directories contains all pages, the name of the file here will be the redirection link to each of the page.

### COMPONENTS

This directory contains React components, of either stateless or stateful varieties
(e.g. `function` or `class` components).

The optimal structure for components is to place files relevant to a component inside
its own subdirectory, e.g.:

```
Components/
├── Elements/
│   ├── full-screen-dialog.jsx
│   └── mobile-widget.jsx
└── Form/
    ├── ContractType/
    ├── Purchase/
    ├── TradeParams/
    ├── form-layout.jsx
    ├── screen-large.jsx
    └── screen-small.jsx
```

#### Do:

-   Keep all files immediately relevant to a component inside the given component directory.

-   make it dead simple to import the component from elsewhere.
-   Feel free to create subdirectories for relevant utils or helpers
    if it helps to keep things tidy
-   Keep components small, focused and easy to test, breaking up complex components into smaller components
-   Try to create new, reusable components instead of "sub-components"
    (i.e. prefer not to create sub-directories that contain more components)
-   **Be consistent** — however, you choose to lay things out

#### Don't:

-   Mix concerns (files, modules) that should really belong to other components
-   Forget to write tests... :wink:
