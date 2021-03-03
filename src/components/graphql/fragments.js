import { graphql } from 'gatsby'

export const backGroundBlur = graphql`
    fragment backGroundBlur on File {
        childImageSharp {
            gatsbyImageData(
                quality: 75
                breakpoints: [360, 600, 1280, 1920]
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
                quality: 45
                breakpoints: [360, 600, 992]
                formats: [AUTO, WEBP, AVIF]
                layout: FULL_WIDTH
                placeholder: NONE
            )
        }
    }
`
