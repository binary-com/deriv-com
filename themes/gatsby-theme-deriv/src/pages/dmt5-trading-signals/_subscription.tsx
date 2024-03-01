import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Text, Header, QueryImage, LocalizedLinkText } from 'components/elements'
import { Localize } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const query = graphql`
    query {
        signals: file(relativePath: { eq: "dmt5-signals/dmt5_signals.png" }) {
            ...fadeIn
        }
        statistics: file(relativePath: { eq: "dmt5-signals/dmt5_statistics.png" }) {
            ...fadeIn
        }
        renew: file(relativePath: { eq: "dmt5-signals/dmt5_renew.png" }) {
            ...fadeIn
        }
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    margin: 0;
`
const StyledContainer = styled(Container)`
    flex-direction: column;
    padding: 8rem 0;

    @media ${device.tabletL} {
        padding: 40px 16px;
        width: 100%;
    }
`

const StyledHeader = styled(Header)`
    text-align: center;
    font-size: 4.8rem;

    @media ${device.tabletL} {
        font-size: 32px;
    }
`

const StyledText = styled(Text)`
    max-width: 97.6rem;
    text-align: center;
    margin-top: 1.2rem;

    @media ${device.tabletL} {
        font-size: 16px;
        line-height: 24px;
        margin-top: 12px;
    }
`

const CardContainer = styled(Flex)`
    margin-top: 4rem;

    @media ${device.laptopM} {
        max-width: 58rem;
        flex-wrap: wrap;
        margin-top: 0;
    }
`
const Card = styled(Flex)`
    flex-direction: column;
    width: 39.1rem;
    height: auto;
    margin-right: 2.5rem;
    justify-content: flex-start;

    :last-child {
        margin-right: 0;
    }

    @media ${device.laptopM} {
        margin-right: 0;
        margin-top: 24px;
        width: 375px;
    }
    @media ${device.tabletL} {
        width: 328px;
    }
    @media ${device.mobileL} {
        height: auto;

        :last-child {
            padding-bottom: 0;
        }
    }
`
const StyledCardText = styled(Text)`
    font-size: 1.6rem;
    text-align: start;

    @media ${device.tabletL} {
        font-size: 16px;
        line-height: 24px;
    }
`
const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex-grow: 0;
    width: 10rem;

    :first-child {
        flex-basis: 6%;
    }

    @media ${device.tabletL} {
        :first-child {
            flex-basis: 7%;
        }
    }
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 16px;
`
const NoteContainer = styled(Flex)`
    flex-direction: column;
    margin-top: 6.4rem;
`

const DMT5Button = styled(LinkButton)`
    margin-top: 4rem;
    height: 40px;
    min-width: 204px;
    width: auto;
    padding: 10px 16px;
    font-size: 14px;
    white-space: nowrap;

    @media ${device.tabletL} {
        margin-top: 24px;
    }
`

const Subscription = () => {
    const data = useStaticQuery(query)
    return (
        <StyledSectionContainer padding="0" background="white">
            <StyledContainer>
                <StyledHeader as="h2">
                    <Localize translate_text="_t_How to renew or cancel your subscription_t_" />
                </StyledHeader>
                <StyledText>
                    <Localize translate_text="_t_MT5 trading signals subscriptions expire automatically after one month. To renew or cancel a subscription, follow these steps._t_" />
                </StyledText>
                <CardContainer>
                    <Card>
                        <Row>
                            <QueryImage data={data['signals']} alt="signals" width="100%" />
                        </Row>
                        <Row>
                            <Column>
                                <StyledCardText as="h4" weight="bold">
                                    1.
                                </StyledCardText>
                            </Column>
                            <Column>
                                <StyledCardText>
                                    <Localize
                                        translate_text="_t_From your Deriv MT5 trading terminal, click on the <0>Signals</0> tab._t_"
                                        components={[<strong key={0} />]}
                                    />
                                </StyledCardText>
                            </Column>
                        </Row>
                    </Card>
                    <Card>
                        <Row>
                            <QueryImage data={data['statistics']} alt="statistics" width="100%" />
                        </Row>
                        <Row>
                            <Column>
                                <StyledCardText as="h4" weight="bold">
                                    2.
                                </StyledCardText>
                            </Column>
                            <Column>
                                <StyledCardText>
                                    <Localize
                                        translate_text="_t_Click on the <0>My Statistics</0> tab and select your signal provider._t_"
                                        components={[<strong key={0} />]}
                                    />
                                </StyledCardText>
                            </Column>
                        </Row>
                    </Card>
                    <Card>
                        <Row>
                            <QueryImage data={data['renew']} alt="renew" width="100%" />
                        </Row>
                        <Row>
                            <Column>
                                <StyledCardText as="h4" weight="bold">
                                    3.
                                </StyledCardText>
                            </Column>
                            <Column>
                                <StyledCardText>
                                    <Localize
                                        translate_text="_t_Click the <0>Renew</0> button to renew the service or the <0>Unsubscribe</0> button to cancel the subscription._t_"
                                        components={[<strong key={0} />]}
                                    />
                                </StyledCardText>
                            </Column>
                        </Row>
                    </Card>
                </CardContainer>
                <NoteContainer>
                    <StyledCardText>
                        <Localize
                            translate_text="_t_<0>Note:</0>_t_"
                            components={[<strong key={0} />]}
                        />
                    </StyledCardText>
                    <StyledCardText mt="8px">
                        <Localize
                            translate_text="_t_1. You must have an MQL5 community account to subscribe to trading signals. If you don't have an account yet, please go to <0>MQL5.com</0> to register._t_"
                            components={[
                                <LocalizedLinkText
                                    external
                                    target="_blank"
                                    to="https://www.mql5.com/en/auth_register"
                                    color="red"
                                    size={16}
                                    key={0}
                                />,
                            ]}
                        />
                    </StyledCardText>
                    <StyledCardText mt="16px">
                        <Localize
                            translate_text="_t_2. You'll need to <0>fund your MQL5 account</0> to subscribe to paid signals._t_"
                            components={[
                                <LocalizedLinkText
                                    external
                                    to="https://www.mql5.com/en/articles/302#deposit"
                                    target="_blank"
                                    color="red"
                                    size={16}
                                    key={0}
                                />,
                            ]}
                        />
                    </StyledCardText>
                    <StyledCardText mt="16px">
                        <Localize translate_text="_t_3. You can only subscribe to one signal provider with one Deriv MT5 account at any given time. You can use your signal on up to 3 computers._t_" />
                    </StyledCardText>
                    <StyledCardText mt="16px">
                        <Localize translate_text="_t_4. You won't be able to trade manually with the same Deriv MT5 account once you've subscribed to a signal._t_" />
                    </StyledCardText>
                    <StyledCardText mt="16px">
                        <Localize
                            translate_text="_t_Have more questions? Check out the <0>FAQ section</0> on the MQL5 website._t_"
                            components={[
                                <LocalizedLinkText
                                    external
                                    to="https://www.mql5.com/en/forum/10773"
                                    target="_blank"
                                    color="red"
                                    size={16}
                                    key={0}
                                />,
                            ]}
                        />
                    </StyledCardText>
                </NoteContainer>
                <DMT5Button
                    secondary
                    external
                    type="mt5"
                    to=""
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Localize translate_text="_t_Go to your Deriv MT5 dashboard_t_" />
                </DMT5Button>
            </StyledContainer>
        </StyledSectionContainer>
    )
}

export default Subscription
