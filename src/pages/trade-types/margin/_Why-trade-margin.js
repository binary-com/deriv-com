import React from 'react'
import styled from 'styled-components'
import { SmallContainer } from '../components/_style'
import { SectionContainer, CssGrid } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import FriendlySupport from 'images/svg/trade-types/friendly-support.svg'
import HighLeverge from 'images/svg/trade-types/high-leverage.svg'
import MaximizePotentialProfit from 'images/svg/trade-types/maximize-potential-profit.svg'
import InstantAccess from 'images/svg/trade-types/instant-access.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'

const Item = styled.div`
    margin-right: 4rem;
    min-width: 23.7rem;
    max-width: 23.7rem;
`
const WhyTradeMargin = () => {
    return (
        <>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column">
                    <Header as="h2" mb="1.2rem">
                        {localize('Why trade on margin with Deriv')}
                    </Header>
                    <CssGrid columns="repeat(3, 1fr)" columngap="1rem">
                        <Item>
                            <HighLeverge />
                            <Text weight="bold" mb="1.2rem">
                                {localize('High leverage, low spreads')}
                            </Text>
                            <Text mb="4rem">
                                {localize(
                                    'Take advantage of high leverage and low spreads on Deriv MT5 (DMT5).',
                                )}
                            </Text>
                        </Item>
                        <Item>
                            <SyntheticIndices />
                            <Text weight="bold" mb="1.2rem">
                                {localize('All favourite markets available')}
                            </Text>
                            <Text mb="4rem">
                                {localize(
                                    'Trade on all popular markets plus our proprietary synthetic indices that are available 24/7.',
                                )}
                            </Text>
                        </Item>
                        <Item>
                            <MaximizePotentialProfit />
                            <Text weight="bold" mb="1.2rem">
                                {localize('Go long and short')}
                            </Text>
                            <Text mb="4rem">
                                {localize(
                                    'Open long and short positions, depending on your preferred trading strategy.',
                                )}
                            </Text>
                        </Item>
                        <Item>
                            <FriendlySupport />
                            <Text weight="bold" mb="1.2rem">
                                {localize('Expert and friendly support')}
                            </Text>
                            <Text mb="4rem">
                                {localize('Get expert, friendly support when you need it.')}
                            </Text>
                        </Item>
                        <Item>
                            <InstantAccess />
                            <Text weight="bold" mb="1.2rem">
                                {localize('Instant access')}
                            </Text>
                            <Text mb="4rem">
                                {localize('Open an account and start trading in minutes.')}
                            </Text>
                        </Item>
                    </CssGrid>
                    <Text align="left" width="100%" weight="bold">
                        {localize("Don't have a Deriv.com account yet?")}
                    </Text>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default WhyTradeMargin
