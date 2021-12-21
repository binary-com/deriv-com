import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TextWrapper, Title } from './_common'
import device from 'themes/device.js'
import { Flex } from 'components/containers'
import { BackgroundImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

const StyledBackground = styled(BackgroundImage)`
    width: 100%;
    height: 600px;
    object-fit: cover;
    background-size: cover;
    background-color: transparent;
    background-repeat: no-repeat, no-repeat;
    background-position: center, center right;

    @media ${device.tabletL} {
        height: 650px;
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
    justify-content: center;
    min-height: ${(props) => props.d_height};
    padding: 2rem 12rem;
    z-index: 1;
    flex-direction: column;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;

    h1 {
        margin-bottom: 20px;
    }
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
                    <Title
                        as="h1"
                        color={'white'}
                        text_align={'left'}
                        font_size={['64px', '32px']}
                        line_height={['80px', '40px']}
                        max_width={['636px', '328px']}
                    >
                        {title}
                    </Title>
                    <TextWrapper
                        color={'white'}
                        font_size={['20px', '14px']}
                        line_height={['30px', '24px']}
                        max_width={['636px', '328px']}
                    >
                        {description}
                    </TextWrapper>
                    <Flex jc="flex-start" height="unset" mt="24px" tabletL={{ mt: '16px' }}>
                        <LinkButton id="hero-article" to={href} width="auto" hero>
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
