import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container.js'
import TradingAccountsOpenedSVG from '../../images/svg/trading-accounts-opened.svg'
import TradeLastMonthSVG from '../../images/svg/trades-last-month.svg'
import TotalTradeTurnoverSVG from '../../images/svg/total-trade-turnover.svg'

const Wrapper = styled.div`
    width: 100%;
    background-color: #ffffff;
`
const OurNumbers = styled(Container)`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5rem 0;
    flex-wrap: wrap;

    h1 {
        font-size: 48px;
        color: #2a2a2a;
        font-weight: bold;
    }
    p {
        color: #333333;
        font-size: 24px;
        font-weight: 500;
        text-align: center;
        margin-top: 8px;
        height: 74px;
    }
`

const ChartContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 40px;

    @media (max-width: 981px) {
        justify-content: center;
        margin-top: 0;

        div {
            margin-top: 2rem;
        }
    }
`

const Charts = styled.div`
    width: 328px;
    text-align: right;

    h2 {
        font-size: 32px;
        font-weight: bold;
        color: #85acb0;
    }
    g {
        font-size: 2rem;
    }
`

const OurNumbersWrapper = () => {
    return (
        <Wrapper>
            <OurNumbers>
                <h1>Our Numbers</h1>
                <p>
                    Our powerful platform and intuitive tools make it easy for
                    users to make profitable trading decisions. We’ll let the
                    numbers do the talking.
                </p>
                <ChartContainer>
                    <Charts>
                        <TradingAccountsOpenedSVG />
                        <h2>704,293</h2>
                        <span>Trading accounts opened</span>
                    </Charts>
                    <Charts>
                        <TradeLastMonthSVG />
                        <h2>704,293</h2>
                        <span>Trading accounts opened</span>
                    </Charts>
                    <Charts>
                        <TotalTradeTurnoverSVG />
                        <h2>704,293</h2>
                        <span>Trading accounts opened</span>
                    </Charts>
                </ChartContainer>
            </OurNumbers>
        </Wrapper>
    )
}

export default OurNumbersWrapper
