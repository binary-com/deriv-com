import React from 'react'
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

const PaymentSection = styled(SectionContainer)`
    padding: 2.4rem 0;
`
const CarouselContainer = styled(Container)`
    overflow: hidden;
    justify-content: space-between;

    div {
        transition: transform ${props => (props.transition ? '1s' : '0')};
        transform: translate(${props => props.position}rem);
    }
`
const PaymentWrapper = styled.div`
    width: 96px;
    margin-right: 3.2rem;
`

class PaymentCarousel extends React.Component {
    intervalRef = undefined
    timeoutRef = undefined
    MyRef = React.createRef()
    state = {
        paymentArray: [
            { key: 0, Name: Mastercard },
            { key: 1, Name: Visa },
            { key: 2, Name: Paytrust },
            { key: 3, Name: Banktransfer },
            { key: 4, Name: Netller },
            { key: 5, Name: Skrill },
            { key: 6, Name: IWallet },
            { key: 7, Name: Jeton },
            { key: 8, Name: InternetBankTransfer },
            { key: 9, Name: WebMoney },
            { key: 10, Name: Qiwi },
            { key: 11, Name: Yandex },
            { key: 12, Name: PerfectMoney },
            { key: 13, Name: Maestro },
            { key: 14, Name: Sticpay },
            { key: 15, Name: Fasapay },
            { key: 16, Name: Payscale },
        ],
        position: 0,
        transition: true,
    }
    handler = entries => {
        let entry
        for (entry of entries) {
            if (entry.isIntersecting) {
                this.intervalRef = window.setInterval(this.handleInterval, 1700)
            } else {
                window.clearTimeout(this.timeoutRef)
                window.clearInterval(this.intervalRef)
            }
        }
    }
    handleInterval = () => {
        this.setState({
            transition: true,
            position: this.state.position - 12.8,
        })
        this.timeoutRef = setTimeout(() => {
            const newPaymentArray = this.state.paymentArray
            const newPaymentIcon = newPaymentArray.shift()
            newPaymentArray.push(newPaymentIcon)
            this.setState({
                transition: false,
                paymentArray: newPaymentArray,
                position: 0,
            })
        }, 1100)
    }
    componentDidMount() {
        const node = this.MyRef.current
        let observer = new IntersectionObserver(this.handler)
        observer.observe(node)
    }
    render() {
        return (
            <PaymentSection>
                <CarouselContainer
                    ref={this.MyRef}
                    transition={this.state.transition}
                    position={this.state.position}
                >
                    {this.state.paymentArray.map(Payment => (
                        <PaymentWrapper key={Payment.key}>
                            <Payment.Name />
                        </PaymentWrapper>
                    ))}
                </CarouselContainer>
            </PaymentSection>
        )
    }
}

export default PaymentCarousel
