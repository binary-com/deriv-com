import { graphql } from 'gatsby'

// To do: This should replace backGroundBlurLegacy once background images is supported in gatsby-plugin-image
export const backGroundBlur = graphql`
    fragment backGroundBlur on File {
        childImageSharp {
            gatsbyImageData(
                quality: 65
                breakpoints: [360, 600, 1280, 1920]
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                placeholder: NONE
            )
        }
    }
`

export const backGroundBlurLegacy = graphql`
    fragment backGroundBlurLegacy on File {
        childImageSharp {
            fluid(quality: 90, maxWidth: 2048, srcSetBreakpoints: [600, 1440]) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
                originalName
            }
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            gatsbyImageData(
                quality: 45
                breakpoints: [360, 600, 992]
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                placeholder: NONE
            )
        }
    }
`
