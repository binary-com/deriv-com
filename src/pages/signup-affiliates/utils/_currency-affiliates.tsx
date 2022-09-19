import React from 'react'
import styled from 'styled-components'
import USD from 'images/svg/signup-affiliates/usd.svg'
import AUD from 'images/svg/signup-affiliates/aud.svg'
import EUR from 'images/svg/signup-affiliates/eur.svg'
import GBP from 'images/svg/signup-affiliates/gbp.svg'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'

const Item = styled(Flex)`
    width: 90px;
    pointer-events: all;
    cursor: pointer;
    height: 90px;
    font-size: 12px;
    transition: background 0.25s;

    &:hover {
        background: rgba(245, 247, 250, 0.64);
    }
`

type CurrencyProps = {
    selectedCurrency?: (currency) => void
    current_select?: string
}

const Currency = ({ selectedCurrency, current_select }: CurrencyProps) => {
    const currency_list = [
        {
            value: '/usd/',
            text: 'US dollar',
            short: '(USD)',
            is_selected: false,
            code: 'usd',
            image: USD,
        },
        {
            value: '/eur/',
            text: 'Euro',
            short: '(EUR)',
            is_selected: false,
            code: 'eur',
            image: EUR,
        },
        {
            value: '/gbp/',
            text: 'Pound sterling',
            short: '(GBP)',
            is_selected: false,
            code: 'gbp',
            image: GBP,
        },
        {
            value: '/aud/',
            text: 'Australian dollar',
            short: '(AUD)',
            is_selected: false,
            code: 'aud',
            image: AUD,
        },
    ]

    const handleCurrencyData = (currency) => {
        selectedCurrency(currency.value)
    }

    return (
        <Flex jc="space-evenly" mt="30px" mb="32px">
            {currency_list.map((currency) => {
                const selected = current_select === currency.value
                return (
                    <Item
                        fd="column"
                        ai="center"
                        id={currency.value}
                        onClick={() => handleCurrencyData(currency)}
                        key={currency.code}
                    >
                        <img src={currency.image} alt="" width="24" height="24" />

                        <Header
                            type="paragraph-2"
                            weight="normal"
                            color={selected ? 'red' : 'black'}
                            style={{ textAlign: 'center' }}
                        >
                            {currency.text}
                            <br />
                            {currency.short}
                        </Header>
                    </Item>
                )
            })}
        </Flex>
    )
}

export default Currency
