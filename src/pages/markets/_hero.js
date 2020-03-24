import React from 'react'
import styled from 'styled-components'
import { localize, Localize, WithIntl } from 'components/localization'
import { Header, Text, Image } from 'components/elements'
import { Container, Wrapper, Flex, SEO } from 'components/containers'

const HeroWrapper = styled.section`
    width: 100%;
    height: 60rem;
    background-color: var(--color-white);
    position: relative;
`

const BackgroundWrapper = styled.div`
    position: relative;
    height: 60rem;
    width: 100%;
`
const ContentWrapper = styled.div`
    position: absolute;
    height: 60rem;
    width: 100%;
    top: 0;
    left: 0;
`

export const Hero = () => {
    return (
        <HeroWrapper>
            <BackgroundWrapper>
                <Image img_name="market-background.png" width="100%" height="60rem" />
                <ContentWrapper>
                    <Container direction="column">
                        <Header as="h1" color="white" lh="1.15" align="center">
                            {localize('Markets to trade on Deriv')}
                        </Header>
                        <Header
                            as="h2"
                            color="white"
                            lh="1.5"
                            font_size="var(--text-size-m)"
                            weight="500"
                            align="center"
                        >
                            {localize(
                                'Get the guidance you need to start trading on our platform. Browse through all the markets that we offer, learn about our trade types, and gain insight on how to make smarter trading decisions.',
                            )}
                        </Header>
                    </Container>
                </ContentWrapper>
            </BackgroundWrapper>
            {/* <Container>
                <Header as="h1" color="white" lh="1.15" align="center">
                    {localize('Markets to trade on Deriv')}
                </Header>
                <Header
                    as="h2"
                    color="white"
                    lh="1.5"
                    font_size="var(--text-size-m)"
                    weight="500"
                    align="center"
                >
                    {localize(
                        'Get the guidance you need to start trading on our platform. Browse through all the markets that we offer, learn about our trade types, and gain insight on how to make smarter trading decisions.',
                    )}
                </Header>
            </Container> */}
        </HeroWrapper>
    )
}
