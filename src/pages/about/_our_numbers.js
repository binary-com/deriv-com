import React from 'react'
import styled from 'styled-components'
import Container from '../../components/containers/container.js'
import { Header } from '../../components/elements/typography.js'
import { localize } from '../../components/localization'

import TradingAccountsOpenedSVG from 'images/svg/trading-accounts-opened.svg'
import TradeLastMonthSVG from 'images/svg/trades-last-month.svg'
import TotalTradeTurnoverSVG from 'images/svg/total-trade-turnover.svg'

const OurNumbersWrapper = styled.section`
    width: 100%;
    background-color: var(--color-white);
`
const OurNumbersContainer = styled(Container)`
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
        color: var(--color-green);
    }
    h4 {
        margin-top: 0.8rem;
    }
    span {
        margin-top: 2rem;
        height: 30px;
        font-size: 2rem;
        line-height: 1.5;
        text-align: right;
        color: var(--color-black-2);
    }
`

const ChartContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 4rem;

    p {
        width: 100%;
        height: 40px;
        font-size: 32px;
        font-weight: bold;
        line-height: 1.25;
        text-align: right;
        color: var(--color-black-2);
        margin-top: 2rem;
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
    }
    p {
        height: 30px;
        font-size: 2rem;
        line-height: 1.5;
        color: var(--color-black-2);
        margin-top: 0;
        font-weight: normal;
    }
`

const chart_data = [
    {
        amount: '704,293',
        text: localize('Trading accounts opened'),
        icon: <TradingAccountsOpenedSVG />,
    },
    {
        amount: '19,514,921',
        text: localize('Trades last month'),
        icon: <TradeLastMonthSVG />,
    },
    {
        amount: 'USD 6,049,936,768',
        text: localize('Total trade turnover'),
        icon: <TotalTradeTurnoverSVG />,
    },
]
export const OurNumbers = () => (
    <OurNumbersWrapper>
        <OurNumbersContainer>
            <Header as="h2" color="black-2" align="center">
                {localize('Our Numbers')}
            </Header>
            <Header as="h4" color="black-3" align="center" weight="500">
                {localize(
                    'Our powerful platform and intuitive tools make it easy for users to make profitable trading decisions. We’ll let the numbers do the talking.',
                )}
            </Header>
            <ChartContainer>
                {chart_data.map((data, idx) => (
                    <Charts key={idx}>
                        {data.icon}
                        <Header as="h3" color="green" align="right" lh="1.5">
                            {data.amount}
                        </Header>
                        <p>{data.text}</p>
                    </Charts>
                ))}
                <h1>USD 13,499,439</h1>
                <p>{localize('Withdrawn last month')}</p>
            </ChartContainer>
        </OurNumbersContainer>
    </OurNumbersWrapper>
)
