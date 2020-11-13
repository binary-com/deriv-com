import React from 'react'
import styled from 'styled-components'
import Desktop from 'images/svg/p2p-desktop.svg'
import Mobile from 'images/svg/p2p-mobile.svg'
import { localize, Localize } from 'components/localization'
import { Header, LocalizedLinkText, SpanLinkText } from 'components/elements'
import { Flex, SectionContainer } from 'components/containers'
import Login from 'common/login'
import device from 'themes/device'

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
        max-width: 310px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
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

const ListNoBullets = styled.ul`
    list-style: none;

    li {
        font-size: 24px;
        line-height: 1.5;
        margin-bottom: 3rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
    @media ${device.mobileL} {
        li {
            font-size: 16px;
        }
    }
`

const Line = styled.div`
    width: 1px;
    height: 38rem;
    border: solid 1px var(--color-grey-21);
    margin: 0 4.5rem;

    @media ${device.laptop} {
        height: 47rem;
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

const Availability = () => {
    const handleLogin = () => {
        Login.redirectToLogin()
    }

    return (
        <Section>
            <StyledHeader
                mobile_font_size="32px"
                mobile_margin="0 0 24px"
                align="center"
                as="h2"
                mb="4rem"
            >
                {localize('Available on desktop and mobile')}
            </StyledHeader>
            <Flex
                tablet_direction="column"
                tablet_ai="center"
                tablet={{ m: '0' }}
                jc="space-between"
            >
                <PlatformCard>
                    <Row>
                        <Desktop />
                    </Row>
                    <Row>
                        <StyledCardHeader mobile_margin="unset" as="h4">
                            <Localize translate_text="DP2P on your computer" />
                        </StyledCardHeader>
                    </Row>
                    <ListNoBullets>
                        <li>
                            <Localize
                                translate_text="1. <0>Log in</0> to your Deriv account. Don’t have one? <1>Sign up</1> for free."
                                components={[
                                    <SpanLinkText
                                        size={24}
                                        onClick={handleLogin}
                                        color="red"
                                        external
                                        key={0}
                                    />,
                                    <LocalizedLinkText
                                        size={24}
                                        to="/signup"
                                        color="red"
                                        key={1}
                                    />,
                                ]}
                            />
                        </li>
                        <li>
                            <Localize translate_text="2. Go to Cashier > DP2P and register." />
                        </li>
                        <li>
                            <Localize translate_text="3. Start exchanging." />
                        </li>
                    </ListNoBullets>
                </PlatformCard>
                <Line />
                <PlatformCard>
                    <Row>
                        <Mobile />
                    </Row>
                    <Row>
                        <StyledCardHeader mobile_margin="unset" as="h4">
                            <Localize translate_text="DP2P on your mobile" />
                        </StyledCardHeader>
                    </Row>
                    <ListNoBullets>
                        <li>
                            <Localize
                                translate_text="1. Get the app from the <0>Google Play Store</0>."
                                components={[
                                    <LocalizedLinkText
                                        external="true"
                                        to="https://play.google.com/store/apps/details?id=com.deriv.dp2p"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="red"
                                        size={24}
                                        key={0}
                                    />,
                                ]}
                            />
                        </li>
                        <li>
                            <Localize translate_text="2. Log in to your Deriv account, and register for DP2P." />
                        </li>
                        <li>
                            <Localize translate_text="3. Start exchanging." />
                        </li>
                    </ListNoBullets>
                </PlatformCard>
            </Flex>
        </Section>
    )
}

export default Availability
