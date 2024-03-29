import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { SmallContainer, Grid, HowItWorksItem } from '../components/_style'
import SideTab from '../components/_tabs'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import DefinePosition from 'images/svg/trade-types/define-your-position.svg'
import SetOptionalParameters from 'images/svg/trade-types/set-optional-parameters.svg'
import PurchaseContract from 'images/svg/trade-types/purchase-your-contract.svg'
import useBuildVariant from 'features/hooks/use-build-variant'

const OptionGrid = styled(Grid)`
    grid-gap: 2.4rem;
`

const OptionItems = styled(Flex)`
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    margin-bottom: 0.8rem;
`

const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: 28px;
    }
`

const StyledText = styled(Text)`
    font-weight: bold;
    margin-top: 1.8rem;
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
    const { region } = useBuildVariant()

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
                                <img
                                    src={DefinePosition}
                                    alt={localize('_t_Define your target_t_')}
                                />
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
                                <img
                                    src={SetOptionalParameters}
                                    alt={localize('_t_Set parameters_t_')}
                                />
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
                                <img
                                    src={PurchaseContract}
                                    alt={localize('_t_Buy your contract_t_')}
                                />
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
                    <Localize translate_text="_t_How to buy your first multipliers contract on Deriv Trader_t_" />
                </StyledFirstMultiplierHeader>
                <Header as="h4" size="2.4rem" mb="2.4rem" mt="3.2rem">
                    <Localize translate_text="_t_Define your position_t_" />
                </Header>
                <SideTab>
                    <SideTab.Panel
                        panelID="market"
                        tabID="market-tab"
                        label="_t_1. Market_t_"
                        description="_t_Choose an asset from the list of markets offered on Deriv._t_"
                    >
                        {region === "eu" ? (
                            <StaticImage
                                src="../../../images/common/trade-types/multiplier-market-eu-new.png"
                                alt={localize('_t_Select market to trade_t_')}
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                quality={30}
                                objectFit="contain"
                                placeholder="none"
                            />
                        ) : (
                            <StaticImage
                                src="../../../images/common/trade-types/options-market.png"
                                alt={localize('_t_Select market to trade_t_')}
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                quality={30}
                                objectFit="contain"
                                placeholder="none"
                            />
                        )}
                    </SideTab.Panel>
                    <SideTab.Panel
                        panelID="trade-type"
                        tabID="trade-type-tab"
                        label="_t_2. Trade type_t_"
                        description={
                            region === "eu"
                                ? "_t_Choose 'Multipliers'_t_"
                                : '_t_Choose ‘Multipliers’ from the list of trade types._t_'
                        }
                    >
                        {region === "eu" ? (
                            <StaticImage
                                src="../../../images/common/trade-types/multiplier-trade-type-eu.png"
                                alt={localize('_t_Selecting multiplier_t_')}
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                quality={30}
                                objectFit="contain"
                                placeholder="none"
                            />
                        ) : (
                            <StaticImage
                                src="../../../images/common/trade-types/multiplier-trade-type.png"
                                alt={localize('_t_Selecting multiplier_t_')}
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                quality={30}
                                objectFit="contain"
                                placeholder="none"
                            />
                        )}
                    </SideTab.Panel>
                    <SideTab.Panel
                        panelID="stake"
                        tabID="stake-tab"
                        label="_t_3. Stake_t_"
                        description="_t_Enter the amount you wish to trade with._t_"
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/multiplier-stake.png"
                            alt={localize('_t_Enter stake amount_t_')}
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        panelID="multiplier-value"
                        tabID="multiplier-value-tab"
                        label="_t_4. Multiplier value_t_"
                        description={
                            region === "eu"
                                ? '_t_Your profit or loss is multiplied by the multiplier value, which depending on the asset you trade, can be from 1 to 30. Your loss will never be more than your stake._t_'
                                : '_t_Enter the multiplier value of your choice. Your profit or loss will be multiplied by this amount._t_'
                        }
                    >
                        {region === "eu" ? (
                            <StaticImage
                                src="../../../images/common/trade-types/multiplier-value-eu.png"
                                alt={localize('_t_Enter multiplier value_t_')}
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                quality={30}
                                objectFit="contain"
                                placeholder="none"
                            />
                        ) : (
                            <StaticImage
                                src="../../../images/common/trade-types/multiplier-value.png"
                                alt={localize('_t_Enter multiplier value_t_')}
                                loading="eager"
                                formats={['avif', 'webp', 'auto']}
                                quality={30}
                                objectFit="contain"
                                placeholder="none"
                            />
                        )}
                    </SideTab.Panel>
                </SideTab>
                <StyledDtraderHeader as="h4" size="2.4rem" mb="2.4rem" mt="3.2rem">
                    <Localize translate_text="_t_Set optional parameters for your trade_t_" />
                </StyledDtraderHeader>
                <SideTab is_reverse>
                    <SideTab.Panel
                        panelID="take-profit"
                        tabID="take-profit-tab"
                        label="_t_5. Take profit_t_"
                        description="_t_This feature allows you to set the level of profit that you are comfortable with when the market moves in your favour. Once the amount is reached, your position will be closed automatically and your earnings will be deposited into your Deriv account._t_"
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/multiplier-take-profit.png"
                            alt={localize('_t_Set profit level_t_')}
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        panelID="stop-loss"
                        tabID="stop-loss-tab"
                        label="_t_6. Stop loss_t_"
                        description="_t_This feature allows you to set the amount of loss you are willing to take in case the market moves against your position. Once the amount is reached, your contract will be closed automatically._t_"
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/multiplier-stop-loss.png"
                            alt={localize('_t_Set stop loss_t_')}
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        panelID="deal-cancellation"
                        tabID="deal-cancellation-tab"
                        label="_t_7. Deal cancellation_t_"
                        description={
                            region === "eu"
                                ? '_t_This feature allows you to cancel your contract within one hour of buying it, without losing your stake amount. We charge a small non-refundable fee for this service. Deal cancellation is only available for volatility indices._t_'
                                : '_t_This feature allows you to cancel your contract within one hour of buying it, without losing your stake amount. We charge a small non-refundable fee for this service._t_'
                        }
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/multiplier-deal-cancellation.png"
                            alt={localize('_t_Set deal cancellation time_t_')}
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                </SideTab>
                <StyledDtraderHeader as="h4" size="2.4rem" mb="2.4rem">
                    <Localize translate_text="_t_Purchase your contract_t_" />
                </StyledDtraderHeader>
                <SideTab>
                    <SideTab.Panel
                        panelID="purchase-contract"
                        tabID="purchase-contract-tab"
                        label="_t_8. Purchase your contract_t_"
                        description="_t_Once you are satisfied with the parameters that you have set, select either ‘Up’ or ‘Down’ to purchase your contract. Otherwise, continue to customise the parameters and place your order when you are satisfied with the conditions._t_"
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/multiplier-purchase.png"
                            alt={localize('_t_Purchase the contract_t_')}
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                </SideTab>
            </SmallContainer>
        </StyledSectionContainer>
    )
}

export default HowOptionsWorks
