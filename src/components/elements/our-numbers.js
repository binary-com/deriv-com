import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container.js'
import TradingAccountsOpenedSVG from '../../images/svg/trading-accounts-opened.svg'
import TradeLastMonthSVG from '../../images/svg/trades-last-month.svg'
import TotalTradeTurnoverSVG from '../../images/svg/total-trade-turnover.svg'

const Wrapper = styled.div`
    width: 100%;
    background-color: --color-white;
`
const OurNumbers = styled(Container)`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 8rem 0;
    flex-wrap: wrap;

    h1 {
        width: 100%;
        height: 151px;
        margin-top: 2.4rem;
        font-size: 12.8rem;
        font-weight: bold;
        line-height: 1.5;
        text-align: right;
        color: #85acb0;
    }
    h2 {
        height: 60px;
        font-size: 48px;
        font-weight: bold;
        line-height: 1.25;
        text-align: center;
        color: #2a2a2a;
    }
    p {
        height: 74px;
        font-size: 24px;
        font-weight: 500;
        line-height: 1.25;
        text-align: center;
        color: #333333;
        margin-top: 0.8rem;
    }
    span {
        margin-top: 2rem;
        height: 30px;
        font-size: 20px;
        line-height: 1.5;
        text-align: right;
        color: #2a2a2a;
    }
`

const ChartContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 4rem;

    span {
        width: 100%;
        height: 40px;
        font-size: 32px;
        font-weight: bold;
        line-height: 1.25;
        text-align: right;
        color: #2a2a2a;
    }

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

    h3 {
        margin-top: 2.4rem;
        font-size: 32px;
        font-weight: bold;
        color: #85acb0;
        line-height: 1.5;
    }
    span {
        height: 30px;
        font-size: 20px;
        line-height: 1.5;
        color: #2a2a2a;
    }
    g {
        font-size: 1.4rem;
    }
`

const OurNumbersWrapper = () => {
    return (
        <Wrapper>
            <OurNumbers>
                <h2>Our Numbers</h2>
                <p>
                    Our powerful platform and intuitive tools make it easy for
                    users to make profitable trading decisions. We’ll let the
                    numbers do the talking.
                </p>
                <ChartContainer>
                    <Charts>
                        <TradingAccountsOpenedSVG />
                        <h3>704,293</h3>
                        <span>Trading accounts opened</span>
                    </Charts>
                    <Charts>
                        <TradeLastMonthSVG />
                        <h3>19,514,921</h3>
                        <span>Trades last month</span>
                    </Charts>
                    <Charts>
                        <TotalTradeTurnoverSVG />
                        <h3>USD 6,049,936,768</h3>
                        <span>Total trade turnover</span>
                    </Charts>
                    <h1>USD 13,499,439</h1>
                    <span>Withdrawn last month</span>
                </ChartContainer>
            </OurNumbers>
        </Wrapper>
    )
}

export default OurNumbersWrapper
