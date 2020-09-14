## Implementation guide

### Styled Component

to use styled component you can import it

```js
import styled from 'styled-components'
```

to use it you can create a function using the imported `styled`

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

Then in your react component

```js
<_component_name_>
    <children>
</_component_name_>
```

you can extend style component like this

```js
const _want_extend_ = styled(_component_name_)`
    _your_css_style_
`
```

*noted that we are using `rem` as value where `10px = 1rem`, the rem configuration can be found at `themes/global-style.js`
*for further information you can take a look at [Styled Component](https://www.styled-components.com/)

### Image Component

#### (png|jpg|jpeg|gif) file type

image will be located anywhere within `src/images/common` directory.
this project uses GatsbyImageSharpFluid lazy load image built in gatsby-iamge. for further information, can take a look at [Gatsby Image](https://www.gatsbyjs.org/packages/gatsby-image), the configuration is located at
`src/components/elements/image.js`.

Usage example:

```js
<Image
    width="_image_size_" // this is max width
    img_name="_image_name_"
    alt="_image_alt_"
/>
```

#### (svg) file type

svg will be located anywhere within `src/images/svg` directory.
SVG will be handled by `gatsby-plugin-react-svg` which overriding `svg-react-loader`, you can take a look at [Gatsby SVG](https://www.gatsbyjs.org/packages/gatsby-plugin-react-svg/)

Usage example:

```js
import Logo from 'images/svg/logo-header.svg'
;<Logo />
```

### Translation / Localization

translation functions and component located within `src/components/localization` directory.
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

### Mobile responsive

Mobile responsive device breakpoints can be found in this directory `themes/device`

#### CSS changes

to configure responsiveness based on css changes, you can use `@media`

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

#### JS changes

to configure responsiveness based on js changes or different component render, you can use `Show` component in `/containers` directory

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

#### Create new page

to create new page, please create a directory inside `src/pages`. directory name automatically become the new route,
craete an index.js inside the directory (this is required). To separate into different sections, you can make another js file inside the directory with prefix `_` to avoid creation of new route.

Example directory:

```
   ├── my-page-name/
   │   ├── index.js
   │   ├── _component-name.js
   │   ├── ...
```

Every page should wrap within <Layout /> component, and have a child <SEO title='' description='' />.
It is required to export default your page. and use Higher order component of `WithIntl` from localization to help usage of translation methods.

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

export default WithIntl()(About)
```

### CSS responsive function

to create a responsive component for different breakpoints, please use <Box> component and inject the css styles for available breakpoints.

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

### Handling EU or NonEU Views

to handle visibility of europe countries, you can use `Show` component in `/containers` directory. Eu countries list are located in `common/country-base.js`

Usage example (chain):

```js
import { Show } from 'components/containers'

const Example = () => (
    <div>
        <h1>Test!</h1>
        <Show.Eu minDeviceWidth={size.tabletL} device={{ deviceWidth: size.desktopS }}>
            you are in europe countries
        </Show.Eu>
        <Show.NonEU>you are in non-europe countries</Show.NonEU>
    </div>
)
```
