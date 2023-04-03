import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { Container } from 'components/containers'
import device from 'themes/device'
import { BackgroundImage, Header } from 'components/elements'
import { localize } from 'components/localization'

const StyledContainer = styled(Container)`
    height: 100%;
    padding: 160px 222px;

    @media ${device.tabletL} {
        padding: 120px 16px;
        width: 100%;
    }
`

const Subheadline = styled(Header)`
    font-weight: normal;
    margin-top: 16px;
`

const query = graphql`
    query {
        hero_background_desktop: file(
            relativePath: { eq: "bug-bounty/security-overlay-desktop.jpg" }
        ) {
            ...heroImage
        }
        hero_background_mobile: file(
            relativePath: { eq: "bug-bounty/security-overlay-mobile.jpg" }
        ) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()
    const background = is_mobile ? data['hero_background_mobile'] : data['hero_background_desktop']

    return (
        <BackgroundImage data={background} alt="deriv security" image_opacity="0.3">
            <StyledContainer direction="column">
                <Header as="h1" color="white" align="center" type="heading-1">
                    {localize('Bug bounty program')}
                </Header>

                <Subheadline as="p" color="white" align="center" type="subtitle-1">
                    {localize('Security is a collaboration. Report bugs and be rewarded.')}
                </Subheadline>
            </StyledContainer>
        </BackgroundImage>
    )
}

export default Hero
