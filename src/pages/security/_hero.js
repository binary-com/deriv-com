import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { BackgroundImage , Header } from 'components/elements'
import { Container } from 'components/containers'
import device from 'themes/device'

const StyledContainer = styled(Container)`
    flex-direction: column;
    height: 100%;
    width: 60%;

    @media ${device.tablet} {
        padding: 0 2rem;
        align-items: flex-start;
        width: 100%;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 1.6rem;
    line-height: 8rem;
    font-size: 6.4rem;

    @media ${device.tablet} {
        font-size: 40px;
        line-height: 50px;
    }
`

const Subheadline = styled(Header)`
    font-size: 2.4rem;
    font-weight: normal;
    line-height: 36px;

    @media ${device.tablet} {
        font-size: 18px;
        line-height: 26px;
    }
`

const query = graphql`
    query {
        image: file(relativePath: { eq: "security/security-overlay.jpg" }) {
            ...heroImage
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(query)

    return (
        <BackgroundImage
            data={data.image}
            alt="deriv security"
            style={{
                height: '90vh',
                width: '100vw',
                backgroundSize: `cover`,
                maxWidth: '100%',
            }}
        >
            <StyledContainer>
                <StyledHeader as="h1" color="white" align="center">
                    Bug bounty program
                </StyledHeader>

                <Subheadline as="h3" color="white" align="center">
                    Security is a collaboration. Report bugs and be rewarded.
                </Subheadline>
            </StyledContainer>
        </BackgroundImage>
    )
}

export default Hero
