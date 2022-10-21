import React from 'react'
import { SmallContainer, Grid, WhyTradeItem } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import FriendlySupport from 'images/svg/trade-types/friendly-support.svg'
import HighLeverge from 'images/svg/trade-types/high-leverage.svg'
import MaximizePotentialProfit from 'images/svg/trade-types/maximize-potential-profit.svg'
import InstantAccess from 'images/svg/trade-types/instant-access.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import { Button } from 'components/form'
import { DerivStore, DerivStoreType } from 'store'
import useHandleSignup from 'components/hooks/use-handle-signup'

const WhyTradeMargin = () => {
    const { is_eu_country } = React.useContext<DerivStoreType>(DerivStore)
    const handleSignup = useHandleSignup()

    return (
        <>
            <SectionContainer background="rgba(242, 243, 244, 0.3)" padding="4rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" type="section-title" mb="4rem">
                        {localize('Why trade on margin with Deriv')}
                    </Header>
                    <Grid>
                        <WhyTradeItem>
                            <img src={HighLeverge} alt="" />
                            <Text weight="bold" mb="0.8rem" mt="1.6rem">
                                {localize('High leverage, low spreads')}
                            </Text>
                            <Text mb="4rem">
                                {is_eu_country
                                    ? localize(
                                          'Take advantage of high leverage and low spreads on Deriv MT5 (DMT5).',
                                      )
                                    : localize(
                                          'Take advantage of high leverage and low spreads on Deriv MT5 (DMT5) and Deriv X.',
                                      )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <img src={SyntheticIndices} alt="" />
                            <Text weight="bold" mb="0.8rem" mt="1.6rem">
                                {localize('All favourite markets available')}
                            </Text>
                            <Text mb="4rem">
                                {localize(
                                    'Trade on all popular markets plus our proprietary synthetic indices that are available 24/7.',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <img src={MaximizePotentialProfit} alt="" />
                            <Text weight="bold" mb="0.8rem" mt="1.6rem">
                                {localize('Go long and short')}
                            </Text>
                            <Text mb="4rem">
                                {localize(
                                    'Open long and short positions, depending on your preferred trading strategy.',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <img src={FriendlySupport} alt="" />
                            <Text weight="bold" mb="0.8rem" mt="1.6rem">
                                {localize('Expert and friendly support')}
                            </Text>
                            <Text mb="4rem">
                                {localize('Get expert, friendly support when you need it.')}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <img src={InstantAccess} alt="" />
                            <Text weight="bold" mb="0.8rem" mt="1.6rem">
                                {localize('Instant access')}
                            </Text>
                            <Text mb="4rem">
                                {localize('Open an account and start trading in minutes.')}
                            </Text>
                        </WhyTradeItem>
                    </Grid>
                    <Text align="left" width="100%" weight="bold">
                        {localize("Don't have a Deriv.com account yet?")}
                    </Text>
                    <Button onClick={handleSignup} id="dm-cfd-signup" mt="1.6rem" secondary>
                        {localize('Create free demo account')}
                    </Button>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default WhyTradeMargin
