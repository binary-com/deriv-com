import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Container } from 'components/containers'
import { BackgroundImageWrapper, StaticImageWrapper } from 'components/elements'

type HeroProps = {
    children: React.ReactNode
}

const StyeldContainer = styled(Container)`
    height: 80rem;
`

const Hero = ({ children }: HeroProps) => {
    return (
        <BackgroundImageWrapper>
            <StaticImageWrapper>
                <StaticImage
                    src="../../../images/common/affiliate/partners-banner.png"
                    alt="affiliate"
                    loading="eager"
                />
            </StaticImageWrapper>

            <StyeldContainer direction="column" justify="center" align="center">
                {children}
            </StyeldContainer>
        </BackgroundImageWrapper>
    )
}

export default Hero
