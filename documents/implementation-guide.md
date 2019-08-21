## Implementation guide

### Styled Component

to use styled component you can import it

```
import styled from 'styled-components'
```

to use it you can create a function using the imported `styled`

```
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

```
<_component_name_>
    <children>
/_component_name_>
```

you can extend style component like this

```
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

```
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

```
import Logo from '../images/logo-header.svg'

<Logo />
```

### Translate Text

translation functions and component located within `src/components/localization` directory.
text translation use `react-i18next`, you can take a look at [react-i18next](https://react.i18next.com/) for more information.

Usage example:

```
import { localize, Localize } from '../localization'

<p>{localize('text need to be translated')}</p>
<p><Localize
        text='your name is <0>{{name}}</0>, <1>view more info</1>'
        values={{ name: this.state.name || 'jollie' }}
        components={[
            <strong key={0} />,
            <a key={1} href='#' />
        ]}
    />
</p>
```
