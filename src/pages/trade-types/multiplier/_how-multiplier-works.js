import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { SmallContainer, Grid, HowItWorksItem } from '../components/_style'
import SideTab from '../components/_side-tab'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import DefinePosition from 'images/svg/trade-types/define-your-position.svg'
import SetOptionalParameters from 'images/svg/trade-types/set-optional-parameters.svg'
import PurchaseContract from 'images/svg/trade-types/purchase-your-contract.svg'

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

        & > div > svg {
            width: 20px;
            height: 20px;
        }
    }
`

const HowOptionsWorks = () => {
    const data = useStaticQuery(query)
    return (
        <SectionContainer p="8rem 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h2" mb="3.2rem">
                    {localize('How multipliers contracts work')}
                </Header>
                <OptionGrid>
                    <HowItWorksItem>
                        <OptionItems>
                            <div>
                                <DefinePosition />
                            </div>
                            <Text weight="bold" mt="1.6rem">
                                {localize('Define your position')}
                            </Text>
                        </OptionItems>

                        <Text>
                            {localize(
                                'Select the market you want to trade and set other essential parameters including trade type, stake amount, and multiplier value.',
                            )}
                        </Text>
                    </HowItWorksItem>
                    <HowItWorksItem>
                        <OptionItems>
                            <div>
                                <SetOptionalParameters />
                            </div>
                            <Text weight="bold" mt="1.6rem">
                                {localize('Set optional parameters')}
                            </Text>
                        </OptionItems>
                        <Text>
                            {localize(
                                'Define optional parameters that give you more control over your trading, including stop loss, take profit, and deal cancellation.',
                            )}
                        </Text>
                    </HowItWorksItem>
                    <HowItWorksItem>
                        <OptionItems>
                            <div>
                                <PurchaseContract />
                            </div>
                            <Text weight="bold" mt="1.6rem">
                                {localize('Purchase your contract')}
                            </Text>
                        </OptionItems>
                        <Text>
                            {localize(
                                'Purchase the contract if you are satisfied with the position you have defined.',
                            )}
                        </Text>
                    </HowItWorksItem>
                </OptionGrid>
                <Header as="h3" mt="4rem">
                    {localize('How to buy your first multipliers contract on DTrader')}
                </Header>
                <Header as="h4" mb="2.4rem" mt="3.2rem">
                    {localize('Define your position')}
                </Header>
                <SideTab>
                    <SideTab.Panel
                        label={<Localize translate_text="1. Market" />}
                        description={
                            <Localize translate_text="Choose an asset from the list of markets offered on Deriv." />
                        }
                    >
                        <QueryImage
                            data={data['multiplier_market']}
                            alt="Trade types option market"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="2. Trade type" />}
                        description={
                            <Localize translate_text="Choose ‘Multiplier’ from the list of trade types." />
                        }
                    >
                        <QueryImage
                            data={data['multiplier_trade_type']}
                            alt="Trade types option trade type open"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="3. Stake" />}
                        description={
                            <Localize translate_text="Enter the amount you wish to trade with." />
                        }
                    >
                        <QueryImage
                            data={data['multiplier_stake']}
                            alt="Trade types multiplier stake"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="4. Multiplier value" />}
                        description={
                            <Localize translate_text="Enter the multiplier value of your choice. Your profit or loss will be multiplied by this amount." />
                        }
                    >
                        <QueryImage
                            data={data['multiplier_value']}
                            alt="Trade types multiplier value"
                        />
                    </SideTab.Panel>
                </SideTab>
                <Header as="h4" mb="2.4rem" mt="3.2rem">
                    {localize('Set optional parameters for your trade')}
                </Header>
                <SideTab is_reverse>
                    <SideTab.Panel
                        label={<Localize translate_text="5. Take profit" />}
                        description={
                            <Localize translate_text="This feature allows you to set the level of profit that you are comfortable with when the market moves in your favour. Once the amount is reached, your position will be closed automatically and your earnings will be deposited into your Deriv account." />
                        }
                    >
                        <QueryImage
                            data={data['multiplier_take_profit']}
                            alt="Trade types multiplier take profit"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="6. Stop loss" />}
                        description={
                            <Localize translate_text="This feature allows you to set the amount of loss you are willing to take in case the market moves against your position. Once the amount is reached, your contract will be closed automatically." />
                        }
                    >
                        <QueryImage
                            data={data['multiplier_stop_loss']}
                            alt="Trade types multiplier stop loss"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="7. Deal cancellation" />}
                        description={
                            <Localize translate_text="This feature allows you to cancel your contract within one hour of buying it, without losing your stake amount. We charge a small non-refundable fee for this service." />
                        }
                    >
                        <QueryImage
                            data={data['multiplier_deal_cancellation']}
                            alt="Trade types multiplier deal cancellation"
                        />
                    </SideTab.Panel>
                </SideTab>
                <Header as="h4" mb="2.4rem" mt="3.2rem">
                    {localize('Purchase your contract')}
                </Header>
                <SideTab>
                    <SideTab.Panel
                        label={<Localize translate_text="8. Purchase your contract" />}
                        description={
                            <Localize translate_text="Once you are satisfied with the parameters that you have set, select either ‘Up’ or ‘Down’ to purchase your contract. Otherwise, continue to customise the parameters and place your order when you are satisfied with the conditions." />
                        }
                    >
                        <QueryImage
                            data={data['multiplier_purchase']}
                            alt="Trade types multiplier purchase"
                        />
                    </SideTab.Panel>
                </SideTab>
            </SmallContainer>
        </SectionContainer>
    )
}

export default HowOptionsWorks
