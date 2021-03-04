import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from 'components/containers'
import { BackgroundImage } from 'components/elements'

const StyeldContainer = styled(Container)`
    height: 100%;
`

const query = graphql`
    query {
        image: file(relativePath: { eq: "partners-banner.png" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 2048, srcSetBreakpoints: [600, 1440]) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    originalName
                }
            }
        }
        image_mobile: file(relativePath: { eq: "partners-banner-mobile.png" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 2048, srcSetBreakpoints: [600, 1440]) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    originalName
                }
            }
        }
    }
`

const Hero = ({ children }) => {
    const hero_img = useStaticQuery(query)
    return (
        <>
            <BackgroundImage
                data={hero_img.image}
                style={{
                    height: '80rem',
                    width: '100%',
                }}
            >
                <StyeldContainer direction="column" justify="center" align="center">
                    {children}
                </StyeldContainer>
            </BackgroundImage>
        </>
    )
}

Hero.propTypes = {
    children: PropTypes.node,
}

export default Hero
