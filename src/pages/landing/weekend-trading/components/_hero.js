import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Container, Show } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import { Background } from 'components/elements/background-image'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'

const BackgroundWrapper = styled(Background)`
    background-size: cover;
    background-position: bottom right;
    @media ${device.desktopL} {
        height: 70rem !important;
    }
    @media ${device.desktop} {
        height: 65rem !important;
    }
    @media ${device.tabletL} {
        height: 155rem !important;
    }
    @media ${device.tablet} {
        height: 136rem !important;
    }
    @media ${device.tabletS} {
        height: 105rem !important;
    }
    @media ${device.mobileL} {
        height: 95rem !important;
    }
    @media ${device.mobileM} {
        height: 90rem !important;
    }
    @media ${device.mobileS} {
        height: 80rem !important;
    }
`

const Wrapper = styled(Container)`
    background-color: transparent;
    height: unset;

    @media ${device.tabletL} {
        padding-left: 4rem;
    }

    @media ${device.mobileL} {
        padding-left: 2rem;
        flex-direction: column-reverse;
        justify-content: center;
    }
`

const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 60.5rem;
    z-index: 1;

    @media ${device.tabletL} {
        max-width: 55rem;
        top: 280px;
        padding: 0 16px;
    }
    @media ${device.mobileL} {
        max-width: 328px;
    }
    @media ${device.mobileM} {
        padding: 0;
    }
`

const HeroContent = styled(Flex)`
    height: unset;

    ${Header} {
        font-size: 24px;
        font-weight: 200;
        color: var(--color-black-3);
        display: flex;
        margin-top: 1rem;
        line-height: 2.6rem;
        max-width: 90%;
    }
    @media ${device.laptopM} {
        ${Header} {
            font-size: 22px;
        }
    }
    @media ${device.tabletL} {
        ${Header} {
            font-size: 20px;
            line-height: 26px;
            max-width: 100%;
        }
    }

    @media ${device.mobileL} {
        ${Header} {
            font-size: 18px;
            margin-top: 10px;
            margin-bottom: 0;
        }
    }
    @media ${device.mobileS} {
        ${Header} {
            max-width: 98%;
        }
    }
`
const StyledHeader = styled(Header)`
    padding-top: 35px;
    color: var(--color-black-3);
    line-height: 9rem;
    font-weight: 600;
    display: flex;
    font-size: 70px;

    @media ${device.laptopM} {
        width: 100%;
        font-size: 60px;
        line-height: 8rem;
    }
    @media ${device.tabletL} {
        font-size: 43px;
        line-height: 7rem;
    }
    @media ${device.mobileL} {
        margin-top: 1rem;
        font-size: 40px;
        line-height: 50px;
        padding-top: 3px;
    }
    @media ${device.mobileXS} {
        font-size: 30px;
        padding-top: 3px;
        line-height: 40px;
    }
`

const TryButton = styled(LinkButton)`
    padding: 14px 16px;
    width: min-content;
    white-space: nowrap;
    font-size: 14px;
    margin-top: 1.2rem;
    border: unset;

    @media ${device.tablet} {
        padding: 1.8rem 1.6rem;
        height: 42px;
        white-space: nowrap;
        margin-top: 30px;
    }
`

const HeroComponent = ({ title, content, background_data }) => {
    return (
        <BackgroundWrapper data={background_data}>
            <Wrapper justify="space-between">
                <InformationWrapper height="unset" direction="column">
                    <StyledHeader as="h1" weight={400}>
                        {title}
                    </StyledHeader>
                    <HeroContent direction="column" justify="flex-start">
                        <Header as="h2">{content}</Header>
                    </HeroContent>
                    <TryButton
                        secondary="true"
                        to="/"
                        external="true"
                        type="deriv_app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {localize('Get trading')}
                    </TryButton>
                </InformationWrapper>
            </Wrapper>
        </BackgroundWrapper>
    )
}

const query = graphql`
    query {
        p2p_hero_background: file(relativePath: { eq: "landing/weekend.png" }) {
            ...fadeIn
        }
        p2p_hero_background_mobile: file(relativePath: { eq: "landing/weekend-m.png" }) {
            ...fadeIn
        }
    }
`

const Hero = ({ title, content }) => {
    const data = useStaticQuery(query)

    return (
        <div>
            <Show.Desktop min_width="800">
                <HeroComponent
                    title={title}
                    content={content}
                    background_data={data['p2p_hero_background']}
                />
            </Show.Desktop>
            <Show.Mobile>
                <HeroComponent
                    title={title}
                    content={content}
                    background_data={data['p2p_hero_background_mobile']}
                />
            </Show.Mobile>
        </div>
    )
}

HeroComponent.propTypes = {
    background_data: PropTypes.any,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string,
}

Hero.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string,
}

export default Hero
