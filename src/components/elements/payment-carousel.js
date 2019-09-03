import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Container, { SectionContainer } from 'components/containers/container'
import WebMoney from 'images/svg/payment-webmoney.svg'
import Sticpay from 'images/svg/payment-sticpay.svg'
import Banktransfer from 'images/svg/payment-bank-transfer.svg'
import Qiwi from 'images/svg/payment-qiwi.svg'
import Yandex from 'images/svg/payment-yandex.svg'
import Mastercard from 'images/svg/payment-mastercard.svg'
import Skrill from 'images/svg/payment-skrill.svg'
import PerfectMoney from 'images/svg/payment-perfect-money.svg'
import Fasapay from 'images/svg/payment-fasapay.svg'
import Payscale from 'images/svg/payment-payscale.svg'
import Netller from 'images/svg/payment-neteller.svg'
import Maestro from 'images/svg/payment-maestro.svg'
import InternetBankTransfer from 'images/svg/payment-internet-bank-transfer.svg'
import Visa from 'images/svg/payment-visa.svg'
import IWallet from 'images/svg/payment-i-wallet.svg'
import Paytrust from 'images/svg/payment-paytrust.svg'
import Jeton from 'images/svg/payment-jeton.svg'

const PaymentSection = styled(SectionContainer)``
const CarouselContainer = styled(Container)`
    overflow: hidden;
    justify-content: flex-start;
`
const PaymentWrapper = styled.div`
    width: 96px;
    margin-right: 3.2rem;
`
const PaymentCarousel = () => {
    const paymentArray = [
        IWallet,
        Jeton,
        InternetBankTransfer,
        WebMoney,
        Mastercard,
        Visa,
        Paytrust,
        Banktransfer,
        Netller,
        Skrill,
        Qiwi,
        Yandex,
        PerfectMoney,
        Maestro,
        Sticpay,
        Fasapay,
        Payscale,
    ]

    return (
        <PaymentSection>
            <CarouselContainer>
                {paymentArray.map((Payment, index) => (
                    <PaymentWrapper key={index}>
                        <Payment />
                    </PaymentWrapper>
                ))}
            </CarouselContainer>
        </PaymentSection>
    )
}

export default PaymentCarousel
