import React, { useEffect } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Stars from 'images/svg/playstore/stars'
import { Text, Header, QueryImage } from 'components/elements'
import { localize, Localize } from 'components/localization'
import LineTab from 'components/custom/_line-tab'
import { Container, Flex } from 'components/containers'
import device from 'themes/device'
import { addScript } from 'common/utility'
import { p2p_playstore_url, p2p_applestore_url } from 'common/constants'

const query = graphql`
    query {
        app_store: file(relativePath: { eq: "app-store-round.png" }) {
            ...fadeIn
        }
        play_store: file(relativePath: { eq: "google-play-round.png" }) {
            ...fadeIn
        }
    }
`

const StyledContainer = styled.div`
    background-color: var(--color-grey-25);
    width: 100%;
    height: fit-content;
`

const ClientContainer = styled(Container)`
    display: flex;
    align-items: center;
    min-height: 455px;
    margin: 0 auto 80px;
`

const ClientFlex = styled(Flex)`
    max-width: 1440px;
    min-height: 100px;

    @media ${device.tabletS} {
        padding: 40px 0;
        max-width: 100%;
    }
`

const ClientCard = styled(Flex)`
    &.left {
        max-width: 384px;

        @media ${device.tablet} {
            max-width: 588px;
            margin-bottom: 60px;
        }
    }
    &.right {
        max-width: 588px;

        .emphasis {
            color: #6a8a8d;
        }
    }
    .trustpilot-container {
        margin-top: 54px;
    }

    @media ${device.tabletS} {
        max-width: 100% !important;

        &.right {
            h2 {
                margin-bottom: 8px;
            }
        }
    }
`

const TrustPilotWidget = styled(Flex)`
    margin: 25px 0 0 0;
    width: 240px;
    margin-left: -10px;

    a {
        display: none;
    }
`

const AppDownloadBox = styled(Flex)`
    margin-top: 40px;
    justify-content: start;

    @media ${device.tabletS} {
        flex-direction: column;
        align-items: center;
    }
`

const AppDownloadBtns = styled(Flex)`
    @media ${device.tabletS} {
        margin-bottom: 16px;
        width: 100%;
    }
`

const AppLink = styled.a`
    margin: 0 24px 0 0;
    cursor: pointer;

    img {
        height: 48px;
    }

    @media ${device.tabletS} {
        margin: 0;
    }
`

const ReviewBox = styled(Flex)`
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    height: auto;
`

const ReviewStars = styled.img`
    height: 10px;

    @media ${device.tabletS} {
        align-self: center;
    }
`

const getRatingData = (rating) => {
    const rating_str = typeof rating == 'string' ? rating : rating.toString()
    const rating_data = rating_str.split('.').map((item_value, decimal_place) => {
        let place_value = item_value

        if (decimal_place != 0) {
            if (item_value >= 5) {
                place_value = 5
            } else {
                place_value = ''
            }
        }

        return place_value
    })

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

    const images = useStaticQuery(query)

    useEffect(() => {
        addScript({
            src: 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js',
            id: 'trust-pilot',
            async: true,
        })

        return () => {}
    }, [document])

    return (
        <StyledContainer>
            <ClientContainer padding="5rem 0 0">
                <LineTab>
                    <ClientFlex
                        jc="space-between"
                        ai="center"
                        height="fit-content"
                        width="100%"
                        tablet_direction="column"
                    >
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
                                <AppDownloadBtns tablet_jc="space-around" width="fit-content">
                                    <AppLink
                                        href={p2p_playstore_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            data={images['play_store']}
                                            alt="Get on Google Play"
                                            width="148px"
                                            height="48px"
                                        />
                                    </AppLink>
                                    <AppLink
                                        href={p2p_applestore_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <QueryImage
                                            data={images['app_store']}
                                            alt="Get on App Store"
                                            width="148px"
                                            height="48px"
                                        />
                                    </AppLink>
                                </AppDownloadBtns>
                                <ReviewBox>
                                    <Text size="1.2rem">
                                        <Localize
                                            translate_text="{{ total_reviews }} review on the Play Store"
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
