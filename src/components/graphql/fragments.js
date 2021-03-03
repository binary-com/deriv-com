import { graphql } from 'gatsby'

export const backGroundBlur = graphql`
    fragment backGroundBlur on File {
        childImageSharp {
            gatsbyImageData(
                quality: 80
                placeholder: NONE
                layout: FULL_WIDTH
                formats: [AUTO, WEBP, AVIF]
            )
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            gatsbyImageData(placeholder: NONE, layout: FULL_WIDTH, formats: [AUTO, WEBP, AVIF])
        }
    }
`
