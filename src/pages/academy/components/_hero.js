import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device.js'
import { Flex } from 'components/containers'
import { BackgroundImage, Header } from 'components/elements'
import { LinkButton } from 'components/form'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

const StyledBackground = styled(BackgroundImage)`
    width: 100%;
    height: 504px;
    object-fit: cover;
    background-size: cover;
    background-color: transparent;
    background-repeat: no-repeat, no-repeat;
    background-position: center, center right;

    @media ${device.tabletL} {
        height: 440px;
    }
    @media ${device.tablet} {
        height: auto;
        object-fit: cover;
        background-position: center right 15% !important;

        ::before,
        ::after {
            background-position: center right 15% !important;
        }
    }
`
const Wrapper = styled(Flex)`
    position: relative;
    justify-content: flex-start;
    align-items: center;
    min-height: ${(props) => props.d_height};
    padding: 10rem 12rem;
    z-index: 1;
    flex-direction: column;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;

    @media screen and (min-width: 1980px) {
        max-width: 1900px;
    }
    @media ${device.laptopM} {
        padding: 88px 40px;
    }
    @media ${device.tabletS} {
        padding: 88px 16px 64px;
    }
`

const Hero = ({ cta_text, href, imageAlt, imageData, title, description }) => {
    const [is_mobile] = useBrowserResize()
    const linear_bg_value = is_mobile
        ? `linear-gradient(76.78deg, #000000 30.72%, rgba(0, 0, 0, 0) 97.58%)`
        : `linear-gradient(66.11deg, #000000 24.94%, rgba(0, 0, 0, 0) 83.1%)`

    const backgroundFluidImageStack = [imageData.childImageSharp.fluid, linear_bg_value].reverse()
    const button_text = cta_text ? cta_text : 'Learn more'

    return (
        <>
            <StyledBackground fluid={backgroundFluidImageStack} alt={imageAlt}>
                <Wrapper>
                    <Header
                        as="h1"
                        color="white"
                        align="center"
                        type="heading-2"
                        max_width="588px"
                        mb="8px"
                        tabletL={{ max_width: '320px' }}
                    >
                        {title}
                    </Header>
                    <Header
                        as="p"
                        color="white"
                        align="center"
                        weight="regular"
                        type="subtitle-2"
                        max_width="588px"
                        tabletL={{ max_width: '320px' }}
                    >
                        {description}
                    </Header>
                    <Flex jc="center" height="unset" mt="16px">
                        <LinkButton
                            id="hero-article"
                            to={href}
                            width="auto"
                            hero
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {button_text}
                        </LinkButton>
                    </Flex>
                </Wrapper>
            </StyledBackground>
        </>
    )
}

Hero.propTypes = {
    cta_text: PropTypes.string,
    description: PropTypes.any,
    heroImage: PropTypes.any,
    href: PropTypes.string,
    imageAlt: PropTypes.string,
    imageData: PropTypes.any,
    title: PropTypes.any,
}

export default Hero
