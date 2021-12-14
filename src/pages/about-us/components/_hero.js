import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Container, Show } from 'components/containers'
import { Header } from 'components/elements'
import { Background } from 'components/elements/background-image'
import device from 'themes/device.js'

const BackgroundWrapper = styled(Background)`
    padding-top: 80px;
    background-size: cover;
    background-position: bottom right;
`

const Wrapper = styled(Container)`
    @media ${device.tabletS} {
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
        max-width: 328px;
        padding: 0;
    }
`

const StyledHeader = styled(Header)`
    display: flex;
    justify-content: center;
    font-size: 17rem;
    align-items: center;

    @media ${device.tabletL} {
        margin-top: 1.3rem;
        font-size: 8rem;
    }
    @media ${device.mobileS} {
        margin-top: 0;
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

const HeroComponent = ({ title, content, background_data }) => {
    return (
        <BackgroundWrapper data={background_data}>
            <Wrapper p="0" justify="space-around" height="63rem">
                <InformationWrapper height="unset" direction="column">
                    <StyledHeader mt="4rem" type="hero" color="white">
                        {title}
                    </StyledHeader>
                    <HeroContent m="2rem 0 0" direction="column" justify="flex-start">
                        <Header color="white" type="subtitle-1" weight="normal">
                            {content}
                        </Header>
                    </HeroContent>
                </InformationWrapper>
            </Wrapper>
        </BackgroundWrapper>
    )
}

const query = graphql`
    query {
        about_us_hero_background: file(relativePath: { eq: "about/about_us_hero.png" }) {
            ...fadeIn
        }
        about_us_hero_background_mobile: file(
            relativePath: { eq: "about/about_us_hero_mobile.png" }
        ) {
            ...fadeIn
        }
    }
`

const Hero = ({ title, content }) => {
    const data = useStaticQuery(query)

    return (
        <div>
            <Show.Desktop max_width="tabletL">
                <HeroComponent
                    title={title}
                    content={content}
                    background_data={data['about_us_hero_background']}
                />
            </Show.Desktop>
            <Show.Mobile min_width="tabletL">
                <HeroComponent
                    title={title}
                    content={content}
                    background_data={data['about_us_hero_background_mobile']}
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
