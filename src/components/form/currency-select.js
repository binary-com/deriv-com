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
    transition: background 0.25s;

    &:hover {
        background: rgba(245, 247, 250, 0.64);
    }
`
const CurrencySelect = ({ setFieldValue, current_select }) => {
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

    const setCurrencyData = (value) => setFieldValue('currency', value)

    return (
        <Flex jc="space-evenly" mt="16px" mb="32px">
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
                            as="p"
                            type="small"
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

CurrencySelect.propTypes = {
    current_select: PropTypes.string,
    setFieldValue: PropTypes.func.isRequired,
}

export default CurrencySelect
