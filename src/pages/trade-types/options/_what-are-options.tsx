import React from 'react'
import { SmallContainer, Grid, Ul, WhyTradeItem } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { Button } from 'components/form'
// Icon
import FixedPayout from 'images/svg/trade-types/fixed-payout.svg'
import FavoriteMarket from 'images/svg/trade-types/favoritemarket.svg'
import InstantAccess from 'images/svg/trade-types/instant-access.svg'
import FriendlySupport from 'images/svg/trade-types/friendly-support.svg'
import FlexibleTrade from 'images/svg/trade-types/flexible-trade-types.svg'
import useHandleSignup from 'components/hooks/use-handle-signup'

const WhatAreOptions = () => {
    const handleSignup = useHandleSignup()

    return (
        <>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" type="page-title" mb="1.2rem">
                        {localize('What are options?')}
                    </Header>
                    <Text mb="4rem">
                        {localize(
                            'Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset. You only need to open a position that predicts how the asset will move over a period of time. This makes it possible for people to participate in the financial markets with minimal capital investment.',
                        )}
                    </Text>
                    <Header as="h3" type="section-title" mb="0.8rem">
                        {localize('Options available on Deriv')}
                    </Header>
                    <Text align="left" mb="0.8rem">
                        {localize('You can trade the following options on Deriv:')}
                    </Text>
                    <Ul>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="<0>Digital options</0> that allow you to predict the outcome from two possible results and earn a fixed payout if your prediction is correct."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="<0>Lookbacks</0> that allow you to earn a payout depending on the optimum high or low achieved by the market during the duration of a contract."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="<0>Call/Put Spreads</0> that allow you to earn up to the specified payout depending on the position of the exit spot relative to the two defined barriers."
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
                        {localize('Why trade options on Deriv')}
                    </Header>
                    <Grid>
                        <WhyTradeItem>
                            <div>
                                <img src={FixedPayout} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Fixed, predictable payout')}
                            </Text>
                            <Text>
                                {localize(
                                    'Know your potential profit or loss even before purchasing a contract.',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={FavoriteMarket} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('All favourite markets and more')}
                            </Text>
                            <Text>
                                {localize(
                                    'Trade on all popular markets plus our proprietary synthetic indices that are available 24/7.',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={InstantAccess} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Instant access')}
                            </Text>
                            <Text>{localize('Open an account and start trading in minutes.')}</Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={FriendlySupport} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('User-friendly platforms with powerful chart widgets')}
                            </Text>
                            <Text>
                                {localize(
                                    'Trade on secure, intuitive, and easy to use platforms with powerful chart technology.',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={FlexibleTrade} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Flexible trade types with minimal capital requirements')}
                            </Text>
                            <Text>
                                {localize(
                                    'Deposit as little as 5 USD to start trading and customise your trades to suit your strategy.',
                                )}
                            </Text>
                        </WhyTradeItem>
                    </Grid>
                    <Text mt="4rem" mb="1.6rem" weight="bold">
                        {localize("Don't have a Deriv.com account yet?")}
                    </Text>
                    <Button onClick={handleSignup} id="dm-options-signup-1" secondary>
                        {localize('Create free demo account')}
                    </Button>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default WhatAreOptions
