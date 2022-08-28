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

const WhyTradeCFD = () => {
    const { is_eu_country } = React.useContext<DerivStoreType>(DerivStore)
    const handleSignup = useHandleSignup()

    return (
        <SectionContainer background="rgba(245, 247, 250, 0.64)" padding="4rem 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" type="section-title" mb="4rem">
                    {localize('_t_Why trade on CFDs with Deriv_t_')}
                </Header>
                <Grid>
                    <WhyTradeItem>
                        <img src={HighLeverge} alt="high leverage" />
                        <Text weight="bold" mb="0.8rem" mt="1.6rem">
                            {is_eu_country
                                ? localize('_t_Tight spreads_t_')
                                : localize('_t_High leverage, tight spreads_t_')}
                        </Text>
                        <Text mb="4rem">
                            {is_eu_country
                                ? localize(
                                      '_t_Take advantage of tight spreads on Deriv’s CFD trading platforms._t_',
                                  )
                                : localize(
                                      '_t_Take advantage of high leverage and tight spreads on Deriv’s CFD trading platforms._t_',
                                  )}
                        </Text>
                    </WhyTradeItem>
                    <WhyTradeItem>
                        <img src={SyntheticIndices} alt="synthetic indices" />
                        <Text weight="bold" mb="0.8rem" mt="1.6rem">
                            {localize('_t_All your favourite markets_t_')}
                        </Text>
                        <Text mb="4rem">
                            {is_eu_country
                                ? localize(
                                      '_t_Trade on all popular markets plus our proprietary synthetic indices that are available 24/7._t_',
                                  )
                                : localize(
                                      '_t_Trade on financial markets plus our proprietary synthetic indices that are available 24/7._t_',
                                  )}
                        </Text>
                    </WhyTradeItem>
                    <WhyTradeItem>
                        <img src={MaximizePotentialProfit} alt="maximize potential profit" />
                        <Text weight="bold" mb="0.8rem" mt="1.6rem">
                            {localize('_t_Go long or short_t_')}
                        </Text>
                        <Text mb="4rem">
                            {localize(
                                '_t_Open long or short positions based on your predictions of the market price movements._t_',
                            )}
                        </Text>
                    </WhyTradeItem>
                    <WhyTradeItem>
                        <img src={FriendlySupport} alt="friendly support" />
                        <Text weight="bold" mb="0.8rem" mt="1.6rem">
                            {localize('_t_Expert and friendly support_t_')}
                        </Text>
                        <Text mb="4rem">
                            {localize('_t_Get expert, friendly support when you need it._t_')}
                        </Text>
                    </WhyTradeItem>
                    <WhyTradeItem>
                        <img src={InstantAccess} alt="instant access" />
                        <Text weight="bold" mb="0.8rem" mt="1.6rem">
                            {localize('_t_Instant access_t_')}
                        </Text>
                        <Text mb="4rem">
                            {localize('_t_Open an account and start trading in minutes._t_')}
                        </Text>
                    </WhyTradeItem>
                </Grid>
                <Text align="left" width="100%" weight="bold">
                    {localize("_t_Don't have a Deriv account yet?_t_")}
                </Text>
                <Button onClick={handleSignup} id="dm-cfd-signup" mt="1.6rem" secondary="true">
                    {localize('_t_Create free demo account_t_')}
                </Button>
            </SmallContainer>
        </SectionContainer>
    )
}

export default WhyTradeCFD
