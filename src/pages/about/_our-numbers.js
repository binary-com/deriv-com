import React from 'react'
import styled from 'styled-components'
import Responsive from 'components/containers/responsive'
import Container from 'components/containers/container.js'
import { Header, Text } from 'components/elements/typography.js'
import { localize } from 'components/localization'
import device from 'themes/device'
import TradingAccountsOpenedSVG from 'images/svg/trading-accounts-opened.svg'
import TradeLastMonthSVG from 'images/svg/trades-last-month.svg'
import TotalTradeTurnoverSVG from 'images/svg/total-trade-turnover.svg'

const OurNumbersWrapper = styled.section`
    width: 100%;
    background-color: var(--color-white);
`
const OurNumbersContainer = styled(Container)`
    .bythenumber {
        margin-top: 2rem;
    }

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
        font-size: var(--text-size-sm);
        line-height: 1.5;
        text-align: right;
        color: var(--color-black-2);
    }

    @media ${device.tabletL} {
        padding: 3rem 0;
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
        font-size: 3.2rem;
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

        @media ${device.tabletL} {
            div {
                margin-top: 1rem;
                width: 100%;
            }
            div:first-child {
                margin-top: 2rem;
            }
            h1 {
                line-height: 1.1;
                font-size: 6.6rem;
                margin-top: 1.4rem;
            }
            ${Text} {
                text-align: center;
            }
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
        font-size: var(--text-size-sm);
        line-height: 1.5;
        color: var(--color-black-2);
        margin-top: 0;
        font-weight: normal;
    }

    @media ${device.tabletL} {
        ${Header} {
            font-size: 3.7rem;
        }
        h3 {
            margin-top: 0;
        }
        p {
            font-weight: 500;
        }
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
            <Responsive.Mobile>
                <Header as="h6" font_size="4rem" color="black-2" align="center">
                    {localize('By the numbers')}
                </Header>
                <Header
                    as="h6"
                    font_size="2rem"
                    lh="1.5"
                    color="black-3"
                    align="center"
                    weight="400"
                    className="bythenumber"
                >
                    {localize(
                        'Our powerful platform and intuitive tools make it easy for users to make profitable trading decisions. We’ll let the numbers do the talking.',
                    )}
                </Header>
            </Responsive.Mobile>
            <Responsive.Desktop>
                <Header as="h2" color="black-2" align="center">
                    {localize('Our Numbers')}
                </Header>
                <Header as="h4" color="black-3" align="center" weight="500">
                    {localize(
                        'Our powerful platform and intuitive tools make it easy for users to make profitable trading decisions. We’ll let the numbers do the talking.',
                    )}
                </Header>
            </Responsive.Desktop>
            <ChartContainer>
                {chart_data.map((data, idx) => (
                    <Charts key={idx}>
                        <Responsive.Desktop>{data.icon}</Responsive.Desktop>
                        <Header as="h3" color="green" align="right" lh="1.5">
                            {data.amount}
                        </Header>
                        <p>{data.text}</p>
                    </Charts>
                ))}
                <h1>USD 13,499,439</h1>
                <Text>{localize('Withdrawn last month')}</Text>
            </ChartContainer>
        </OurNumbersContainer>
    </OurNumbersWrapper>
)
