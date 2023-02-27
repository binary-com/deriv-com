import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { SmallContainer, Grid, HowItWorksItem } from '../components/_style'
import SideTab from '../components/_tabs'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import DefinePosition from 'images/svg/trade-types/define-your-position.svg'
import SetOptionalParameters from 'images/svg/trade-types/set-optional-parameters.svg'
import PurchaseContract from 'images/svg/trade-types/purchase-your-contract.svg'
import useRegion from 'components/hooks/use-region'

const query = graphql`
    query {
        multiplier_market: file(relativePath: { eq: "trade-types/multiplier-market.png" }) {
            ...fadeIn
        }
        multiplier_trade_type: file(relativePath: { eq: "trade-types/multiplier-trade-type.png" }) {
            ...fadeIn
        }
        multiplier_stake: file(relativePath: { eq: "trade-types/multiplier-stake.png" }) {
            ...fadeIn
        }
        multiplier_value: file(relativePath: { eq: "trade-types/multiplier-value.png" }) {
            ...fadeIn
        }
        multiplier_take_profit: file(
            relativePath: { eq: "trade-types/multiplier-take-profit.png" }
        ) {
            ...fadeIn
        }
        multiplier_stop_loss: file(relativePath: { eq: "trade-types/multiplier-stop-loss.png" }) {
            ...fadeIn
        }
        multiplier_deal_cancellation: file(
            relativePath: { eq: "trade-types/multiplier-deal-cancellation.png" }
        ) {
            ...fadeIn
        }
        multiplier_purchase: file(relativePath: { eq: "trade-types/multiplier-purchase.png" }) {
            ...fadeIn
        }
        multiplier_market_eu: file(relativePath: { eq: "trade-types/multiplier-market-eu.png" }) {
            ...fadeIn
        }
        multiplier_trade_type_eu: file(
            relativePath: { eq: "trade-types/multiplier-trade-type-eu.png" }
        ) {
            ...fadeIn
        }
        multiplier_value_eu: file(relativePath: { eq: "trade-types/multiplier-value-eu.png" }) {
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
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;

        & > div > img {
            width: 20px;
            height: 20px;
        }
        ${Text} {
            margin-top: 0;
        }
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: 28px;
    }
`

const StyledText = styled(Text)`
    font-weight: bold;
    margin-top: 1.6rem;

    @media ${device.mobileL} {
        margin-top: 0;
    }
`

const StyledDtraderHeader = styled(Header)`
    margin-top: 3.2rem;

    @media ${device.tablet} {
        margin-top: 2rem;
    }
`

const StyledFirstMultiplierHeader = styled(Header)`
    @media ${device.tablet} {
        margin-top: 8rem;
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    @media ${device.tablet} {
        padding-top: 4rem;
    }
`

const HowOptionsWorks = () => {
    const data = useStaticQuery(query)
    const { is_eu } = useRegion()
    return (
        <StyledSectionContainer padding="8rem 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <StyledHeader as="h2" size="4.8rem" mb="3.2rem">
                    <Localize translate_text="_t_How multipliers contracts work_t_" />
                </StyledHeader>
                <OptionGrid>
                    <HowItWorksItem>
                        <OptionItems>
                            <div>
                                <img src={DefinePosition} alt="Define your target" />
                            </div>
                            <StyledText>
                                <Localize translate_text="_t_Define your position_t_" />
                            </StyledText>
                        </OptionItems>

                        <Text>
                            <Localize translate_text="_t_Select the market you want to trade and set other essential parameters including trade type, stake amount, and multiplier value._t_" />
                        </Text>
                    </HowItWorksItem>
                    <HowItWorksItem>
                        <OptionItems>
                            <div>
                                <img src={SetOptionalParameters} alt="Set parameters" />
                            </div>
                            <StyledText>
                                <Localize translate_text="_t_Set optional parameters_t_" />
                            </StyledText>
                        </OptionItems>
                        <Text>
                            <Localize translate_text="_t_Define optional parameters that give you more control over your trading, including stop loss, take profit, and deal cancellation._t_" />
                        </Text>
                    </HowItWorksItem>
                    <HowItWorksItem>
                        <OptionItems>
                            <div>
                                <img src={PurchaseContract} alt="Buy your contract" />
                            </div>
                            <StyledText>
                                <Localize translate_text="_t_Purchase your contract_t_" />
                            </StyledText>
                        </OptionItems>
                        <Text>
                            <Localize translate_text="_t_Purchase the contract if you are satisfied with the position you have defined._t_" />
                        </Text>
                    </HowItWorksItem>
                </OptionGrid>
                <StyledFirstMultiplierHeader as="h3" size="3.2rem" mt="4rem">
                    <Localize translate_text="_t_How to buy your first multipliers contract on DTrader_t_" />
                </StyledFirstMultiplierHeader>
                <Header as="h4" size="2.4rem" mb="2.4rem" mt="3.2rem">
                    <Localize translate_text="_t_Define your position_t_" />
                </Header>
                <SideTab>
                    <SideTab.Panel
                        label={{ text: '_t_1. Market_t_' }}
                        description={{
                            text: '_t_Choose an asset from the list of markets offered on Deriv._t_',
                        }}
                    >
                        {is_eu ? (
                            <QueryImage
                                data={data['multiplier_market_eu']}
                                alt="Select market to trade"
                            />
                        ) : (
                            <QueryImage
                                data={data['multiplier_market']}
                                alt="Select market to trade"
                            />
                        )}
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={{ text: '_t_2. Trade type_t_' }}
                        description={{
                            text: '_t_Choose ‘Multipliers’ from the list of trade types._t_',
                        }}
                    >
                        {is_eu ? (
                            <QueryImage
                                data={data['multiplier_trade_type_eu']}
                                alt="Selecting multiplier"
                            />
                        ) : (
                            <QueryImage
                                data={data['multiplier_trade_type']}
                                alt="Selecting multiplier"
                            />
                        )}
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={{ text: '_t_3. Stake_t_' }}
                        description={{ text: '_t_Enter the amount you wish to trade with._t_' }}
                    >
                        <QueryImage data={data['multiplier_stake']} alt="Enter stake amount" />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={{ text: '_t_4. Multiplier value_t_' }}
                        description={
                            is_eu
                                ? {
                                      text: '_t_Your profit or loss is multiplied by the multiplier value, which depending on the asset you trade, can be from 1 to 5. Your loss will never be more than your stake._t_',
                                  }
                                : {
                                      text: '_t_Enter the multiplier value of your choice. Your profit or loss will be multiplied by this amount._t_',
                                  }
                        }
                    >
                        {is_eu ? (
                            <QueryImage
                                data={data['multiplier_value_eu']}
                                alt="Enter multiplier value"
                            />
                        ) : (
                            <QueryImage
                                data={data['multiplier_value']}
                                alt="Enter multiplier value"
                            />
                        )}
                    </SideTab.Panel>
                </SideTab>
                <StyledDtraderHeader as="h4" size="2.4rem" mb="2.4rem" mt="3.2rem">
                    <Localize translate_text="_t_Set optional parameters for your trade_t_" />
                </StyledDtraderHeader>
                <SideTab is_reverse>
                    <SideTab.Panel
                        label={{ text: '_t_5. Take profit_t_' }}
                        description={{
                            text: '_t_This feature allows you to set the level of profit that you are comfortable with when the market moves in your favour. Once the amount is reached, your position will be closed automatically and your earnings will be deposited into your Deriv account._t_',
                        }}
                    >
                        <QueryImage data={data['multiplier_take_profit']} alt="Set profit level" />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={{ text: '_t_6. Stop loss_t_' }}
                        description={{
                            text: '_t_This feature allows you to set the amount of loss you are willing to take in case the market moves against your position. Once the amount is reached, your contract will be closed automatically._t_',
                        }}
                    >
                        <QueryImage data={data['multiplier_stop_loss']} alt="Set stop loss" />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={{ text: '_t_7. Deal cancellation_t_' }}
                        description={{
                            text: '_t_This feature allows you to cancel your contract within one hour of buying it, without losing your stake amount. We charge a small non-refundable fee for this service._t_',
                        }}
                    >
                        <QueryImage
                            data={data['multiplier_deal_cancellation']}
                            alt="Set deal cancellation time"
                        />
                    </SideTab.Panel>
                </SideTab>
                <StyledDtraderHeader as="h4" size="2.4rem" mb="2.4rem">
                    <Localize translate_text="_t_Purchase your contract_t_" />
                </StyledDtraderHeader>
                <SideTab>
                    <SideTab.Panel
                        label={{ text: '_t_8. Purchase your contract_t_' }}
                        description={{
                            text: '_t_Once you are satisfied with the parameters that you have set, select either ‘Up’ or ‘Down’ to purchase your contract. Otherwise, continue to customise the parameters and place your order when you are satisfied with the conditions._t_',
                        }}
                    >
                        <QueryImage
                            data={data['multiplier_purchase']}
                            alt="Purchase the contract"
                        />
                    </SideTab.Panel>
                </SideTab>
            </SmallContainer>
        </StyledSectionContainer>
    )
}

export default HowOptionsWorks
