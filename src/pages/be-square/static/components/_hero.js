import React from 'react'
import { HeroContainer, HeaderContainer, ImageWrapper, SubTitle, Title } from '../style/_hero'
import { HeroImage } from '../images/_hero'
import { localize } from 'components/localization'

const Hero = () => (
    <HeroContainer>
        <HeaderContainer>
            <Title>{localize('BeSquare by Deriv')}</Title>
            <SubTitle>{localize('Launch your IT career with our graduate programme')}</SubTitle>
        </HeaderContainer>
        <ImageWrapper src={HeroImage} alt="hero image" />
    </HeroContainer>
)

export default Hero
