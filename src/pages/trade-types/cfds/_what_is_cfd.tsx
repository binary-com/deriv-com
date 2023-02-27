import React from 'react'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const WhatIsCFD = () => {
    const { is_eu } = useRegion()
    return (
        <SectionContainer background="white" padding="8rem 0 1.2rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h2" type="page-title" mb="1.2rem">
                    <Localize translate_text="_t_What is CFD trading?_t_" />
                </Header>
                <Text mb="3.2rem">
                    <Localize translate_text="_t_A CFD (contract for difference) allows you to trade on the price movement of an asset, without buying the underlying asset._t_" />
                </Text>

                {is_eu ? (
                    <Text mb="3.2rem">
                        <Localize translate_text="_t_On Deriv, you can trade CFDs with tight spreads. The spread is the difference between the buy price and sell price. The tighter the spread, the lower the cost to enter the market._t_" />
                    </Text>
                ) : (
                    <>
                        <Text mb="3.2rem">
                            <Localize translate_text="_t_On Deriv, you can trade CFDs with:_t_" />
                        </Text>
                        <Text mb="3.2rem">
                            <Localize
                                translate_text="<0>High leverage — </0>Leverage allows you to open larger positions with a smaller balance in your trading account. The higher the leverage, the less money you need."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text mb="3.2rem">
                            <Localize
                                translate_text="<0>Tight spreads — </0>The spread is the difference between the buy price and sell price. The tighter the spread, the lower the cost to enter the market."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                    </>
                )}
            </SmallContainer>
        </SectionContainer>
    )
}

export default WhatIsCFD
