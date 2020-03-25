import { graphql } from 'gatsby'

export const backGroundBlur = graphql`
    fragment backGroundBlur on File {
        childImageSharp {
            fluid(maxWidth: 1024, srcSetBreakpoints: [600, 1280, 1920], quality: 85) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
            }
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            fluid(maxWidth: 1024, srcSetBreakpoints: [600, 1280, 1920], quality: 90) {
                ...GatsbyImageSharpFluid_noBase64
                originalName
            }
        }
    }
`
