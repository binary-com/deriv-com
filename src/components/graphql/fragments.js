import { graphql } from 'gatsby'

export const backGroundBlur = graphql`
    fragment backGroundBlur on File {
        childImageSharp {
            gatsbyImageData(
                breakpoints: [320, 600, 1280, 1920]
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                placeholder: NONE
            )
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            gatsbyImageData(
                breakpoints: [320, 600, 992]
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                placeholder: NONE
            )
        }
    }
`
