import React from 'react'
import styled from 'styled-components'
import RightAd from 'images/svg/lamp.svg'
import SettlePayment from 'images/svg/24.svg'
import CompleteOrder from 'images/svg/relaxing.svg'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import { Flex, SectionContainer } from 'components/containers'
import device from 'themes/device'

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
    justify-content: center;
`

const Section = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    padding: 8rem auto;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 1px 0 0 var(--color-grey-8);

    @media ${device.tablet} {
        padding: 40px 16px;
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
    width: 38.1rem;
    height: auto;
    margin-right: 2.4rem;
    margin-bottom: 2rem;
    justify-content: flex-start;

    :last-child {
        margin-right: 0;
    }

    @media ${device.laptopM} {
        margin-right: 0;
        width: 328px;
    }
    @media ${device.tablet} {
        margin-bottom: 40px;
        max-width: 100%;

        :last-child {
            margin-bottom: 0;
        }
    }
    @media ${device.mobileL} {
        height: auto;

        :last-child {
            padding-bottom: 0;
        }
    }
`
const StyledHeader = styled(Header)`
    padding-left: 4rem;
    padding-right: 4rem;
    color: var(--color-black-3);
    @media ${device.tablet} {
        line-height: 34px;
        margin-top: 1.5rem;
        margin-bottom: 5rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }
    @media ${device.mobileL} {
        font-size: 28px;
        line-height: 34px;
        text-align: center;
    }
`
const StyledCardHeader = styled(Header)`
    font-size: 24px;
    color: var(--color-black-3);
    @media ${device.tabletL} {
        text-align: center;
    }

    @media ${device.mobileL} {
        font-size: 18px;
        margin-bottom: 20px;
        margin-top: 50px;
        line-height: 1.2;
    }
`
const StyledText = styled(Text)`
    font-size: 2.4rem;
    color: var(--color-black-3);
    @media ${device.tabletL} {
        font-size: 18px;
        line-height: 26px;
        text-align: center;
    }
`
const img = styled(Text)`
    @media ${device.tabletL} {
        width: 50px;
    }
`

const IconTextRow = () => {
    return (
        <Section>
            <StyledHeader type="page-title" align="center" mb="8rem" as="h2">
                {localize('Enjoy weekend trading on Deriv and get the most out of your trades')}
            </StyledHeader>
            <CardContainer>
                <Card>
                    <Row>
                        <img src={RightAd} alt="" width="95px" />
                    </Row>
                    <Row>
                        <Column></Column>
                        <Column>
                            <StyledCardHeader mt="6.5rem" mb="0.8rem" as="h4">
                                {localize('Opportunity knocks')}
                            </StyledCardHeader>
                            <StyledText>
                                {localize(
                                    'Maximise your trading time on the markets that are open on weekends.',
                                )}
                            </StyledText>
                        </Column>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <img src={SettlePayment} alt="" width="95px" />
                    </Row>
                    <Row>
                        <Column></Column>
                        <Column>
                            <StyledCardHeader mt="6.5rem" mb="0.8rem" as="h4">
                                {localize('Trade anytime')}
                            </StyledCardHeader>
                            <StyledText>
                                {localize('Trade any time of the day, at your convenience.')}
                            </StyledText>
                        </Column>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <img src={CompleteOrder} alt="" width="120px" />
                    </Row>
                    <Row>
                        <Column></Column>
                        <Column>
                            <StyledCardHeader mt="6.5rem" mb="0.8rem" as="h4">
                                {localize('Fewer distractions')}
                            </StyledCardHeader>
                            <StyledText>
                                {localize(
                                    'Trade when you’re free from the distractions of weekday responsibilities.',
                                )}
                            </StyledText>
                        </Column>
                    </Row>
                </Card>
            </CardContainer>
        </Section>
    )
}

export default IconTextRow
