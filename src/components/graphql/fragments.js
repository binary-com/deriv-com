import { graphql } from 'gatsby'

export const heroImage = graphql`
    fragment heroImage on File {
        childImageSharp {
            gatsbyImageData(
                formats: [AVIF, WEBP, AUTO]
                layout: FULL_WIDTH
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
                placeholder: DOMINANT_COLOR
            )
        }
    }
`
