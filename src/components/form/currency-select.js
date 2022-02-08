import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex } from '../containers'
import { QueryImage, Header } from '../elements'

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

const StyledContentFlex = styled(Flex)``

const CurrencySelect = () => {
    const query = graphql`
        query {
            usd: file(relativePath: { eq: "currencies/usd.png" }) {
                ...fadeIn
            }
            eur: file(relativePath: { eq: "currencies/eur.png" }) {
                ...fadeIn
            }
            gbp: file(relativePath: { eq: "currencies/gbp.png" }) {
                ...fadeIn
            }
            aud: file(relativePath: { eq: "currencies/aud.png" }) {
                ...fadeIn
            }
        }
    `

    const currency_list = [
        {
            value: '/usd/',
            text: 'US dollar (USD)',
            is_selected: false,
            code: 'usd',
        },
        {
            value: '/eur/',
            text: 'Euro (EUR)',
            is_selected: false,
            code: 'eur',
        },
        {
            value: '/gbp/',
            text: 'Pound sterling (GBP)',
            is_selected: false,
            code: 'gbp',
        },
        {
            value: '/aud/',
            text: 'Australian dollar (AUD)',
            is_selected: false,
            code: 'aud',
        },
    ]

    const data = useStaticQuery(query)

    return (
        <StyledContentFlex jc="space-between">
            {currency_list.map((currency, idx) => {
                return (
                    <Item
                        fd="column"
                        ai="center"
                        id={currency.value}
                        onClick={() => console.log(currency.value)}
                        key={idx}
                    >
                        <QueryImage width="24px" height="24px" alt="" data={data[currency.code]} />
                        {/* <Text ml="0.8rem" color={current_select ? 'red' : 'black'}> */}
                        <Header
                            as="h5"
                            weight="normal"
                            color={'black'}
                            style={{ textAlign: 'center' }}
                        >
                            {currency.text}
                        </Header>
                    </Item>
                )
            })}
        </StyledContentFlex>
    )
}

export default CurrencySelect
