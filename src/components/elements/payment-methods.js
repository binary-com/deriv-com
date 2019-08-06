import React from 'react'
import styled from 'styled-components'
import Visa from 'images/svg/visa.svg'
import Master from 'images/svg/mastercard.svg'
import Neteller from 'images/svg/neteller.svg'
import Skrill from 'images/svg/skrill.svg'
import Bitcoin from 'images/svg/bitcoin.svg'

const Grid = styled.article`
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
    width: 100%;

    * {
        max-width: 100%;
        justify-self: center;
        align-self: center;
    }
`
const PaymentMethods = () => (
    <Grid>
        <Visa />
        <Master />
        <Neteller />
        <Skrill />
        <Bitcoin />
    </Grid>
)

export default PaymentMethods