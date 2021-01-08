import React from 'react'
import { HeroContainer, HeaderContainer, ImageWrapper, SubTitle, Title } from '../style/_hero'
import { HeroImage } from '../images/_hero'

const Hero = () => (
    <HeroContainer>
        <HeaderContainer>
            <Title>BeSquare by Deriv</Title>
            <SubTitle>Launch your IT career with our graduate programme</SubTitle>
        </HeaderContainer>
        <ImageWrapper src={HeroImage} alt="hero image" />
    </HeroContainer>
)

export default Hero
