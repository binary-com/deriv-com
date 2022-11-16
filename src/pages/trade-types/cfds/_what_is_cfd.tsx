import React from 'react'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { Visiblity } from 'components/containers/visibility'

const WhatIsCFD = () => {
    const { is_eu } = useCountryRule()
    return (
        <SectionContainer background="white" padding="8rem 0 1.2rem">
            <SmallContainer direction="column" ai="flex-start">
                <Visiblity device_key="tablet">
                    <Header as="h2" type="page-title" mb="1.2rem">
                        What is CFD trading? Tablet
                    </Header>
                </Visiblity>
                <Header as="h2" type="page-title" mb="1.2rem">
                    {localize('What is CFD trading?')}
                </Header>
                <Text mb="3.2rem">
                    {localize(
                        'A CFD (contract for difference) allows you to trade on the price movement of an asset, without buying the underlying asset.',
                    )}
                </Text>

                {is_eu ? (
                    <Text mb="3.2rem">
                        {localize(
                            '  On Deriv, you can trade CFDs with tight spreads. The spread is the difference between the buy price and sell price. The tighter the spread, the lower the cost to enter the market.',
                        )}
                    </Text>
                ) : (
                    <>
                        <Text mb="3.2rem">{localize('On Deriv, you can trade CFDs with:')}</Text>
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
