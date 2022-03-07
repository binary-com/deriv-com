import React from 'react'
import styled from 'styled-components'
import { HeroContainer, HeaderContainer, ImageWrapper } from '../../static/style/_hero'
import { TextWrapper, Title } from '../../static/style/_common'
import HeroImage from 'images/common/be-square/hero.png'
import device from 'themes/device'

export const StyledHeaderContainer = styled(HeaderContainer)`
    padding: 120px 0 80px 120;

    @media ${device.laptopL} {
        padding: 40px 0 0;
    }

    @media ${device.laptop} {
        padding: 40px 0 0;
    }
`

const StyledImageWrapper = styled(ImageWrapper)`
    right: 120px;
    @media ${device.laptopL} {
        right: 30px;
    }

    @media ${device.laptop} {
        right: 0;
    }
`

const Hero = () => (
    <HeroContainer>
        <StyledHeaderContainer>
            <Title
                as="h1"
                color={'white'}
                text_align={'left'}
                font_size={['80px', '40px']}
                line_height={['100px', '50px']}
                max_width={['415px', '237px']}
            >
                BeSquare by Deriv
            </Title>
            <TextWrapper
                color={'white'}
                font_size={['24px', '18px']}
                line_height={['36px', '22px']}
                max_width={['384px', '328px']}
            >
                Launch your IT career with our graduate programme
            </TextWrapper>
        </StyledHeaderContainer>
        <StyledImageWrapper src={HeroImage} alt="BeSquare students standing with their laptops" />
    </HeroContainer>
)

export default Hero
