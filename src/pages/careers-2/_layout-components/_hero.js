import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Container from './_career-container'
import { Header, BackgroundImage } from 'components/elements'
import device from 'themes/device'

const StyledBackGroundImage = styled(BackgroundImage)`
    height: 660px;

    @media ${device.tablet} {
        height: 560px;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 2.4rem;
    color: var(--color-white);

    @media ${device.tablet} {
        text-align: left;
    }
`

const Subheadline = styled(Header)`
    color: var(--color-white);
    max-width: 99.6rem;

    @media ${device.tablet} {
        text-align: left;
    }
`

const StyledContainer = styled(Container)`
    max-width: 984px;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;

    @media ${device.tablet} {
        padding: 0 2rem;
    }
`

const query = graphql`
    query {
        image: file(relativePath: { eq: "careers-2/marketing-bg.png" }) {
            ...heroImage
        }
    }
`

const Hero = (header_data) => {
    const data = useStaticQuery(query)
    return (
        <StyledBackGroundImage
            data={data.image}
            alt={'Deriv careers'}
            style={{
                backgroundSize: `cover`,
                backgroundColor: 'var(--color-black)',
                maxWidth: '100%',
            }}
            dark="0.3"
        >
            <StyledContainer>
                <StyledHeader align="center" as="h1" type="display-title">
                    {header_data.data.title}
                </StyledHeader>
                <Subheadline align="center" as="h3" type="subtitle-1" weight="400">
                    {header_data.data.subtitle}
                </Subheadline>
            </StyledContainer>
        </StyledBackGroundImage>
    )
}
export default Hero
