import React from 'react'
import styled from 'styled-components'
import Visa from 'images/svg/visa.svg'
import Master from 'images/svg/mastercard.svg'
import Neteller from 'images/svg/neteller.svg'
import Skrill from 'images/svg/skrill.svg'

const Grid = styled.article`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2rem;
    max-width: 100%;

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
    </Grid>
)

export default PaymentMethods