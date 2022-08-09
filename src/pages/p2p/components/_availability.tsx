import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import DesktopImage from 'images/svg/p2p/p2p-desktop.svg'
import MobileImage from 'images/svg/p2p/p2p-mobile.svg'
import { localize, Localize } from 'components/localization'
import { Header, LocalizedLinkText, SpanLinkText, Text, QueryImage } from 'components/elements'
import { Flex, SectionContainer, Desktop, Mobile } from 'components/containers'
import Login from 'common/login'
import device from 'themes/device'
import { mobileOSDetect } from 'common/os-detect'
import { p2p_playstore_url, p2p_applestore_url, p2p_huawei_appgallery_url } from 'common/constants'

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex-grow: 0;
    width: 10rem;
    margin-bottom: 32px;

    :first-child {
        flex-basis: 7%;
    }
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
        padding: 0 16px 0 16px;
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
        max-width: 328px;
        margin-bottom: 16px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        line-height: 30px;
        margin-bottom: 40px;
    }
    @media ${device.mobileL} {
        font-size: 28px;
        margin-bottom: 24px;
    }
`
const StyledCardHeader = styled(Header)`
    font-size: 24px;
    margin-top: 1.6rem;
    margin-bottom: 4rem;

    @media ${device.mobileL} {
        font-size: 18px;
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
        font-size: 18px;
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
        border: solid 1px #f7f2f200;
    }

    @media ${device.mobileL} {
        width: 40rem;
    }

    @media ${device.mobileS} {
        width: 30rem;
    }
`

const query = graphql`
    query {
        qr_code: file(relativePath: { eq: "p2p/p2p_footer_qr.png" }) {
            ...fadeIn
        }
    }
`

const Availability = () => {
    const data = useStaticQuery(query)
    const handleLogin = () => {
        Login.redirectToLogin()
    }

    const handleExternalLink = () => {
        let link = ''

        // TODO handle IOS case once the app is ready
        if (mobileOSDetect() === 'Android') {
            link = p2p_playstore_url
        }
        if (mobileOSDetect() === 'iOS') {
            link = p2p_applestore_url
        }

        window.open(link, '_blank')
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
                <Desktop>{localize('How to get Deriv P2P')}</Desktop>
                <Mobile>{localize('How to get Deriv P2P')}</Mobile>
            </StyledHeader>
            <Flex
                tablet_direction="column"
                tablet_ai="center"
                tablet={{ m: '0' }}
                jc="space-between"
            >
                <PlatformCard>
                    <Row>
                        <img src={DesktopImage} alt="" />
                    </Row>
                    <Row>
                        <StyledCardHeader mobile_margin="unset" as="h4">
                            <Localize translate_text="On your computer" />
                        </StyledCardHeader>
                    </Row>
                    <Row>
                        <Column>
                            <StyledText mb="0.8rem" as="h4">
                                {'1.'}
                            </StyledText>
                        </Column>
                        <Column>
                            <StyledText>
                                <Localize
                                    translate_text="<0>Log in</0> to your Deriv account. Don’t have one? <1>Sign up</1> for free."
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
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <StyledText mb="0.8rem" as="h4">
                                {'2.'}
                            </StyledText>
                        </Column>
                        <Column>
                            <StyledText>
                                <Localize translate_text="Go to Cashier > Deriv P2P and register." />
                            </StyledText>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <StyledText mb="0.8rem" as="h4">
                                {'3.'}
                            </StyledText>
                        </Column>
                        <Column>
                            <StyledText>
                                <Localize translate_text="Start connecting with fellow traders to make deposits and withdrawals." />
                            </StyledText>
                        </Column>
                    </Row>
                </PlatformCard>
                <Desktop>
                    <Line />
                </Desktop>
                <PlatformCard>
                    <Row>
                        <img src={MobileImage} alt="" />
                    </Row>
                    <Row>
                        <StyledCardHeader mobile_margin="unset" as="h4">
                            <Localize translate_text="On your mobile" />
                        </StyledCardHeader>
                    </Row>
                    <Row>
                        <Column>
                            <StyledText mb="0.8rem" as="h4">
                                {'1.'}
                            </StyledText>
                        </Column>
                        <Column>
                            <StyledText>
                                <Desktop>
                                    <>
                                        <Localize translate_text="Download Deriv P2P." />

                                        <QueryImage
                                            data={data['qr_code']}
                                            alt={'play store'}
                                            width="108px"
                                            height="108px"
                                        />
                                    </>
                                </Desktop>
                                <Mobile>
                                    <Localize
                                        translate_text="<0>Download Deriv P2P.</0>"
                                        components={[
                                            <SpanLinkText
                                                external
                                                onClick={handleExternalLink}
                                                target="_blank"
                                                size={24}
                                                color="red"
                                                key={0}
                                            />,
                                        ]}
                                    />
                                </Mobile>
                            </StyledText>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <StyledText mb="0.8rem" as="h4">
                                {'2.'}
                            </StyledText>
                        </Column>
                        <Column>
                            <StyledText>
                                <Localize translate_text="Register for Deriv P2P by logging into your Deriv account in the app." />
                            </StyledText>
                        </Column>
                    </Row>
                    <Row>
                        <Column>
                            <StyledText mb="0.8rem" as="h4">
                                {'3.'}
                            </StyledText>
                        </Column>
                        <Column>
                            <StyledText>
                                <Localize translate_text="Start connecting with fellow traders to make deposits and withdrawals." />
                            </StyledText>
                        </Column>
                    </Row>
                </PlatformCard>
            </Flex>
        </Section>
    )
}

export default Availability
