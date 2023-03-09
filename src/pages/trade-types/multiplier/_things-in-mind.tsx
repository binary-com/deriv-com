import React from 'react'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'

const ThingsInMind = () => {
    return (
        <SectionContainer padding="4rem 0 4rem">
            <SmallContainer fd="column" jc="flex-start">
                <Header as="h3" type="section-title" mb="3.2rem">
                    <Localize translate_text="_t_Things to keep in mind when trading multipliers_t_" />
                </Header>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_Stop out_t_" />
                </Header>
                <Text mb="3.2rem">
                    <Localize translate_text="_t_With or without a stop loss in place, we will close your position if the market moves against your prediction and your loss reaches the stop out price. The stop out price is the price at which your net loss is equal to your stake._t_" />
                </Text>
                <Header as="h4" mb="0.8rem" type="sub-section-title">
                    <Localize translate_text="_t_Multipliers on Crash and Boom_t_" />
                </Header>
                <Text mb="3.2rem">
                    <Localize translate_text="_t_Deal cancellation isn’t available for Crash and Boom indices. The stop out feature will close your contract automatically when your loss reaches or exceeds a percentage of your stake. The stop out percentage is shown below your stake on DTrader and varies according to your chosen multiplier._t_" />
                </Text>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_You can’t use stop loss and deal cancellation features at the same time._t_" />
                </Header>
                <Text mb="3.2rem">
                    <Localize translate_text="_t_This is to protect you from losing your money when using deal cancellation. With deal cancellation, you are allowed to reclaim your full stake amount if you cancel your contract within an hour of opening the position. Stop loss, on the other hand, will close your contract at a loss if the market moves against your position. However, once the deal cancellation expires, you can set a stop loss level on the open contract._t_" />
                </Text>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_You can’t use take profit and deal cancellation features at the same time._t_" />
                </Header>
                <Text mb="3.2rem">
                    <Localize translate_text="_t_You can’t set a take profit level when you purchase a multipliers contract with deal cancellation. However, once the deal cancellation expires, you can set a take profit level on the open contract._t_" />
                </Text>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    <Localize translate_text="_t_Cancel and close features are not allowed simultaneously._t_" />
                </Header>
                <Text>
                    <Localize translate_text="_t_If you purchase a contract with deal cancellation, the ‘Cancel’ button allows you to terminate your contract and get back your full stake. On the other hand, using the ‘Close’ button lets you terminate your position at the current price, which can lead to a loss if you close a losing trade._t_" />
                </Text>
            </SmallContainer>
        </SectionContainer>
    )
}

export default ThingsInMind
