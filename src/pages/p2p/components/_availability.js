import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Desktop from 'images/svg/p2p/p2p-desktop.svg'
import Mobile from 'images/svg/p2p/p2p-mobile.svg'
import { localize, Localize } from 'components/localization'
import { Header, LocalizedLinkText, SpanLinkText, Text, QueryImage } from 'components/elements'
import { Flex, SectionContainer, Show } from 'components/containers'
import Login from 'common/login'
import device from 'themes/device'
import { p2p_playstore_url, p2p_applestore_url, p2p_huawei_appgallery_url } from 'common/constants'

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const Section = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    padding: 0 12rem 8rem 12rem;
    max-width: 1440px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
        padding: 0 16px 40px 16px;
    }
`

const PlatformCard = styled.article`
    background-color: var(--color-white);
    width: 48.6rem;
    position: relative;

    @media ${device.laptopM} {
        min-height: 22rem;
        height: 100%;
    }
    @media ${device.tablet} {
        max-height: unset;
        padding: 0 24px;
        max-width: 328px;
    }
    @media ${device.mobileM} {
        max-width: 335px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        line-height: 30px;
        margin-bottom: 40px;
    }
    @media ${device.mobileL} {
        font-size: 24px;
        margin-bottom: 24px;
    }
`
const StyledCardHeader = styled(Header)`
    font-size: 24px;
    margin-top: 1.6rem;
    margin-bottom: 4rem;

    @media ${device.mobileL} {
        font-size: 20px;
        margin-bottom: 24px;
    }
`
const StyledText = styled(Text)`
    font-size: 24px;
    margin-bottom: 3rem;

    :last-child {
        margin-bottom: 0;
    }

    @media ${device.mobileL} {
        font-size: 16px;
    }
`
const Line = styled.div`
    width: 1px;
    height: 55rem;
    border: solid 1px var(--color-grey-21);
    margin: 0 4.5rem;

    @media ${device.laptop} {
        height: 58rem;
    }
    @media ${device.tabletL} {
        height: 63rem;
    }
    @media ${device.tablet} {
        height: 1px;
        width: 50rem;
        margin: 24px 0;
        border: solid 1px #979797;
    }

    @media ${device.mobileL} {
        width: 40rem;
    }

    @media ${device.mobileS} {
        width: 30rem;
    }
`

const Left = styled.div`
    width: 78%;
`

const Right = styled.div`
    width: 22%;
`

const query = graphql`
    query {
        qr_code: file(relativePath: { eq: "p2p/p2p_all_appstores.png" }) {
            ...fadeIn
        }
    }
`

const Availability = () => {
    const data = useStaticQuery(query)
    const handleLogin = () => {
        Login.redirectToLogin()
    }

    return (
        <Section>
            <StyledHeader
                type="page-title"
                mobile_margin="0 0 24px"
                align="center"
                as="h2"
                mb="4rem"
            >
                <Show.Desktop min_width="992">{localize('How to get Deriv P2P')}</Show.Desktop>
                <Show.Mobile>{localize('How to get Deriv P2P')}</Show.Mobile>
            </StyledHeader>
            <Flex
                tablet_direction="column"
                tablet_ai="center"
                tablet={{ m: '0' }}
                jc="space-between"
            >
                <PlatformCard>
                    <Row>
                        <img src={Desktop} alt="" />
                    </Row>
                    <Row>
                        <StyledCardHeader mobile_margin="unset" as="h4">
                            <Localize translate_text="On your computer" />
                        </StyledCardHeader>
                    </Row>
                    <div>
                        <StyledText>
                            <Localize
                                translate_text="1. <0>Log in</0> to your Deriv account. Don’t have one? <1>Sign up</1> for free."
                                components={[
                                    <SpanLinkText
                                        id="dm-p2p-login-link"
                                        size={24}
                                        onClick={handleLogin}
                                        color="red"
                                        external
                                        key={0}
                                    />,
                                    <LocalizedLinkText
                                        id="dm-p2p-signup-link"
                                        to="/signup/"
                                        size={24}
                                        color="red"
                                        key={1}
                                    />,
                                ]}
                            />
                        </StyledText>
                        <StyledText>
                            <Localize translate_text="2. Go to Cashier > Deriv P2P and register." />
                        </StyledText>
                        <StyledText>
                            <Localize translate_text="3. Start connecting with fellow traders to make deposits and withdrawals." />
                        </StyledText>
                    </div>
                </PlatformCard>
                <Line />
                <PlatformCard>
                    <Row>
                        <img src={Mobile} alt="" />
                    </Row>
                    <Row>
                        <StyledCardHeader mobile_margin="unset" as="h4">
                            <Localize translate_text="On your mobile" />
                        </StyledCardHeader>
                    </Row>
                    <div>
                        <StyledText>
                            <Show.Desktop min_width="992">
                                <Flex>
                                    <Left>
                                        <Localize
                                            translate_text="1. Download Deriv P2P from the <0>Google Play Store</0>, <1>Apple App Store</1>, or the <2>Huawei AppGallery</2>."
                                            components={[
                                                <LocalizedLinkText
                                                    external
                                                    to={p2p_playstore_url}
                                                    target="_blank"
                                                    size={24}
                                                    color="red"
                                                    key={0}
                                                />,
                                                <LocalizedLinkText
                                                    external
                                                    to={p2p_applestore_url}
                                                    target="_blank"
                                                    size={24}
                                                    color="red"
                                                    key={1}
                                                />,
                                                <LocalizedLinkText
                                                    external
                                                    to={p2p_huawei_appgallery_url}
                                                    target="_blank"
                                                    size={24}
                                                    color="red"
                                                    key={2}
                                                />,
                                            ]}
                                        />
                                    </Left>
                                    <Right>
                                        <QueryImage
                                            data={data['qr_code']}
                                            alt={'play store'}
                                            width="108px"
                                            height="108px"
                                        />
                                    </Right>
                                </Flex>
                            </Show.Desktop>
                            <Show.Mobile>
                                <Localize
                                    translate_text="1. Download Deriv P2P from the <0>Google Play Store</0>, <1>Apple App Store</1>, or the <2>Huawei AppGallery</2>."
                                    components={[
                                        <LocalizedLinkText
                                            external
                                            to={p2p_playstore_url}
                                            target="_blank"
                                            size={24}
                                            color="red"
                                            key={0}
                                        />,
                                        <LocalizedLinkText
                                            external
                                            to={p2p_applestore_url}
                                            target="_blank"
                                            size={24}
                                            color="red"
                                            key={1}
                                        />,
                                        <LocalizedLinkText
                                            external
                                            to={p2p_huawei_appgallery_url}
                                            target="_blank"
                                            size={24}
                                            color="red"
                                            key={2}
                                        />,
                                    ]}
                                />
                            </Show.Mobile>
                        </StyledText>
                        <StyledText>
                            <Localize translate_text="2. Register for Deriv P2P by logging into your Deriv account in the app." />
                        </StyledText>
                        <StyledText>
                            <Localize translate_text="3. Start connecting with fellow traders to make deposits and withdrawals." />
                        </StyledText>
                    </div>
                </PlatformCard>
            </Flex>
        </Section>
    )
}

export default Availability
