## Component Guide

The main function of this document is to introduce some of the main `containers` & `elements` and their usages that we have in this project.

### SectionContainer

-   To be used on the creation of new sections on a page as it adds the `section` element tag and also allows for `padding`, `background-color` and `position` to be passed as props.

Usage example:

```jsx
import { SectionContainer } from 'components/containers'

const YourSection = () => {
    return (
        <SectionContainer padding="4rem 0" background="var(--color-grey-25)">
            <Children />
        </SectionContainer>
    )
}
```

### Box

-   To be used as a container for injecting most of the required styling attributes such a `max-width`, `width`, `min-height`, `height`, `margin`, `padding`, `background`, `mediaqueries` as props.
-   `margin` and `padding` accept short syntaxes, please refer to [function.js](https://github.com/binary-com/deriv-com/blob/master/src/themes/function.js) for further clarification.

Usage example:

```jsx
import { Box } from 'components/containers'

const YourComponent = () => {
    return (
        <Box p="8rem 0" bg="var(--color-grey-8)" id="markets">
            <Children />
        </Box>
    )
}
```

### Container

-   To be used to keep our containers responsive throughout widescreens (max-width of 1200px and width of 80%) and also mobile (width of 90%).
-   The container is an extension to `Box`, in addition to having a `flex` display and accepts flex properties such as `ai`, `jc`, `fd` and `fw`.

Usage example:

```jsx
import { Container } from 'components/containers'

const YourComponent = () => {
    return (
        <Container jc="flex-start" p="1.5rem 0" ai="center">
            <Children />
        </Container>
    )
}
```

### CssGrid

-   To be used when grid is required.
-   Css Grid is an extension to `Box` and also taking all the grid properties such as `columns`, `grid_gap`, `rows`, `column_gap`, `row_gap`, `align`, `justify` and `bgcolor`.
-   It has built-in media queries setup for the grid properties, just add the prefix of `laptop_`, `tablet_` or `mobile_` to the props, for e.g. `tablet_row_gap`

```jsx
import { CssGrid } from 'components/containers'

const YourComponent = () => {
    return (
        <CssGrid
            columns="repeat(4, 26.9rem)"
            column_gap="3.4rem"
            row_gap="10.4rem"
            laptop_columns="repeat(3, 1fr)"
            tablet_columns="repeat(2, 1fr)"
            mobile_columns="1fr"
            mobile_row_gap="6rem"
            margin="1rem 0 0"
        >
            <Children />
            <Children />
            <Children />
            <Children />
        </CssGrid>
    )
}
```

### FlexGridContainer

-   To be used when you need both a mixture of Flex and Grid
-   Flex Grid is an extension to `Container` hence it accepts all the props that `Box` and `Container` accepts, in addition to `content_width`, `gap`, `mobile_content_width`, `mobile_gap` and `grid`.
-   `grid` will handle no margin on every grid interval selected. For an example of six items, grid size = 3 will therefore set `margin-left: 0` for the 1st and 4th item while the 3rd and 6th will have `margin-right: 0`.

Usage example:

```jsx
import { FlexGridContainer } from 'components/containers'

const YourComponent = () => {
    return (
        <StyledFlexGridContainer content_width="38.4rem" gap="1rem" grid="3" justify="center">
            <Children />
            <Children />
            <Children />
        </StyledFlexGridContainer>
    )
}
```

### Text

-   Text will be our go-to extension for paragraph tags
-   It accepts props such as `align`, `size`, `weight`, `color`, `max-width`, `min-width`, `margin`, `padding`
-   `margin` and `padding` accept short syntaxes, please refer to [function.js](https://github.com/binary-com/deriv-com/blob/master/src/themes/function.js) for further clarification.

Usage example:

```jsx
import { Text } from 'components/elements'

const YourComponent = () => {
    return (
        <Text mb="1rem" size="2rem">
            {localize('Example')}
        </Text>
    )
}
```

### Header

-   Headers will take a `type` prop for responsive sizes between mobile and desktop to avoid excessive use of media queries (in hopes to be more aligned with design team)
-   Type prop will take either `display-title` , `page-title` , `section-title` , `sub-section-title` , `main-paragraph` or `sub-paragraph`
-   Do add `as` prop for semantic tags to improve our SEO
-   Do refer to [typography.ts](https://github.com/binary-com/deriv-com/blob/master/src/components/elements/typography.ts) for the breakdown of different sizing across desktop and mobile
-   For any required sizes for desktop/mobile outside the sizes of the design guideline, you can extend via styled components

Usage example:

```jsx
import { Header } from 'components/elements'

const YourComponent = () => {
    return (
        <Header as="h4" type="sub-section-title" mb="0.8rem">
            {localize('Example')}
        </Header>
    )
}
```

### QueryImage

-   An extension of [Gatsby image](https://www.gatsbyjs.org/packages/gatsby-image)
-   Usually called with [useStaticQuery](https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/) to fetch our data
-   Accepts props of `data`, `alt`, `width`, `height` and `className`

Usage example:

```jsx
import { graphql, useStaticQuery } from 'gatsby'
import { QueryImage } from 'components/elements'

const query = graphql`
    query {
        example_image_name: file(relativePath: { eq: "example_image.png" }) {
            ...fadeIn
        }
`

const YourComponent = () => {
    const data = useStaticQuery(query)

    return <QueryImage data={data['example_image_name']} alt="example" width="100%" />
}
```

### LocalizedLink

-   Used for any redirect links. This is an extension of [Gatsby Link](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/).
-   `to` prop is required for this component. You can get around this by having `to=""` if you don't require it.
-   EU countries should prompt a modal popup for any external links
-   Please refer to [localized-link.js](https://github.com/binary-com/deriv-com/blob/master/src/components/localization/localized-link.js) for all the attributes available. Feel free to add onto it for any new internal links.

Usage example:

```jsx
import { LocalizedLink } from 'components/localization'

const YourComponent = () => {
    return (
        <LocalizedLink
            external
            to="https://www.facebook.com/derivdotcom/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={Facebook} alt="facebook" width="41" height="41" />
        </LocalizedLink>
    )
}
```

### localize | Localize

-   Main components for translating text strings
-   `localize` has always be wrapped with a component for e.g. `Text` or `Header` in order for the component with translations to rerender when another language is selected

```jsx
import { localize, Localize } from 'components/localization'
import { Text, LocalizedLinkText } from 'components/elements'


const YourComponent = () => {
    return (
        <Localize
            translate_text="If you agree to our use of {{cookie}}, click on Accept. For more information, <0>see our policy</0>."
            values={{cookie: cookie_value}}
            components={[
                <LocalizedLinkText
                    key={0}
                    to="/terms-and-conditions/#clients"
                    color="red"
                    weight="bold"
                />,
            ]}
        />
        <Text>
            {localize('Example text')}
        </Text>
    )
}
```
