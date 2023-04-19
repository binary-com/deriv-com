import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { Container } from 'components/containers'
import device from 'themes/device'
import { BackgroundImageWrapper, StaticImageWrapper, Header } from 'components/elements'
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

const Hero = () => {
    const [is_mobile] = useBrowserResize()

    return (
        <BackgroundImageWrapper>
            <StaticImageWrapper>
                {is_mobile ? (
                    <StaticImage
                        src="../../images/common/bug-bounty/security-overlay-mobile.jpg"
                        alt={localize('_t_deriv security_t_')}
                        formats={['avif']}
                        style={{ opacity: '0.3' }}
                        loading="eager"
                    />
                ) : (
                    <StaticImage
                        src="../../images/common/bug-bounty/security-overlay-desktop.jpg"
                        alt={localize('_t_deriv security_t_')}
                        style={{ opacity: '0.3' }}
                        formats={['avif']}
                        loading="eager"
                    />
                )}
            </StaticImageWrapper>

            <StyledContainer direction="column">
                <Header as="h1" color="white" align="center" type="heading-1">
                    {localize('Bug bounty program')}
                </Header>

                <Subheadline as="p" color="white" align="center" type="subtitle-1">
                    {localize('Security is a collaboration. Report bugs and be rewarded.')}
                </Subheadline>
            </StyledContainer>
        </BackgroundImageWrapper>
    )
}

export default Hero
