import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from 'components/containers'
import { BackgroundImage } from 'components/elements'
import device from 'themes/device'

type HeroProps = {
    children: React.ReactNode
}

const StyeldContainer = styled(Container)`
    height: 100%;
`

const query = graphql`
    query {
        image: file(relativePath: { eq: "affiliate/partners-banner.png" }) {
            ...heroImage
        }
    }
`

const StyledBG = styled(BackgroundImage)`
    height: 48rem;
    @media ${device.mobileL} {
        height: 43rem;
    }
`

const Hero = ({ children }: HeroProps) => {
    const hero_img = useStaticQuery(query)
    return (
        <>
            <StyledBG
                data={hero_img.image}
                style={{
                    width: '100%',
                    maxHeight: '480px',
                }}
            >
                <StyeldContainer direction="column" justify="center" align="center">
                    {children}
                </StyeldContainer>
            </StyledBG>
        </>
    )
}

export default Hero
