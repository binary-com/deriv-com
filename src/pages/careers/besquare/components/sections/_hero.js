import React from 'react'
import styled from 'styled-components'
import { ImageWrapper } from '../../static/style/_hero'
import HeroImage from 'images/common/be-square/hero.png'
import { Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

const StyledContainer = styled(Container)`
    @media ${device.tablet} {
        flex-direction: column;
        padding-top: 40px;
    }
`

const StyledFlex = styled(Flex)`
    flex-direction: column;
    max-width: 384px;
    padding-top: 100px;

    @media ${device.tablet} {
        padding: unset;
    }
`

const Hero = () => (
    <Flex bg="black">
        <StyledContainer jc="space-between">
            <StyledFlex>
                <Header color="white" type="hero" mb="8px">
                    BeSquare by Deriv
                </Header>
                <Text color="white" size="2.4rem">
                    Launch your IT career with our graduate programme
                </Text>
            </StyledFlex>
            <ImageWrapper src={HeroImage} alt="BeSquare students standing with their laptops" />
        </StyledContainer>
    </Flex>
)

export default Hero
