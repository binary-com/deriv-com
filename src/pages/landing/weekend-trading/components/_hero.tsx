import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { Flex, Container } from 'components/containers'
import { BackgroundImageWrapper, Header, StaticImageWrapper } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

const Wrapper = styled(Container)`
    justify-content: flex-start;

    @media ${device.desktopL} {
        height: 73rem;
    }
    @media ${device.desktop} {
        height: 65rem;
    }
    @media ${device.tabletL} {
        height: 155rem;
    }
    @media ${device.tablet} {
        height: 136rem;
    }
    @media ${device.tabletS} {
        height: 105rem;
        margin-left: 0;
        padding: 2.1rem 16px 0;
        flex-direction: column-reverse;
        justify-content: center;
    }
    @media ${device.mobileL} {
        height: 95rem;
    }
    @media ${device.mobileM} {
        height: 90rem;
    }
    @media ${device.mobileS} {
        height: 80rem;
    }
`
const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 71rem;
    z-index: 1;
    justify-content: flex-start;

    @media ${device.tabletL} {
        max-width: 55rem;
        top: 280px;
        padding: 0 16px;
    }
    @media ${device.mobileL} {
        max-width: 328px;
        padding: 0;
    }
`
const HeroContent = styled(Flex)`
    height: unset;

    ${Header} {
        font-weight: 350;
        color: var(--color-black-3);
        display: flex;
        margin-top: 1rem;
    }

    @media ${device.mobileL} {
        ${Header} {
            margin: 10px 0 0;
        }
    }
`

const StyledHeader = styled(Header)`
    color: var(--color-black-3);
    display: flex;

    @media ${device.tabletL} {
        margin-top: 1.3rem;
    }
    @media ${device.mobileS} {
        margin-top: 0;
    }
`
const TryButton = styled(LinkButton)`
    padding: 17px 24px;
    width: min-content;
    white-space: nowrap;
    font-size: 18px;
    margin-top: 1.2rem;
    border: unset;
    font-weight: 500;

    @media ${device.tablet} {
        padding: 14px 18px;
        font-size: 14px;
        margin-top: 40px;
        font-weight: 700;
    }
    @media ${device.mobileL} {
        margin-top: 20px;
    }
    @media ${device.mobileS} {
        margin-top: 10px;
    }
`

const Hero = () => {
    const [is_mobile] = useBrowserResize()

    return (
        <BackgroundImageWrapper>
            <StaticImageWrapper>
                {is_mobile ? (
                    <StaticImage
                        src="../../../../images/common/landing/weekend-m.png"
                        alt={localize('_t_weekend trading_t_')}
                        objectFit="cover"
                        formats={['avif', 'webp', 'auto']}
                        objectPosition="bottom right"
                        loading="eager"
                    />
                ) : (
                    <StaticImage
                        src="../../../../images/common/landing/weekend.png"
                        alt={localize('_t_weekend trading_t_')}
                        objectFit="cover"
                        formats={['avif', 'webp', 'auto']}
                        objectPosition="bottom right"
                        loading="eager"
                    />
                )}
            </StaticImageWrapper>

            <Wrapper p="4rem 0 0">
                <InformationWrapper direction="column">
                    <StyledHeader type="hero">
                        <Localize translate_text="_t_Ride the trends even on weekends_t_" />
                    </StyledHeader>
                    <HeroContent direction="column" jc="flex-start">
                        <Header as="h2" type="subtitle-1">
                            <Localize translate_text="_t_Trade even when most financial markets are closed_t_" />
                        </Header>
                    </HeroContent>
                    <TryButton
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        type="submit"
                        secondary
                        to="/signup/"
                    >
                        <Localize translate_text="_t_Get trading_t_" />
                    </TryButton>
                </InformationWrapper>
            </Wrapper>
        </BackgroundImageWrapper>
    )
}

export default Hero
