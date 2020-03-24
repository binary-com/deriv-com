import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Header, Image } from 'components/elements'
import { Container } from 'components/containers'

const BackgroundWrapper = styled.div`
    position: relative;
    height: 60rem;
    width: 100%;
`
const ImageWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 60rem;
    top: 0;
    left: 0;
`
const StyledContainer = styled(Container)`
    padding-top: 20.7rem;

    h4, h1 {
        max-width: 76.1rem;
        z-index: 10;
    }
`
export const Hero = () => {
    return (
        <BackgroundWrapper>
            <ImageWrapper>
                <Image img_name="market-background.png" width="100%" height="60rem" />
            </ImageWrapper>
            <StyledContainer direction="column">
                <Header as="h1" color="white" lh="1.15" align="center">
                    {localize('Markets to trade on Deriv')}
                </Header>
                <Header
                    as="h4"
                    color="white"
                    lh="1.5"
                    font_size="var(--text-size-m)"
                    weight="500"
                    align="center"
                    margin='1.6rem 0 0 0'
                >
                    {localize(
                        'Get the guidance you need to start trading on our platform. Browse through all the markets that we offer, learn about our trade types, and gain insight on how to make smarter trading decisions.',
                    )}
                </Header>
            </StyledContainer>
        </BackgroundWrapper>
    )
}