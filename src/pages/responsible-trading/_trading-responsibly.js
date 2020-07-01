import React from 'react'
import styled from 'styled-components'
import DontBorrow from 'images/svg/dont-borrow.svg'
import FreeDemo from 'images/svg/free-demo.svg'
import SetLimitLosses from 'images/svg/set-limit-chart.svg'
import BadJudgement from 'images/svg/bad-judgement.svg'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text, Divider } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'

const Card = styled.section`
    width: ${(props) => (props.width ? props.width : 'auto')};
    min-width: 38.4rem;
    height: ${(props) => (props.height ? props.height : 'auto')};
    background-color: var(--color-white);
    border-radius: 0.4rem;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    padding: ${(props) => (props.padding ? props.padding : '3.2rem')};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: -17rem;
`
const CardWrapper = styled(Flex)`
    justify-content: center;
    flex-wrap: wrap;
`
const FlexContent = styled(Flex)`
    justify-content: start;
    align-items: center;
    flex-direction: column;
    max-width: 16.8rem;

    @media ${device.tabletS} {
        max-width: 38rem;
        margin-top: 3rem;
    }
`

const StyledDivider = styled(Divider)`
    width: 2px;
    height: 100px;
    margin-left: 3rem;
    margin-right: 3rem;

    @media ${device.tabletS} {
        display: none;
    }
`
const StyledText = styled(Text)`
    padding-top: 1rem;
`
const ContentWrapper = styled(Flex)`
    @media ${device.tabletS} {
        flex-direction: column;
    }
`

const TradingResponsibly = () => {
    return (
        <SectionContainer>
            <CardWrapper>
                <Card>
                    <Header align="center" as="h3">
                        {localize('Trading Responsibly')}
                    </Header>
                    <ContentWrapper jc="center" ai="center" mt="2.4rem">
                        <FlexContent>
                            <DontBorrow />
                            <StyledText>
                                {localize(
                                    'Understand the risks of online trading. Never trade using borrowed money or money you can’t afford to lose.',
                                )}
                            </StyledText>
                        </FlexContent>
                        <StyledDivider />
                        <FlexContent>
                            <FreeDemo />
                            <StyledText>
                                {localize(
                                    'Use our free demo account and trade with unlimited virtual funds. It’s the easiest way to learn how to use our products.',
                                )}
                            </StyledText>
                        </FlexContent>
                        <StyledDivider />
                        <FlexContent>
                            <SetLimitLosses />
                            <StyledText>
                                {localize(
                                    'Set a limit for your losses and stick to it. Put aside some of your winnings to avoid losing all your money.',
                                )}
                            </StyledText>
                        </FlexContent>
                        <StyledDivider />
                        <FlexContent>
                            <BadJudgement />
                            <StyledText>
                                {localize(
                                    'Trade wisely and don’t let your emotions influence your decisions. Don’t trade when you’re prone to bad judgement.',
                                )}
                            </StyledText>
                        </FlexContent>
                    </ContentWrapper>
                </Card>
            </CardWrapper>
        </SectionContainer>
    )
}

export default TradingResponsibly
