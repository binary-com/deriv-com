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

const Hero = () => (
    <Flex bg="black">
        <StyledContainer jc="space-between">
            <Flex fd="column" max_width="384px" pt="100px" tablet={{ pt: 'unset' }}>
                <Header color="white" type="hero" mb="8px">
                    BeSquare by Deriv
                </Header>
                <Text color="white" size="2.4rem">
                    Launch your IT career with our graduate programme
                </Text>
            </Flex>
            <ImageWrapper src={HeroImage} alt="BeSquare students standing with their laptops" />
        </StyledContainer>
    </Flex>
)

export default Hero
