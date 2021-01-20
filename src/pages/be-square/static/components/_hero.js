import React from 'react'
import { HeroContainer, HeaderContainer, ImageWrapper } from '../style/_hero'
import { TextWrapper, Title } from '../style/_common'
import { localize } from 'components/localization'
import HeroImage from 'images/common/be-square/hero.png'

const Hero = () => (
    <HeroContainer>
        <HeaderContainer>
            <Title
                color={'white'}
                text_align={'left'}
                font_size={['80px', '40px']}
                line_height={['100px', '50px']}
                max_width={['415px', '237px']}
            >
                {localize('BeSquare by Deriv')}
            </Title>
            <TextWrapper
                color={'white'}
                font_size={['24px', '18px']}
                line_height={['36px', '22px']}
                max_width={['384px', '328px']}
            >
                {localize('Launch your IT career with our graduate programme')}
            </TextWrapper>
        </HeaderContainer>
        <ImageWrapper src={HeroImage} alt="hero image" />
    </HeroContainer>
)

export default Hero
