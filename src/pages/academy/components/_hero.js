import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TextWrapper, Title } from './_common'
import device from 'themes/device.js'
import { Flex } from 'components/containers'
import { BackgroundImage } from 'components/elements'

const StyledBackground = styled(BackgroundImage)`
    width: 100%;
    height: 600px;
    object-fit: cover;
    background-size: cover;
    background-color: transparent;
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;

    @media ${device.tabletL} {
        height: 650px;
    }

    @media ${device.tablet} {
        height: 400px;
        object-fit: cover;
        background-position: top right 15% !important;

        ::before,
        ::after {
            background-position: top right 15% !important;
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
    @media screen and (max-width: 556px) {
        padding: 2rem 4rem;
    }
`

const Hero = ({ imageAlt, imageData, title, description }) => {
    const backgroundFluidImageStack = [
        imageData.childImageSharp.fluid,
        `linear-gradient(66.11deg, #000000 24.94%, rgba(0, 0, 0, 0) 83.1%)`,
    ].reverse()

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
                        max_width={['785px', '237px']}
                    >
                        {title}
                    </Title>
                    <TextWrapper
                        color={'white'}
                        font_size={['20px', '14px']}
                        line_height={['30px', '24px']}
                        max_width={['684px', '328px']}
                    >
                        {description}
                    </TextWrapper>
                </Wrapper>
            </StyledBackground>
        </>
    )
}

Hero.propTypes = {
    description: PropTypes.any,
    heroImage: PropTypes.any,
    imageAlt: PropTypes.string,
    imageData: PropTypes.any,
    title: PropTypes.any,
}

export default Hero
