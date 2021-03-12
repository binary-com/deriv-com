import { graphql } from 'gatsby'

export const heroImage = graphql`
    fragment heroImage on File {
        childImageSharp {
            gatsbyImageData(
                formats: [AVIF, WEBP, AUTO]
                layout: FULL_WIDTH
                breakpoints: [360, 992, 2048]
                placeholder: DOMINANT_COLOR
            )
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            gatsbyImageData(
                formats: [AVIF, WEBP, AUTO]
                layout: CONSTRAINED
                breakpoints: [360, 768]
                placeholder: DOMINANT_COLOR
            )
        }
    }
`
