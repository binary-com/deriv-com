// THESE ARE FRAGMENTS TO BE USED IN IMAGES

import { graphql } from 'gatsby'

export const heroImage = graphql`
    fragment heroImage on File {
        childImageSharp {
            gatsbyImageData(
                formats: [AUTO, AVIF, WEBP]
                layout: FULL_WIDTH
                placeholder: DOMINANT_COLOR
            )
        }
    }
`

export const bannerImage = graphql`
    fragment bannerImage on File {
        childImageSharp {
            gatsbyImageData(formats: [AUTO, AVIF, WEBP], layout: CONSTRAINED, placeholder: NONE)
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            gatsbyImageData(
                formats: [AUTO, WEBP]
                layout: CONSTRAINED
                breakpoints: [360, 992]
                placeholder: NONE
            )
        }
    }
`

export const homePageHeroFadeIn = graphql`
    fragment homePageHeroFadeIn on File {
        childImageSharp {
            gatsbyImageData(formats: [AUTO, AVIF, WEBP], layout: CONSTRAINED, placeholder: NONE)
        }
    }
`
