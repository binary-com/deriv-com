import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TextWrapper, Title } from './_common'
import device from 'themes/device.js'
import { Flex } from 'components/containers'

const MainWrapper = styled.div`
    width: 100%;
    background: black;
    position: relative;
    height: 600px;

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

    > div {
        height: 100%;
    }
    > div > div {
        height: 100%;
    }

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
    max-width: 1440px;
    margin: 0 auto;
    background: linear-gradient(66.11deg, #000000 24.94%, rgba(0, 0, 0, 0) 83.1%);

    h1 {
        margin-bottom: 20px;
    }
    @media screen and (min-width: 1980px) {
        max-width: 1900px;
    }
    @media ${device.tabletL} {
        background: linear-gradient(76.78deg, #000000 30.72%, rgba(0, 0, 0, 0) 97.58%);
    }
    @media screen and (max-width: 500px) {
        padding: 2rem 4rem;
    }
`
const DesktopWrapper = styled(Flex)`
    @media ${device.tabletS} {
        display: none;
    }
`
const MobileWrapper = styled.div`
    display: none;

    @media ${device.tabletS} {
        display: flex;
    }
`

const Hero = ({ heroImage, mobileHeroImage, title, description }) => (
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
        <DesktopWrapper>
            <ImageWrapper>{heroImage}</ImageWrapper>
        </DesktopWrapper>
        <MobileWrapper>
            <ImageWrapper>{mobileHeroImage}</ImageWrapper>
        </MobileWrapper>
    </MainWrapper>
)

Hero.propTypes = {
    description: PropTypes.any,
    heroImage: PropTypes.any,
    mobileHeroImage: PropTypes.any,
    title: PropTypes.any,
}

export default Hero
