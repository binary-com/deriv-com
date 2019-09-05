import React from 'react'
import styled from 'styled-components'
import AutoCarousel from './auto-carousel'
import { SectionContainer } from 'components/containers/container'
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

const PaymentSection = styled(SectionContainer)`
    padding: 2.4rem 0;
`
class PaymentMethods extends React.Component {
    state = {
        paymentArray: [
            { key: 0, Component: Mastercard },
            { key: 1, Component: Visa },
            { key: 2, Component: Paytrust },
            { key: 3, Component: Banktransfer },
            { key: 4, Component: Netller },
            { key: 5, Component: Skrill },
            { key: 6, Component: IWallet },
            { key: 7, Component: Jeton },
            { key: 8, Component: InternetBankTransfer },
            { key: 9, Component: WebMoney },
            { key: 10, Component: Qiwi },
            { key: 11, Component: Yandex },
            { key: 12, Component: PerfectMoney },
            { key: 13, Component: Maestro },
            { key: 14, Component: Sticpay },
            { key: 15, Component: Fasapay },
            { key: 16, Component: Payscale },
        ],
    }
    handleNewData = newData => {
        this.setState({
            paymentArray: newData,
        })
    }
    render() {
        return (
            <PaymentSection>
                <AutoCarousel
                    components={this.state.paymentArray}
                    onChange={this.handleNewData}
                    transition_delay={1300}
                    icon_width={12.8}
                />
            </PaymentSection>
        )
    }
}
export default PaymentMethods
