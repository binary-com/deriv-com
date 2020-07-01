import React from 'react'
import { SmallContainer, Grid, Ul, WhyTradeItem } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'
// Icon
import MinimalRisk from 'images/svg/trade-types/minimal-risk.svg'
import FullControl from 'images/svg/trade-types/full-control.svg'
import ResponsivePlatform from 'images/svg/trade-types/responsive-platform.svg'
import FriendlySupport from 'images/svg/trade-types/friendly-support.svg'
import Seven from 'images/svg/trade-types/seven.svg'

const WhatAreOptions = () => {
    return (
        <>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" mb="1.2rem">
                        {localize('What are multipliers?')}
                    </Header>
                    <Text mb="1.2rem">
                        {localize(
                            'Multipliers allow you to profit from correctly predicting whether the market will go up or down. You select either ‘Up’ or ‘Down’ to open a position and win by closing the trade when the market price is higher or lower than your entry spot.',
                        )}
                    </Text>
                    <Text mb="4rem">
                        {localize(
                            'This unique product combines the features of digital options and CFD margin trading. When trading multipliers, your risk is limited to your stake amount, but your profit increases as long as the market continues to move in the direction that you have predicted.',
                        )}
                    </Text>
                    <Header as="h3" mb="0.8rem">
                        {localize('Multipliers available on Deriv')}
                    </Header>
                    <Text align="left" mb="0.8rem">
                        {localize('You can trade the following multiplier products on Deriv:')}
                    </Text>
                    <Ul>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="<0>Up multiplier</0> allows you to earn a profit by closing your position when the market price is higher than the entry spot."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="<0>Down multiplier</0> allows you to earn a profit by closing your position when the market price is lower than the entry spot."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                    </Ul>
                    <Text align="left" mt="0.8rem">
                        {localize(
                            'In both scenarios, your profit is calculated as the percentage change in market price times stake amount and your multiplier value.',
                        )}
                    </Text>
                </SmallContainer>
            </SectionContainer>
            <SectionContainer background="grey-23" padding="4rem 0">
                <SmallContainer direction="column" jc="flex-start" ai="flex-start">
                    <Header as="h3" mb="4rem">
                        {localize('Why trade multipliers on Deriv')}
                    </Header>
                    <Grid>
                        <WhyTradeItem>
                            <div>
                                <MinimalRisk />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Better risk management')}
                            </Text>
                            <Text>
                                {localize(
                                    'Customise your contracts to suit your style and risk appetite using innovative features like stop loss, take profit, and deal cancellation.',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <FullControl />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Increased market exposure')}
                            </Text>
                            <Text>
                                {localize(
                                    'Get more market exposure while limiting risk to your stake amount.',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <ResponsivePlatform />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Secure, responsive platform')}
                            </Text>
                            <Text>
                                {localize(
                                    'Enjoy trading on secure, intuitive platforms built for new and expert traders.',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <FriendlySupport />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Expert and friendly support')}
                            </Text>
                            <Text>
                                {localize('Get expert, friendly support when you need it.')}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <Seven />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Trade 24/7, 365 days a year')}
                            </Text>
                            <Text>
                                {localize(
                                    'Offered on forex and synthetic indices, you can trade multipliers 24/7, all-year-round.',
                                )}
                            </Text>
                        </WhyTradeItem>
                    </Grid>
                    <Text mt="4rem" mb="1.6rem" weight="bold">
                        {localize("Don't have a Deriv.com account yet?")}
                    </Text>
                    <LinkButton to="/signup/" secondary>
                        {localize('Create free demo account')}
                    </LinkButton>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default WhatAreOptions
