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

*noted that we are using `rem` as value where `10px = 1rem`
*for further information you can take a look at [Styled Component](https://www.styled-components.com/)

### Image Component

#### (png|jpg|jpeg|gif) file type

image will be located anywhere within `src/images` directory.
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
import Logo from '../images/logo-header.svg'

;<Logo />
```

### Translate Text

translation functions and component located within `src/components/localization` directory.
text translation use `react-i18next`, you can take a look at [react-i18next](https://react.i18next.com/) for more information.

Usage example:

```js
import { localize, Localize } from '../localization'

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

to configure responsiveness based on js changes or different component render, you can use `<MediaQuery />`, for more information, you can take a look at [react-responsive](https://github.com/contra/react-responsive)

Usage example (hooks):

```js
import { useMediaQuery } from 'react-responsive'
import device, { size } from 'themes/device'

const YourComponent = () => {
    const isTabletOrMobile = useMediaQuery({ query: device.tabletL })
    const isDesktopOrLaptop = useMediaQuery({
        query: `(min-device-width: ${size.tabletL}px)`,
    })

    return (
        <div>
            {isDesktopOrLaptop && (
                <>
                    <p>You are desktop or laptop</p>
                </>
            )}
            {isTabletOrMobile && (
                <>
                    <p>You are Tablet or mobile</p>
                </>
            )}
        </div>
    )
}
```

Usage example (with components):

```js
import MediaQuery from 'react-responsive'
import { size } from 'themes/device'

const Example = () => (
    <div>
        <h1>Device Test!</h1>
        <MediaQuery
            minDeviceWidth={size.tabletL}
            device={{ deviceWidth: size.desktopS }}
        >
            <p>You are a desktop or laptop</p>
            <MediaQuery minDeviceWidth={size.desktopL}>
                <p>You also have a huge screen</p>
            </MediaQuery>
        </MediaQuery>
        <MediaQuery minResolution="2dppx">
            {/* You can also use a function (render prop) as a child */}
            {matches =>
                matches ? <p>You are retina</p> : <p>You are not retina</p>
            }
        </MediaQuery>
    </div>
)
```
