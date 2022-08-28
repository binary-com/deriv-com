import React from 'react'
import { SmallContainer, Grid, Ul, WhyTradeItem } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { Button } from 'components/form'
// Icon
import FixedPayout from 'images/svg/trade-types/fixed-payout.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import InstantAccess from 'images/svg/trade-types/instant-access.svg'
import UserFriendly from 'images/svg/trade-types/user-friendly-platforms.svg'
import FlexibleTrade from 'images/svg/trade-types/flexible-trade-types.svg'
import useHandleSignup from 'components/hooks/use-handle-signup'

const WhatAreOptions = () => {
    const handleSignup = useHandleSignup()

    return (
        <>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" type="page-title" mb="1.2rem">
                        {localize('_t_What are options?_t_')}
                    </Header>
                    <Text mb="4rem">
                        {localize(
                            '_t_Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset. You only need to open a position that predicts how the asset will move over a period of time. This makes it possible for people to participate in the financial markets with minimal capital investment._t_',
                        )}
                    </Text>
                    <Header as="h3" type="section-title" mb="0.8rem">
                        {localize('_t_Options available on Deriv_t_')}
                    </Header>
                    <Text align="left" mb="0.8rem">
                        {localize('_t_You can trade the following options on Deriv:_t_')}
                    </Text>
                    <Ul>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="_t_<0>Digital options</0> that allow you to predict the outcome from two possible results and earn a fixed payout if your prediction is correct._t_"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="_t_<0>Lookbacks</0> that allow you to earn a payout depending on the optimum high or low achieved by the market during the duration of a contract._t_"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="_t_<0>Call/Put Spreads</0> that allow you to earn up to the specified payout depending on the position of the exit spot relative to the two defined barriers._t_"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                    </Ul>
                </SmallContainer>
            </SectionContainer>
            <SectionContainer background="grey-23" padding="4rem 0">
                <SmallContainer direction="column" jc="flex-start" ai="flex-start">
                    <Header as="h3" type="section-title" mb="4rem">
                        {localize('_t_Why trade options on Deriv_t_')}
                    </Header>
                    <Grid>
                        <WhyTradeItem>
                            <div>
                                <img src={FixedPayout} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('_t_Fixed, predictable payout_t_')}
                            </Text>
                            <Text>
                                {localize(
                                    '_t_Know your potential profit or loss even before purchasing a contract._t_',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={SyntheticIndices} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('_t_All favourite markets and more_t_')}
                            </Text>
                            <Text>
                                {localize(
                                    '_t_Trade on all popular markets plus our proprietary synthetic indices that are available 24/7._t_',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={InstantAccess} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('_t_Instant access_t_')}
                            </Text>
                            <Text>{localize('_t_Open an account and start trading in minutes._t_')}</Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={UserFriendly} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('_t_User-friendly platforms with powerful chart widgets_t_')}
                            </Text>
                            <Text>
                                {localize(
                                    '_t_Trade on secure, intuitive, and easy to use platforms with powerful chart technology._t_',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={FlexibleTrade} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('_t_Flexible trade types with minimal capital requirements_t_')}
                            </Text>
                            <Text>
                                {localize(
                                    '_t_Deposit as little as 5 USD to start trading and customise your trades to suit your strategy._t_',
                                )}
                            </Text>
                        </WhyTradeItem>
                    </Grid>
                    <Text mt="4rem" mb="1.6rem" weight="bold">
                        {localize("_t_Don't have a Deriv.com account yet?_t_")}
                    </Text>
                    <Button onClick={handleSignup} id="dm-options-signup-1" secondary>
                        {localize('_t_Create free demo account_t_')}
                    </Button>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default WhatAreOptions
