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
import { LinkButton } from 'components/form'
import { DerivStore } from 'store'

const WhyTradeCFD = () => {
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <SectionContainer background="rgba(245, 247, 250, 0.64)" padding="4rem 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h3" type="section-title" mb="4rem">
                    {localize('Why trade on CFDs with Deriv')}
                </Header>
                <Grid>
                    <WhyTradeItem>
                        <img src={HighLeverge} alt="high leverage" />
                        <Text weight="bold" mb="0.8rem" mt="1.6rem">
                            {is_eu_country
                                ? localize('Tight spreads')
                                : localize('High leverage, tight spreads')}
                        </Text>
                        <Text mb="4rem">
                            {is_eu_country
                                ? localize(
                                      'Take advantage of tight spreads on Deriv’s CFD trading platforms.',
                                  )
                                : localize(
                                      'Take advantage of high leverage and tight spreads on Deriv’s CFD trading platforms.',
                                  )}
                        </Text>
                    </WhyTradeItem>
                    <WhyTradeItem>
                        <img src={SyntheticIndices} alt="synthetic indices" />
                        <Text weight="bold" mb="0.8rem" mt="1.6rem">
                            {localize('All your favourite markets')}
                        </Text>
                        <Text mb="4rem">
                            {is_eu_country
                                ? localize(
                                      'Trade on all popular markets plus our proprietary synthetic indices that are available 24/7.',
                                  )
                                : localize(
                                      'Trade on financial markets plus our proprietary synthetic indices that are available 24/7.',
                                  )}
                        </Text>
                    </WhyTradeItem>
                    <WhyTradeItem>
                        <img src={MaximizePotentialProfit} alt="maximize potential profit" />
                        <Text weight="bold" mb="0.8rem" mt="1.6rem">
                            {localize('Go long or short')}
                        </Text>
                        <Text mb="4rem">
                            {localize(
                                'Open long or short positions based on your predictions of the market price movements.',
                            )}
                        </Text>
                    </WhyTradeItem>
                    <WhyTradeItem>
                        <img src={FriendlySupport} alt="friendly support" />
                        <Text weight="bold" mb="0.8rem" mt="1.6rem">
                            {localize('Expert and friendly support')}
                        </Text>
                        <Text mb="4rem">
                            {localize('Get expert, friendly support when you need it.')}
                        </Text>
                    </WhyTradeItem>
                    <WhyTradeItem>
                        <img src={InstantAccess} alt="instant access" />
                        <Text weight="bold" mb="0.8rem" mt="1.6rem">
                            {localize('Instant access')}
                        </Text>
                        <Text mb="4rem">
                            {localize('Open an account and start trading in minutes.')}
                        </Text>
                    </WhyTradeItem>
                </Grid>
                <Text align="left" width="100%" weight="bold">
                    {localize("Don't have a Deriv account yet?")}
                </Text>
                <LinkButton id="dm-cfd-signup" mt="1.6rem" to="/signup/" secondary="true">
                    {localize('Create free demo account')}
                </LinkButton>
            </SmallContainer>
        </SectionContainer>
    )
}

export default WhyTradeCFD
