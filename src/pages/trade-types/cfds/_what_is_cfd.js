import React from 'react'
import styled from 'styled-components'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize, localize } from 'components/localization'

const SecondaryText = styled(Text)`
    margin-bottom: 2.2rem;
`
const WhatIsCFD = () => {

    return (
        <>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" type="page-title" mb="1.2rem">
                        {localize('What is CFD trading?')}
                    </Header>
                    <Text mb="3.2rem">
                        {localize(
                            'A CFD (contract for difference) allows you to trade on the price movement of an asset, without buying the underlying asset.',
                        )}
                    </Text>
                    <SecondaryText>{localize('On Deriv, you can trade CFDs with:')}</SecondaryText>
                    <SecondaryText>
                        {
                            <Localize
                                translate_text="<0>High leverage</0> — Leverage allows you to open larger positions with a smaller balance in your trading account. The higher the leverage, the less money you need."
                                components={[<strong key={0} />]}
                            />
                        }
                    </SecondaryText>
                    <SecondaryText>
                        {
                            <Localize
                                translate_text="<0>Tight spreads</0> — The spread is the difference between the buy price and sell price. The tighter the spread, the lower the cost to enter the market."
                                components={[<strong key={0} />]}
                            />
                        }
                    </SecondaryText>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default WhatIsCFD
