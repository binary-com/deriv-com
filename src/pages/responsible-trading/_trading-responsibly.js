import React from 'react'
import styled from 'styled-components'
import DontBorrow from 'images/svg/dont-borrow.svg'
import FreeDemo from 'images/svg/free-demo.svg'
import SetLimitLosses from 'images/svg/set-limit-chart.svg'
import BadJudgement from 'images/svg/bad-judgement.svg'
import Info from 'images/svg/info.svg'
import { SectionContainer, Flex, Show } from 'components/containers'
import { Header, Text, Divider, LocalizedLinkText, CardStyle } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'

const IcInfo = styled(Info)`
    margin-left: 1rem;
`

const Card = styled(Flex)`
    ${CardStyle}
    width: ${(props) => (props.width ? props.width : 'auto')};
    min-width: 38.4rem;
    height: ${(props) => (props.height ? props.height : 'auto')};
    border-radius: 0.4rem;
    padding: ${(props) => (props.padding ? props.padding : '3.2rem')};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: -17rem;
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
    background-color: var(--color-grey-29);
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
const StyledFlex = styled(Flex)`
    width: 58rem;
    height: 6.6rem;
    border-radius: 6rem;
    box-shadow: inset 0 -1px 0 0 #f2f3f4;
    background-color: var(--color-grey-25);
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const TradingResponsibly = () => {
    return (
        <SectionContainer>
            <Flex jc="center" wrap>
                <Card>
                    <Header align="center" as="h3">
                        {localize('Trading responsibly')}
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
                    <Show.Eu>
                        <StyledFlex>
                            <IcInfo />
                            <Text size="1.4rem" ml="1.6rem">
                                <Localize
                                    translate_text="For more details on our products and the risks involved in online trading, read our <0>key information documents (KIDs)</0> on commodities, forex, and cryptocurrencies."
                                    components={[
                                        <LocalizedLinkText key={0} to="/contact-us/" color="red" />,
                                    ]}
                                />
                            </Text>
                        </StyledFlex>
                    </Show.Eu>
                </Card>
            </Flex>
        </SectionContainer>
    )
}

export default TradingResponsibly
