import { graphql } from 'gatsby'

export const backGroundBlur = graphql`
    fragment backGroundBlur on File {
        childImageSharp {
            fluid(quality: 80, maxWidth: 2048) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
                originalName
            }
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            fluid(maxWidth: 1024) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
                originalName
            }
        }
    }
`
