import React from 'react'
import styled from 'styled-components'
import TrustPilotWidget from './_trust_pilot.js'
import { Text, Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import LineTab from 'components/custom/_line-tab'
import { Container, Flex } from 'components/containers'
import AppStore from 'images/svg/app-store-round.svg'
import GooglePlay from 'images/svg/google-play-round.svg'
import Stars from 'images/svg/stars.svg'
import device from 'themes/device'

const StyledContainer = styled.div`
    background-color: var(--color-grey-25);
    width: 100%;
    height: fit-content;
`

const ClientContainer = styled(Container)`
    display: flex;
    align-items: center;
    min-height: 45.5rem;
    margin: 0 auto 8rem;
`

const ClientFlex = styled(Flex)`
    width: 100%;
    max-width: 144rem;
    min-height: 100px;
    height: fit-content;

    @media ${device.tabletS} {
        flex-direction: column;
        padding: 9rem 4rem;
        max-width: 100%;
    }
`

const ClientCard = styled(Flex)`
    &.left {
        max-width: 38.4rem;
    }
    &.right {
        max-width: 58.8rem;

        .emphasis {
            color: #6a8a8d;
        }
    }
    .trustpilot-container {
        margin-top: 5.4rem;
    }

    @media ${device.tabletS} {
        max-width: 100% !important;

        &.left {
            margin-bottom: 5rem;
        }
    }
`

const AppDownloadBox = styled(Flex)`
    margin-top: 4rem;
    justify-content: start;
`
const AppLink = styled.a`
    margin: 0 2.4rem 0 0;
    cursor: pointer;

    img {
        height: 4.8rem;
    }
`

const ReviewBox = styled(Flex)`
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    height: auto;
`

const ReviewStars = styled.img`
    height: 1rem;
`

const WhatOurClientsSay = () => {
    return (
        <StyledContainer>
            <ClientContainer padding="5rem 0 0">
                <LineTab>
                    <ClientFlex jc="space-between" ai="center">
                        <ClientCard className="left" direction="column">
                            <Header as="h2" type="heading-2">
                                {localize('What our clients say about Deriv')}
                            </Header>
                            <TrustPilotWidget />
                        </ClientCard>
                        <ClientCard className="right" direction="column">
                            <Header as="h3" type="heading-3">
                                <Localize
                                    translate_text="Selling has been <0>seamlessly</0> done and it makes weekend withdrawals an additional plus for this app!."
                                    components={[<span className="emphasis" key={0} />]}
                                />
                            </Header>
                            <Text size="2.4rem">{localize('- DP2P apps')}</Text>
                            <AppDownloadBox>
                                <AppLink>
                                    <img src={GooglePlay} />
                                </AppLink>
                                <AppLink>
                                    <img src={AppStore} />
                                </AppLink>
                                <ReviewBox>
                                    <Text size="1.2rem">
                                        <Localize
                                            translate_text="{{ total_reviews }} review"
                                            values={{
                                                total_reviews: 208,
                                            }}
                                        />
                                    </Text>
                                    <ReviewStars src={Stars} />
                                </ReviewBox>
                            </AppDownloadBox>
                        </ClientCard>
                    </ClientFlex>
                    <ClientFlex jc="space-between" ai="center">
                        <ClientCard className="right" direction="column">
                            <Header as="h3" type="heading-3">
                                <Localize
                                    translate_text="Selling has been <0>seamlessly</0> done and it makes weekend withdrawals an additional plus for this app!."
                                    components={[<span className="emphasis" key={0} />]}
                                />
                            </Header>
                            <Text size="2.4rem">{localize('- DP2P apps')}</Text>
                            <AppDownloadBox>
                                <AppLink>
                                    <img src={GooglePlay} />
                                </AppLink>
                                <AppLink>
                                    <img src={AppStore} />
                                </AppLink>
                                <ReviewBox>
                                    <Text size="1.2rem">
                                        <Localize
                                            translate_text="{{ total_reviews }} review"
                                            values={{
                                                total_reviews: 208,
                                            }}
                                        />
                                    </Text>
                                    <ReviewStars src={Stars} />
                                </ReviewBox>
                            </AppDownloadBox>
                        </ClientCard>
                        <ClientCard className="left" direction="column">
                            <Header as="h2" type="heading-2">
                                {localize('What our clients say about Deriv')}
                            </Header>
                            <TrustPilotWidget />
                        </ClientCard>
                    </ClientFlex>
                </LineTab>
            </ClientContainer>
        </StyledContainer>
    )
}

export default WhatOurClientsSay
