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
    background-color: transparent;
`

const Wrapper = styled(Container)`
    justify-content: space-between;
    background-color: transparent;
    height: unset;
    padding-top: 2rem;
    padding-bottom: 27rem;

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
    flex-direction: column;
    justify-content: flex-start;
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
            font-size: 16px;
            max-width: 100%;
        }
    }
    @media ${device.mobileL} {
        ${Header} {
            font-size: 20px;
            line-height: 25px;
            margin-top: 1px;
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
        font-size: 6rem;
        line-height: 8rem;
    }
    @media ${device.tabletL} {
        margin-top: 2rem;
        font-size: 40px;
        line-height: 6rem;
    }
    @media ${device.mobileL} {
        padding-top: 3px;
        line-height: 50px;
    }
`

const TryButton = styled(LinkButton)`
    padding: 14px 16px;
    width: min-content;
    white-space: nowrap;
    font-size: 14px;
    margin-top: 1.2rem;
    border: unset;

    @media ${device.tabletL} {
        padding: 1.5rem 1.6rem;
        height: 42px;
        white-space: nowrap;
        margin-top: 24px;
        margin-bottom: 680px;
    }
    @media ${device.mobileL} {
        padding: 1.5rem 1.6rem;
        height: 42px;
        white-space: nowrap;
        margin-top: 24px;
        margin-bottom: 230px;
    }
`

const HeroComponent = ({ title, content, background_data }) => {
    return (
        <BackgroundWrapper data={background_data}>
            <Wrapper>
                <InformationWrapper height="unset" direction="column">
                    <StyledHeader as="h1" weight={400}>
                        {title}
                    </StyledHeader>
                    <HeroContent>
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
