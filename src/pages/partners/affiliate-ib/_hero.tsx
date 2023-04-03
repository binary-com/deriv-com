import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from 'components/containers'
import { BackgroundImage } from 'components/elements'

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

const Hero = ({ children }: HeroProps) => {
    const hero_img = useStaticQuery(query)

    return (
        <BackgroundImage data={hero_img.image} alt="affiliate" child_style={{ height: '80rem' }}>
            <StyeldContainer direction="column" justify="center" align="center">
                {children}
            </StyeldContainer>
        </BackgroundImage>
    )
}

export default Hero
