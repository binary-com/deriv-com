import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { SmallContainer, Grid, HowItWorksItem } from '../components/_style'
import SideTab from '../components/_tabs'
import { SectionContainer, Flex, Container } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import DefinePosition from 'images/svg/trade-types/define-your-position.svg'
import GetQuote from 'images/svg/trade-types/get-quote.svg'
import PurchaseContract from 'images/svg/trade-types/purchase-your-contract.svg'

const query = graphql`
    query {
        option_market: file(relativePath: { eq: "trade-types/options-market.png" }) {
            ...fadeIn
        }
        option_trade_type: file(relativePath: { eq: "trade-types/options-trade-type.png" }) {
            ...fadeIn
        }
        option_duration: file(relativePath: { eq: "trade-types/options-duration.png" }) {
            ...fadeIn
        }
        option_stake: file(relativePath: { eq: "trade-types/options-stake.png" }) {
            ...fadeIn
        }
        option_quote: file(relativePath: { eq: "trade-types/options-quote.png" }) {
            ...fadeIn
        }
        option_purchase: file(relativePath: { eq: "trade-types/options-purchase.png" }) {
            ...fadeIn
        }
    }
`
const OptionGrid = styled(Grid)`
    grid-gap: 2.4rem;
`
const OptionItems = styled(Flex)`
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    margin-bottom: 0.8rem;

    @media ${device.mobileL} {
        ${Text} {
            margin-top: 1.5rem;
        }
    }
`
const StyledContainer = styled(Container)`
    width: 100% !important;
`
const StyledText = styled(Text)`
    margin-top: 1.6rem;

    @media ${device.mobileL} {
        font-size: 18px;
        margin-top: 0;
    }
`

const HowOptionsWorks = () => {
    const data = useStaticQuery(query)

    return (
        <SectionContainer>
            <SmallContainer direction="column" ai="flex-start">
                <StyledContainer direction="column">
                    <Header as="h2" type="page-title" mb="3.2rem">
                        <Localize translate_text="_t_How options contracts work_t_" />
                    </Header>
                    <OptionGrid>
                        <HowItWorksItem>
                            <OptionItems>
                                <div>
                                    <img
                                        src={DefinePosition}
                                        alt={localize('_t_Target position_t_')}
                                    />
                                </div>
                                <StyledText weight="bold">
                                    <Localize translate_text="_t_Define your position_t_" />
                                </StyledText>
                            </OptionItems>
                            <Text>
                                <Localize translate_text="_t_Select the market, trade type, duration, and specify your stake amount._t_" />
                            </Text>
                        </HowItWorksItem>
                        <HowItWorksItem>
                            <OptionItems>
                                <div>
                                    <img src={GetQuote} alt={localize('_t_Receive quote_t_')} />
                                </div>
                                <StyledText weight="bold">
                                    <Localize translate_text="_t_Get quote_t_" />
                                </StyledText>
                            </OptionItems>
                            <Text>
                                <Localize translate_text="_t_Receive payout quote or stake amount based on the position you have defined._t_" />
                            </Text>
                        </HowItWorksItem>
                        <HowItWorksItem>
                            <OptionItems>
                                <div>
                                    <img
                                        src={PurchaseContract}
                                        alt={localize('_t_Buy contract_t_')}
                                    />
                                </div>
                                <StyledText weight="bold">
                                    <Localize translate_text="_t_Purchase your contract_t_" />
                                </StyledText>
                            </OptionItems>
                            <Text>
                                <Localize translate_text="_t_Purchase the contract if you are satisfied with the quote, or re-define your position._t_" />
                            </Text>
                        </HowItWorksItem>
                    </OptionGrid>
                </StyledContainer>
                <Header as="h3" type="section-title" mt="4rem">
                    <Localize translate_text="_t_How to buy your first options contract on Deriv Trader_t_" />
                </Header>
                <Header as="h4" type="sub-section-title" mb="2.4rem" mt="3.2rem">
                    <Localize translate_text="_t_Define your position_t_" />
                </Header>
                <SideTab>
                    <SideTab.Panel
                        label="_t_1. Market_t_"
                        description="_t_Choose from forex, stocks & indices, commodities, and derived._t_"
                    >
                        <QueryImage
                            data={data['option_market']}
                            alt={localize('_t_Select from different market options_t_')}
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label="_t_2. Trade type_t_"
                        description="_t_Select your desired trade type — Up and Down, High and Lows, Digits, etc._t_"
                    >
                        <QueryImage
                            data={data['option_trade_type']}
                            alt={localize('_t_Select trade type_t_')}
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label="_t_3. Duration_t_"
                        description="_t_Set the duration of your trade. Depending on whether you have a short-term or long-term view of the markets, you can set your preferred duration, starting from 1 to 10 ticks or 15 seconds to 365 days._t_"
                    >
                        <QueryImage
                            data={data['option_duration']}
                            alt={localize('_t_Select trade duration_t_')}
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label="_t_4. Stake_t_"
                        description="_t_Enter your stake amount to receive a payout quote instantly. Alternatively, you can set your preferred payout to receive a price quote for a corresponding stake amount._t_"
                    >
                        <QueryImage
                            data={data['option_stake']}
                            alt={localize('_t_Add stake amount to receive payout quote_t_')}
                        />
                    </SideTab.Panel>
                </SideTab>
                <Header as="h4" type="sub-section-title" mb="2.4rem" mt="3.2rem">
                    <Localize translate_text="_t_Get quote_t_" />
                </Header>
                <SideTab is_reverse>
                    <SideTab.Panel
                        label="_t_5. Get quote_t_"
                        description="_t_Based on the position you’ve defined, you’ll instantly receive a payout quote or a quote of the stake required to open your position._t_"
                    >
                        <QueryImage
                            data={data['option_quote']}
                            alt={localize('_t_Check stake and payout quote_t_')}
                        />
                    </SideTab.Panel>
                </SideTab>
                <Header as="h4" type="sub-section-title" mb="2.4rem" mt="3.2rem">
                    <Localize translate_text="_t_Purchase your contract_t_" />
                </Header>
                <SideTab>
                    <SideTab.Panel
                        label="_t_6. Purchase your contract_t_"
                        description="_t_Place your order immediately if you are satisfied with the quote that you’ve received.  Otherwise, continue to customise the parameters and purchase your contract when you are comfortable with the quote._t_"
                    >
                        <QueryImage
                            data={data['option_purchase']}
                            alt={localize('_t_Buy the contract_t_')}
                        />
                    </SideTab.Panel>
                </SideTab>
            </SmallContainer>
        </SectionContainer>
    )
}

export default HowOptionsWorks
