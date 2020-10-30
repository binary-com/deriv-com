import React from 'react'
import styled from 'styled-components'
import Desktop from 'images/svg/p2p-desktop.svg'
import Mobile from 'images/svg/p2p-mobile.svg'
import { localize, Localize } from 'components/localization'
import { Header, LocalizedLinkText, Text } from 'components/elements'
import { Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const Section = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    padding: 8rem 12rem;
    max-width: 1600px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 1px 0 0 #f2f3f4;

    @media ${device.tablet} {
        padding: 40px 16px;
    }
`

const ClientCard = styled.article`
    background-color: var(--color-white);
    width: 48.6rem;
    position: relative;

    @media ${device.laptopM} {
        min-height: 22rem;
        height: 100%;
    }
    @media ${device.tablet} {
        margin: 0 0 24px 0;
        max-height: unset;
        padding: 24px 24px 24px;
        max-width: 328px;

        :first-child {
            margin: 0 0 24px 0;
        }
    }
    @media ${device.mobileS} {
        max-width: 310px;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: 32px;
        margin-bottom: 24px;
    }
`
// const StyledCardHeader = styled(Header)`
//     @media ${device.mobileL} {
//         font-size: 20px;
//         margin-bottom: 8px;
//         margin-top: 8px;
//         line-height: 1.2;
//     }
// `
const StyledText = styled(Text)`
    font-size: 24px;
    margin-bottom: 3rem;

    @media ${device.mobileL} {
        font-size: 16px;
    }
`

const Line = styled.div`
    width: 1px;
    height: 38rem;
    border: solid 1px var(--color-grey-21);
    margin: 0 4.5rem;

    @media ${device.tablet} {
        height: 1px;
        width: 50rem;
        margin: 4.5rem 0;
    }

    @media ${device.mobileL} {
        width: 40rem;
    }

    @media ${device.mobileS} {
        width: 30rem;
    }
`

const Availability = () => {
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
                mb="4rem"
                tablet_direction="column"
                tablet_ai="center"
                tablet={{ m: '0' }}
                jc="space-between"
            >
                <ClientCard>
                    <Row>
                        <Desktop />
                    </Row>
                    <Row>
                        <StyledHeader
                            mobile_margin="unset"
                            mobile_font_size="20px"
                            mt="1.2rem"
                            mb="4rem"
                            as="h4"
                        >
                            <Localize translate_text="DP2P on your computer" />
                        </StyledHeader>
                    </Row>
                    <div>
                        <StyledText>
                            <Localize
                                translate_text="1. <0>Log in</0> to your Deriv account. Don’t have one? <1>Sign up</1> for free."
                                components={[
                                    <LocalizedLinkText size={24} to="/" color="red" key={0} />,
                                    <LocalizedLinkText size={24} to="/" color="red" key={1} />,
                                ]}
                            />
                        </StyledText>
                        <StyledText>
                            <Localize translate_text="2. Go to Cashier > DP2P and register." />
                        </StyledText>
                        <StyledText>
                            <Localize translate_text="3. Start exchanging." />
                        </StyledText>
                    </div>
                </ClientCard>
                <Line />
                <ClientCard>
                    <Row>
                        <Mobile />
                    </Row>
                    <Row>
                        <StyledHeader
                            mobile_margin="unset"
                            mobile_font_size="20px"
                            mt="1.2rem"
                            mb="4rem"
                            as="h4"
                        >
                            <Localize translate_text="DP2P on your mobile" />
                        </StyledHeader>
                    </Row>
                    <div>
                        <StyledText>
                            <Localize
                                translate_text="1. Get the app from the <0>Google Play Store</0>."
                                components={[
                                    <LocalizedLinkText size={24} to="/" color="red" key={0} />,
                                ]}
                            />
                        </StyledText>
                        <StyledText>
                            <Localize translate_text="2. Log in to your Deriv account, and register for DP2P." />
                        </StyledText>
                        <StyledText>
                            <Localize translate_text="3. Start exchanging." />
                        </StyledText>
                    </div>
                </ClientCard>
            </Flex>
        </Section>
    )
}

export default Availability
