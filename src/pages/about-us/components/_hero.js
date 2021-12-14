import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Container, Show } from 'components/containers'
import { Header , QueryImage } from 'components/elements'
import { Background } from 'components/elements/background-image'
import device from 'themes/device.js'

const BackgroundWrapper = styled(Background)`
    padding-top: 240px;
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
    position: relative;
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

const HeroComponent = ({ title, background_data, image }) => {
    return (
        <BackgroundWrapper data={background_data}>
            <Wrapper p="0" justify="space-around" height="63rem">
                <InformationWrapper height="unset" direction="column">
                    <QueryImage data={image} alt="example" width="100%" />
                    <StyledHeader mt="4rem" type="hero" color="white">
                        {title}
                    </StyledHeader>
                </InformationWrapper>
            </Wrapper>
        </BackgroundWrapper>
    )
}

const query = graphql`
    query {
        about_us_hero_background: file(relativePath: { eq: "about/bg-desktop.png" }) {
            ...fadeIn
        }
        about_us_hero_background_mobile: file(relativePath: { eq: "about/bg-mobile.png" }) {
            ...fadeIn
        }
        about_us_hero_image: file(relativePath: { eq: "about/img-desktop.png" }) {
            ...fadeIn
        }
        about_us_hero_image_mobile: file(relativePath: { eq: "about/img-mobile.png" }) {
            ...fadeIn
        }
    }
`

const Hero = ({ title }) => {
    const data = useStaticQuery(query)

    return (
        <div>
            <Show.Desktop max_width="tabletL">
                <HeroComponent
                    title={title}
                    image={data['about_us_hero_image']}
                    background_data={data['about_us_hero_background']}
                />
            </Show.Desktop>
            <Show.Mobile min_width="tabletL">
                <HeroComponent
                    title={title}
                    image={data['about_us_hero_image_mobile']}
                    background_data={data['about_us_hero_background_mobile']}
                />
            </Show.Mobile>
        </div>
    )
}

HeroComponent.propTypes = {
    background_data: PropTypes.any,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string,
}

Hero.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string,
}

export default Hero
