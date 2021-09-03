import React from 'react'
import styled from 'styled-components'
import Stars from 'images/svg/playstore/stars'
import { Text, Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import LineTab from 'components/custom/_line-tab'
import { Container, Flex } from 'components/containers'
import AppStore from 'images/svg/app-store-round.svg'
import GooglePlay from 'images/svg/google-play-round.svg'
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
        padding: 4rem 1.6rem;
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
            margin-bottom: 8.8rem;
        }
        &.right {
            h2 {
                margin-bottom: 0.8rem;
            }
        }
    }
`

const TrustPilotWidget = styled(Flex)`
    margin: 2.5rem 0 0 0;
    width: 24rem;
    margin-left: -1rem;

    @media ${device.tabletS} {
        width: 29rem;
    }
`

const AppDownloadBox = styled(Flex)`
    margin-top: 4rem;
    justify-content: start;

    @media ${device.tabletS} {
        flex-direction: column;
        align-items: center;
    }
`

const AppDownloadBtns = styled(Flex)`
    width: fit-content;

    @media ${device.tabletS} {
        margin-bottom: 1.6rem;
    }
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

const getRatingData = (rating) => {
    const rating_str = typeof rating == 'string' ? rating : rating.toString()
    const rating_data = rating_str.split('.').map((e, k) => (k == 0 ? e : e >= 5 ? 5 : ''))
    const rate = rating_data[0]
    const point = rating_data[1] ? rating_data[1] : 0
    const icon = 'Star' + [rate, point == 5 ? 'Half' : ''].join('')

    return {
        point,
        rate,
        icon,
    }
}

const WhatOurClientsSay = () => {
    const { icon } = getRatingData(4.5)
    return (
        <StyledContainer>
            <ClientContainer padding="5rem 0 0">
                <LineTab>
                    <ClientFlex jc="space-between" ai="center">
                        <ClientCard className="left" direction="column">
                            <Header as="h2" type="heading-2">
                                {localize('What our clients say about Deriv')}
                            </Header>
                            <TrustPilotWidget>
                                <div
                                    className="trustpilot-widget"
                                    data-locale="en-US"
                                    data-template-id="5419b637fa0340045cd0c936"
                                    data-businessunit-id="5ed4c8a9f74f310001f51bf7"
                                    data-style-height="30px"
                                    data-style-width="100%"
                                    data-theme="light"
                                    data-font-family="Roboto"
                                >
                                    <a
                                        href="https://www.trustpilot.com/review/deriv.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Trustpilot
                                    </a>
                                </div>
                            </TrustPilotWidget>
                        </ClientCard>
                        <ClientCard className="right" direction="column">
                            <Header as="h3" type="heading-3">
                                <Localize
                                    translate_text="Selling has been <0>seamlessly</0> done and it makes weekend withdrawals an additional plus for this app!"
                                    components={[<span className="emphasis" key={0} />]}
                                />
                            </Header>
                            <Text size="2.4rem" className="dp2p-text">
                                {localize('- DP2P apps')}
                            </Text>
                            <AppDownloadBox>
                                <AppDownloadBtns>
                                    <AppLink
                                        href="https://play.google.com/store/apps/details?id=com.deriv.dp2p"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={GooglePlay} alt="Get on Google Play" />
                                    </AppLink>
                                    <AppLink
                                        href="https://apps.apple.com/gh/app/deriv-dp2p/id1506901451"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={AppStore} alt="Get on App Store" />
                                    </AppLink>
                                </AppDownloadBtns>
                                <ReviewBox>
                                    <Text size="1.2rem">
                                        <Localize
                                            translate_text="{{ total_reviews }} review"
                                            values={{
                                                total_reviews: 208,
                                            }}
                                        />
                                    </Text>
                                    <ReviewStars src={Stars[icon]} />
                                </ReviewBox>
                            </AppDownloadBox>
                        </ClientCard>
                    </ClientFlex>
                </LineTab>
            </ClientContainer>
        </StyledContainer>
    )
}

export default WhatOurClientsSay
