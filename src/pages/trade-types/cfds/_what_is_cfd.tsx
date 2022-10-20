import React, { ReactElement } from 'react'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { TString } from 'types/generics'

type TCFDContent = {
    id: number
    text: TString
    components?: ReactElement[]
}

const data_row: TCFDContent[] = [
    {
        id: 0,
        text: '_t_A CFD (contract for difference) allows you to trade on the price movement of an asset, without buying the underlying asset._t_',
    },
    {
        id: 1,
        text: '_t_On Deriv, you can trade CFDs with:_t_',
    },
    {
        id: 2,
        text: '_t_<0>High leverage — </0>Leverage allows you to open larger positions with a smaller balance in your trading account. The higher the leverage, the less money you need._t_',
        components: [<strong key={0} />],
    },
    {
        id: 3,
        text: '_t_<0>Tight spreads — </0>The spread is the difference between the buy price and sell price. The tighter the spread, the lower the cost to enter the market._t_',
        components: [<strong key={0} />],
    },
]

const data_eu: TCFDContent[] = [
    {
        id: 0,
        text: '_t_A CFD (contract for difference) allows you to trade on the price movement of an asset, without buying the underlying asset._t_',
    },
    {
        id: 1,
        text: '_t_On Deriv, you can trade CFDs with tight spreads. The spread is the difference between the buy price and sell price. The tighter the spread, the lower the cost to enter the market._t_',
    },
]

const WhatIsCFD = () => {
    const { is_row } = useCountryRule()
    const data = is_row ? data_row : data_eu
    return (
        <SectionContainer background="white" padding="8rem 0 1.2rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h2" type="page-title" mb="1.2rem">
                    {localize('What is CFD trading?')}
                </Header>
                {data.map((item) => (
                    <Header weight="normal" type="main-paragraph" as="p" mb="3.2rem" key={item.id}>
                        <Localize translate_text={item.text} components={item?.components ?? []} />
                    </Header>
                ))}
            </SmallContainer>
        </SectionContainer>
    )
}

export default WhatIsCFD
