import React from 'react'
import { SmallContainer, Grid, WhyTradeItem } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
import FriendlySupport from 'images/svg/trade-types/friendly-support.svg'
import HighLeverge from 'images/svg/trade-types/high-leverage.svg'
import MaximizePotentialProfit from 'images/svg/trade-types/maximize-potential-profit.svg'
import InstantAccess from 'images/svg/trade-types/instant-access.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import { Button } from 'components/form'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useRegion from 'components/hooks/use-region'

const WhyTradeMargin = () => {
    const { is_eu } = useRegion()
    const handleSignup = useHandleSignup()

    const high_laverage_low_spreads_content = is_eu
        ? '_t_Take advantage of high leverage and low spreads on Deriv MT5._t_'
        : '_t_Take advantage of high leverage and low spreads on Deriv MT5 and Deriv X._t_'

    return (
        <>
            <SectionContainer background="rgba(242, 243, 244, 0.3)" padding="4rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" type="section-title" mb="4rem">
                        <Localize translate_text="_t_Why trade on margin with Deriv_t_" />
                    </Header>
                    <Grid>
                        <WhyTradeItem>
                            <img src={HighLeverge} alt="High leverage, low spreads" />
                            <Text weight="bold" mb="0.8rem" mt="1.6rem">
                                <Localize translate_text="_t_High leverage, low spreads_t_" />
                            </Text>
                            <Text mb="4rem">
                                <Localize translate_text={high_laverage_low_spreads_content} />
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <img src={SyntheticIndices} alt="Synthetic Indices" />
                            <Text weight="bold" mb="0.8rem" mt="1.6rem">
                                <Localize translate_text="_t_All favourite markets available_t_" />
                            </Text>
                            <Text mb="4rem">
                                <Localize translate_text="_t_Trade on all popular markets plus our proprietary synthetic indices that are available 24/7._t_" />
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <img src={MaximizePotentialProfit} alt="Maximize Potential Profit" />
                            <Text weight="bold" mb="0.8rem" mt="1.6rem">
                                <Localize translate_text="_t_Go long and short_t_" />
                            </Text>
                            <Text mb="4rem">
                                <Localize translate_text="_t_Open long and short positions, depending on your preferred trading strategy._t_" />
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <img src={FriendlySupport} alt="Friendly Support" />
                            <Text weight="bold" mb="0.8rem" mt="1.6rem">
                                <Localize translate_text="_t_Expert and friendly support_t_" />
                            </Text>
                            <Text mb="4rem">
                                <Localize translate_text="_t_Get expert, friendly support when you need it._t_" />
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <img src={InstantAccess} alt="Instant access" />
                            <Text weight="bold" mb="0.8rem" mt="1.6rem">
                                <Localize translate_text="_t_Instant access_t_" />
                            </Text>
                            <Text mb="4rem">
                                <Localize translate_text="_t_Open an account and start trading in minutes._t_" />
                            </Text>
                        </WhyTradeItem>
                    </Grid>
                    <Text align="start" width="100%" weight="bold">
                        <Localize translate_text="_t_Don't have a Deriv.com account yet?_t_" />
                    </Text>
                    <Button onClick={handleSignup} id="dm-cfd-signup" mt="1.6rem" secondary>
                        <Localize translate_text="_t_Create free demo account_t_" />
                    </Button>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default WhyTradeMargin
