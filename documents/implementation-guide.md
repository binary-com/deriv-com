# General Implementation guide

**In this Document**

-   [Styled Component](#styled-component)
-   [Image Component](#image-component)
-   [Translation / Localization](#translation-/-localization)
-   [Mobile responsive](#mobile-responsive)
-   [CSS responsive function](#css-responsive-function)
-   [Create new page](#create-new-page)
-   [Handling EU or NonEU Views](#handling-eu-or-noneu-views)

## Styled Component

To use a styled component you can follow this step:

1. Import it

```js
import styled from 'styled-components'
```

2. For extending styles of a html element using the imported `styled`

```js
const _component_name_ = styled._any_html_tag`
    _your_css_style_ (for e.g.)
    color: var(--color-red);
    margin: 1rem 0.4rem;
    background-color: ${props => props.is_testing ? var(--color-white) : var(--color-black)}

    &:hover {
        _your_css_style_
    }
    &._any_class_name {
        _your_css_style_
    }
`
```

Also you can extend styled component like this

```js
const _want_extend_ = styled(_component_name_)`
    _your_css_style_
`
```

3. Then in your react component

```js
<_component_name_>
    <children>
</_component_name_>
```

**Note:** Use `rem` as length unit where `10px = 1rem`, the rem configuration can be found at `themes/global-style.js`

For further information you can take a look at [Styled Component Documentation](https://styled-components.com/docs)

## Image Component

### (png|jpg|jpeg|gif) file type

An image will be located anywhere within `src/images/common` directory.
This project uses `GatsbyImage` built in gatsby-plugin-image. For further information, can take a look at [Gatsby Image plugin](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#gatsbyimage), the configuration is located at
`src/components/elements/query-image.js`.

Usage example:

```js
<Image data="_image_data_object_" alt="_image_alt_" />
```

### (svg) file type

svg will be located anywhere within `src/images/svg` directory.
SVG will be handled by `gatsby-plugin-react-svg` which overriding `svg-react-loader`, you can take a look at [Gatsby SVG](https://www.gatsbyjs.org/packages/gatsby-plugin-react-svg/)

Usage example:

```js
import { ReactComponent as Logo } from 'images/svg/logo-header.svg'
;<Logo />
```

## Translation / Localization

Translation functions and component located within `src/components/localization` directory.
text translation use `react-i18next`, you can take a look at [react-i18next](https://react.i18next.com/) for more information.

Usage example:

```js
import { localize, Localize } from 'components/localization'

<p>{localize('text need to be translated')}</p>
<p><Localize
        translate_text='your name is <0>{{name}}</0>, <1>view more info</1>'
        values={{ name: this.state.name || 'jollie' }}
        components={[
            <strong key={0} />,
            <a key={1} href='#' />
        ]}
    />
</p>
```

## Mobile responsive

Mobile responsive device breakpoints can be found in this directory `themes/device`

### CSS changes

To configure responsiveness based on css changes, you can use `@media`

Usage example:

```js
import device from 'themes/device'
import styled from 'styled-components'

const YourCssStyle = styled.div`
    @media ${device.tabletL} {
        width: 100%;
    }
`
```

### JS changes

to configure responsiveness based on JS changes or different component render, you can use `Show` component in `/containers` directory

Usage example (chain):

```js
import { Show } from 'components/containers'

const Example = () => (
    <div>
        <h1>Device Test!</h1>
        <Show.Desktop minDeviceWidth={size.tabletL} device={{ deviceWidth: size.desktopS }}>
            you are desktop
        </Show.Desktop>
        <Show.Mobile>you are mobile</Show.Mobile>
    </div>
)
```

Usage example (with components):

```js
import { Desktop, Mobile } from 'components/containers'

const Example = () => (
    <div>
        <h1>Device Test!</h1>
        <Desktop minDeviceWidth={size.tabletL} device={{ deviceWidth: size.desktopS }}>
            you are desktop
        </Desktop>
        <Mobile>you are mobile</Mobile>
    </div>
)
```

## CSS responsive function

To create a responsive component for different breakpoints, please use `<Box>` component and inject the CSS styles for available breakpoints.

Usage example:

```js
import { Box } from 'components/containers'

const UseResponsiveCss = () => {
    return (
        <Box
            style={{
                backgroundColor: 'red',
                height: '300px',
                width: '300px',
                color: 'white',
                fontSize: '40px',
            }}
            ml="100px"
            pl="80px"
            laptop={{ ml: '40px', pl: '50px' }}
            mobileS={{ ml: '20px' }}
        >
            component here
        </Box>
    )
}
```

## Create new page

To create a new page, please create a directory inside `src/pages`. Directory name automatically becomes the new route,
create an `index.js` inside the directory (this is required). To separate into different sections, you can make another JS file inside the directory with prefix `_` to avoid creation of new route.

Example directory:

```
   ├── my-page-name/
   │   ├── index.js
   │   ├── _component-name.js
   │   ├── ...
```

Every page should be wrapped within `<Layout />` component, and also it should contain a child `<SEO title='' description='' />`.
It is required to export default your page with a Higher-order component of `WithIntl` from localization to help the usage of translation methods.
Usage example:

```js
import React from 'react'
import styled from 'styled-components'
import { localize, WithIntl } from 'components/localization'

const MyPageName = () => {
    return (
        <Layout>
            <SEO title={localize('My page')} description={localize('My page description')} />
            {/* Your children here */}
        </Layout>
    )
}

export default WithIntl()(MyPageName)
```

## Handling EU or NonEU Views

To handle the visibility for European countries, you can use `Show` component in `/containers` directory. Eu countries list are located in `common/country-base.js`

Usage example (chain):

```js
import { Show } from 'components/containers'

const Example = () => (
    <div>
        <h1>Test!</h1>
        <Show.Eu minDeviceWidth={size.tabletL} device={{ deviceWidth: size.desktopS }}>
            You are in europe countries
        </Show.Eu>
        <Show.NonEU>You are in non-europe countries</Show.NonEU>
    </div>
)
```
