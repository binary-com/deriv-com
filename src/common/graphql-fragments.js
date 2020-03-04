import { graphql } from 'gatsby'

export const backGroundBlur = graphql`
    fragment backGroundBlur on File {
        childImageSharp {
            fluid(maxWidth: 6000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
            }
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            fluid(maxWidth: 1024, srcSetBreakpoints: [400, 600, 960, 1280, 1920]) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
                originalName
            }
        }
    }
`
