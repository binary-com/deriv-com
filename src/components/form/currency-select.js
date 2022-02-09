import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Flex } from '../containers'
import { Header } from '../elements'
import USD from '../../images/svg/signup-affiliate-details/usd.svg'
import AUD from '../../images/svg/signup-affiliate-details/aud.svg'
import EUR from '../../images/svg/signup-affiliate-details/eur.svg'
import GBP from '../../images/svg/signup-affiliate-details/gbp.svg'

const Item = styled(Flex)`
    width: 90px;
    pointer-events: all;
    cursor: pointer;
    font-size: 12px;
    padding: 0.8rem 1.6rem;
    transition: background 0.25s;

    &:hover {
        background: rgba(245, 247, 250, 0.64);
    }
`
const CurrencySelect = ({ setFieldValue, current_select }) => {
    const currency_list = [
        {
            value: '/usd/',
            text: 'US dollar (USD)',
            is_selected: false,
            code: 'usd',
            image: USD,
        },
        {
            value: '/eur/',
            text: 'Euro (EUR)',
            is_selected: false,
            code: 'eur',
            image: EUR,
        },
        {
            value: '/gbp/',
            text: 'Pound sterling (GBP)',
            is_selected: false,
            code: 'gbp',
            image: GBP,
        },
        {
            value: '/aud/',
            text: 'Australian dollar (AUD)',
            is_selected: false,
            code: 'aud',
            image: AUD,
        },
    ]

    const setCurrencyData = (value) => setFieldValue('currency', value)

    const setCurrencyData = (value) => setFieldValue('currency', value)

    return (
        <Flex jc="space-between">
            {currency_list.map((currency, idx) => {
                const selected = current_select === currency.value
                return (
                    <Item
                        fd="column"
                        ai="center"
                        id={currency.value}
                        onClick={() => setCurrencyData(currency.value)}
                        key={idx}
                        selected={selected}
                    >
                        <div>
                            <img src={currency.image} alt="" width="24" height="24" />
                        </div>
                        <Header
                            as="h5"
                            weight="normal"
                            color={selected ? 'red' : 'black'}
                            style={{ textAlign: 'center' }}
                        >
                            {currency.text}
                        </Header>
                    </Item>
                )
            })}
        </Flex>
    )
}

CurrencySelect.propTypes = {
    current_select: PropTypes.string,
    setFieldValue: PropTypes.func.isRequired,
}

export default CurrencySelect
