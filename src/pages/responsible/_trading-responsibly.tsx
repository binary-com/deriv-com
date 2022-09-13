import React from 'react'
import styled from 'styled-components'
import DontBorrow from 'images/svg/responsible/dont-borrow.svg'
import FreeDemo from 'images/svg/responsible/free-demo.svg'
import SetLimitLosses from 'images/svg/responsible/set-limit-chart.svg'
import BadJudgement from 'images/svg/responsible/bad-judgement.svg'
import Info from 'images/svg/responsible/info.svg'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text, Divider, CardStyle, LocalizedLinkText } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

const IcInfo = styled.img`
    margin-left: 1.5rem;
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
    max-width: 18.3rem;

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
    @media ${device.tabletS} {
        max-width: 98%;
    }
`
const NoticeText = styled(Text)`
    max-width: 85%;

    @media ${device.tabletS} {
        max-width: 80%;
    }
    @media ${device.mobileM} {
        max-width: 75%;
    }
`
const ContentWrapper = styled(Flex)`
    @media ${device.tabletS} {
        flex-direction: column;
    }
`
const StyledFlex = styled(Flex)`
    max-width: 77rem;
    max-height: 6.6rem;
    border-radius: 6rem;
    box-shadow: inset 0 -1px 0 0 #f2f3f4;
    background-color: var(--color-grey-25);
    margin-left: auto;
    margin-right: auto;
    margin-top: 4rem;
    padding: 12px 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media ${device.tabletS} {
        max-height: 10rem;
        padding: 12px 6px 12px 0;
    }

    @media ${device.mobileM} {
        max-height: 12rem;
        border-radius: 2rem;
        margin-bottom: 1rem;
        padding: 2rem 0.6rem 2.5rem 0;
    }

    @media ${device.mobileS} {
        border-radius: 1rem;
        max-height: 20rem;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        text-align: center;
        font-size: var(--text-size-m);
    }
`

const TradingResponsibly = () => {
    const { is_eu, is_non_eu } = useCountryRule()
    return (
        <SectionContainer>
            <Flex jc="center" wrap="true">
                <Card>
                    <StyledHeader align="center" as="h2" type="page-title">
                        {localize('Trading responsibly')}
                    </StyledHeader>
                    <ContentWrapper jc="center" ai="center" mt="2.4rem">
                        <FlexContent>
                            <img src={DontBorrow} alt="" />
                            <StyledText>
                                {localize(
                                    'Understand the risks of online trading. Never trade using borrowed money or money you can’t afford to lose.',
                                )}
                            </StyledText>
                        </FlexContent>
                        <StyledDivider />
                        <FlexContent>
                            <img src={FreeDemo} alt="" />
                            <StyledText>
                                {localize(
                                    'Use our free demo account, and trade with unlimited virtual funds. It’s the easiest way to learn how to use our products.',
                                )}
                            </StyledText>
                        </FlexContent>
                        <StyledDivider />
                        <FlexContent>
                            <img src={SetLimitLosses} alt="" />
                            <StyledText>
                                {localize(
                                    'Set a limit for your losses, and stick to it. Put aside some of your winnings to avoid losing all your money.',
                                )}
                            </StyledText>
                        </FlexContent>
                        <StyledDivider />
                        <FlexContent>
                            <img src={BadJudgement} alt="" />
                            <StyledText>
                                {is_eu && (
                                    <Localize translate_text="Trade wisely, and don’t let your emotions influence your decisions. Do not trade when you are tired or are under the influence of alcohol." />
                                )}
                                {is_non_eu && (
                                    <Localize translate_text="Trade wisely, and don’t let your emotions influence your decisions. Don’t trade when you’re prone to bad judgement." />
                                )}
                            </StyledText>
                        </FlexContent>
                    </ContentWrapper>
                    {is_eu && (
                        <StyledFlex>
                            <IcInfo src={Info} alt="info" width="24" height="24" />
                            <NoticeText size="1.4rem" ml="1.6rem" mr="1.5rem">
                                <Localize
                                    translate_text="For more details on our products and the risks involved in online trading, read our <0>key information documents (KIDs)</0> on forex, stocks, stock indices, commodities, synthetic indices, and cryptocurrencies."
                                    components={[
                                        <LocalizedLinkText
                                            key={0}
                                            to="/regulatory#kid"
                                            color="red"
                                            size={14}
                                            has_no_end_slash={true}
                                        />,
                                    ]}
                                />
                            </NoticeText>
                        </StyledFlex>
                    )}
                </Card>
            </Flex>
        </SectionContainer>
    )
}

export default TradingResponsibly
