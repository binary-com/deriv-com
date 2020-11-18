import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Text, Header, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'

const query = graphql`
    query {
        signals: file(relativePath: { eq: "dmt5_signals.png" }) {
            ...fadeIn
        }
        statistics: file(relativePath: { eq: "dmt5_statistics.png" }) {
            ...fadeIn
        }
        renew: file(relativePath: { eq: "dmt5_renew.png" }) {
            ...fadeIn
        }
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    margin: 0;
    padding: 0;
    background-color: var(--color-white);
    box-shadow: inset 0 1px 0 0 var(--color-grey-2);
`
const StyledContainer = styled(Container)`
    flex-direction: column;
    justify-content: center;
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
        font-size: 24px;
    }
`

const StyledText = styled(Text)`
    font-size: 2.4rem;
    line-height: 3.6rem;
    max-width: 97.6rem;
    text-align: center;
    margin-top: 1.2rem;

    @media ${device.tabletL} {
        font-size: 16px;
        line-height: 24px;
        margin-top: 16px;
        text-align: left;
    }
`

const CardContainer = styled(Flex)`
    @media ${device.laptopM} {
        max-width: 58rem;
        flex-wrap: wrap;
    }
`
const Card = styled(Flex)`
    flex-direction: column;
    width: 39.1rem;
    height: auto;
    margin: 6.3rem 2.5rem 3.2rem 0;
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
    font-size: 24px;
    text-align: left;
    margin-top: 16px;

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
        flex-basis: 10%;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

// const DMT5Button = styled(LinkButton)`
//     margin-top: 4rem;
//     height: 40px;
//     padding: 10px 16px;
//     font-size: 14px;
//     white-space: nowrap;

//     @media ${device.tabletL} {
//         margin-top: 32px;
//     }
// `

const Subscription = () => {
    const data = useStaticQuery(query)
    return (
        <StyledSectionContainer>
            <StyledContainer>
                <StyledHeader as="h2">
                    {localize('How to renew or cancel your subscription')}
                </StyledHeader>
                <StyledText>
                    {localize(
                        'MT5 trading signals subscriptions expire automatically after one month. To renew or cancel a subscription, follow these steps.',
                    )}
                </StyledText>
                <CardContainer>
                    <Card>
                        <Row>
                            <QueryImage data={data['signals']} alt="signals" width="100%" />
                        </Row>
                        <Row>
                            <Column>
                                <StyledCardText as="h4" weight="bold">
                                    {'1.'}
                                </StyledCardText>
                            </Column>
                            <Column>
                                <StyledCardText>
                                    {localize(
                                        'From your Deriv MT5 trading terminal, click on the Signals tab.',
                                    )}
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
                                    {'2.'}
                                </StyledCardText>
                            </Column>
                            <Column>
                                <StyledCardText>
                                    {localize(
                                        'Click on the My Statistics tab and select your signal provider. ',
                                    )}
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
                                    {'3.'}
                                </StyledCardText>
                            </Column>
                            <Column>
                                <StyledCardText>
                                    {localize(
                                        'Click the Renew button to renew the service or the Unsubscribe button to cancel the subscription.',
                                    )}
                                </StyledCardText>
                            </Column>
                        </Row>
                    </Card>
                </CardContainer>
            </StyledContainer>
        </StyledSectionContainer>
    )
}

export default Subscription
