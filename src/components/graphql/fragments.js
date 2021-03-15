import { graphql } from 'gatsby'

export const heroImage = graphql`
    fragment heroImage on File {
        childImageSharp {
            gatsbyImageData(
                formats: [AUTO, AVIF, WEBP, JPEG]
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
            )
        }
    }
`

export const colorPlaceholder = graphql`
    fragment colorPlaceholder on File {
        childImageSharp {
            gatsbyImageData(
                formats: [AUTO, WEBP, JPEG]
                layout: CONSTRAINED
                breakpoints: [360, 992]
                placeholder: DOMINANT_COLOR
            )
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            gatsbyImageData(
                formats: [AUTO, WEBP, JPEG]
                layout: CONSTRAINED
                breakpoints: [360, 992]
                placeholder: NONE
            )
        }
    }
`
