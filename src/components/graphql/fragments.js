import { graphql } from 'gatsby'

export const backGroundBlur = graphql`
    fragment backGroundBlur on File {
        childImageSharp {
            gatsbyImageData(
                quality: 70
                breakpoints: [360, 992, 1440, 2048]
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
                quality: 45
                breakpoints: [360, 600, 992]
                formats: [AVIF, WEBP, AUTO]
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
            )
        }
    }
`
