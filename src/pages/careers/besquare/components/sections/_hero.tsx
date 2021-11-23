import React from 'react'
import { HeroContainer, HeaderContainer, ImageWrapper } from '../../static/style/_hero'
import { TextWrapper, Title } from '../../static/style/_common'
import HeroImage from 'images/common/be-square/hero.png'

const Hero = () => (
    <HeroContainer>
        <HeaderContainer>
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
        </HeaderContainer>
        <ImageWrapper src={HeroImage} alt="BeSquare students standing with their laptops" />
    </HeroContainer>
)

export default Hero
