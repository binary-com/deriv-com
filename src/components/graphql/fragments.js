import { graphql } from 'gatsby'

export const heroImage = graphql`
    fragment heroImage on File {
        childImageSharp {
            gatsbyImageData(
                quality: 60
                formats: [AVIF, WEBP, AUTO]
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
            )
        }
    }
`

export const largeImage = graphql`
    fragment largeImage on File {
        childImageSharp {
            gatsbyImageData(
                formats: [AVIF, WEBP, AUTO]
                layout: CONSTRAINED
                breakpoints: [360, 992, 1440]
                placeholder: DOMINANT_COLOR
            )
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            gatsbyImageData(
                quality: 40
                formats: [AVIF, WEBP, AUTO]
                layout: CONSTRAINED
                breakpoints: [360, 600, 992]
                placeholder: DOMINANT_COLOR
            )
        }
    }
`
