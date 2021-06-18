import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TextWrapper, Title } from './_common';
import device from 'themes/device.js'
import { Flex } from 'components/containers'
import { QueryImage } from 'components/elements'

const MainWrapper = styled.div`
    width: 100%;
    background: black;
    position: relative;
    height: 600px;

    .wrap {
        max-width: 1440px;
    }
    .hero-content{
        position: relative;
        z-index: 99;
    }

    @media ${device.tablet} {
        height: 400px;
        text-align: left;
        object-fit: cover;
    }
`
const ImageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media ${device.tabletL} {
        display: flex;
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

    h1 {
        margin-bottom: 20px;
    }

    @media ${device.laptopM} {
        height: ${(props) => props.laptopM_height};
        min-height: unset;
    }
    @media ${device.laptop} {
        height: ${(props) => props.laptop_height};
        padding: 2rem;
    }
    @media ${device.tabletL} {
        height: ${(props) => props.tabletL_height};
        align-items: flex-start;
    }
    @media ${device.tablet} {
        justify-content: center;
        height: 100%;
    }
`

const Hero = ({ heroImage, title, description }) => (
    <MainWrapper>
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
        <ImageWrapper>
            <QueryImage width='100%' height="100%" data={heroImage} alt="Hero Blog" />
        </ImageWrapper>

    </MainWrapper>
)

Hero.propTypes = {
    description: PropTypes.any,
    heroImage: PropTypes.any,
    title: PropTypes.any,
}

export default Hero
