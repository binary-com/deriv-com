import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Container } from 'components/containers'
import { Header, BackgroundImage } from 'components/elements'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import device from 'themes/device'
import { HeroProps } from 'pages/landing/_types'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

const Wrapper = styled(Container)`
    @media ${device.tabletS} {
        height: 70rem;
        margin-left: 0;
        padding: 2rem 16px 0;
        flex-direction: column-reverse;
        justify-content: center;
    }
`

const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 75rem;
    z-index: 1;

    @media ${device.tabletL} {
        max-width: 55rem;
        top: 280px;
        padding: 0 16px;
    }
    @media ${device.mobileL} {
        max-width: 390px;
        padding: 0;
    }
`

const StyledHeader = styled(Header)`
    display: flex;

    @media ${device.tabletL} {
        margin-top: 1.5rem;
    }
    @media ${device.mobileS} {
        margin-top: 18px;
    }
`

const HeroContent = styled(Flex)`
    height: unset;

    ${Header} {
        display: flex;
        margin-top: 1rem;
    }

    @media ${device.mobileL} {
        ${Header} {
            margin: 10px 0 0;
        }
    }
`

const TryButton = styled(LinkButton)`
    padding: 17px 24px;
    width: min-content;
    white-space: nowrap;
    font-size: 18px;
    border: unset;

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

const query = graphql`
    query {
        p2p_hero_background: file(relativePath: { eq: "landing/trade-fx.jpg" }) {
            ...fadeIn
        }
        p2p_hero_background_mobile: file(relativePath: { eq: "landing/trade-fx-m.jpg" }) {
            ...fadeIn
        }
    }
`

const Hero = ({ title, content }: HeroProps) => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()
    const background = is_mobile ? data['p2p_hero_background_mobile'] : data['p2p_hero_background']

    return (
        <BackgroundImage
            data={background}
            alt="forex trading"
            objectFit="cover"
            objectPosition="bottom right"
        >
            <Wrapper p="0" justify="space-between" height="63rem">
                <InformationWrapper height="unset" direction="column">
                    <StyledHeader mt="6.2rem" type="hero" color="white">
                        {title}
                    </StyledHeader>
                    <HeroContent m="2rem 0 0" direction="column" jc="flex-start">
                        <Header color="white" type="subtitle-1" weight="normal">
                            {content}
                        </Header>
                    </HeroContent>
                    <TryButton
                        m="3rem 0 80px"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        type="submit"
                        secondary
                        to={'/signup/'}
                    >
                        {localize('Start trading')}
                    </TryButton>
                </InformationWrapper>
            </Wrapper>
        </BackgroundImage>
    )
}

export default Hero
