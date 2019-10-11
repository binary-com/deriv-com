import React from 'react'
import styled from 'styled-components'
import Show from 'components/containers/show'
import Container from 'components/containers/container.js'
import { Header, Text } from 'components/elements/typography.js'
import { localize } from 'components/localization'
import device from 'themes/device'
import TradingAccounts from 'images/gif/trading-accounts-opened.gif'
import TradingTrades from 'images/gif/trading-trades.gif'
import TradingTurnover from 'images/gif/trading-total-turnover.gif'

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
        height: 15.1rem;
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
        height: 3rem;
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
        height: 4rem;
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
    width: 32.8rem;
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
        amount: '704,000+',
        text: localize('Trading accounts opened'),
        icon: <img src={TradingAccounts} />,
    },
    {
        amount: '19,514,000+',
        text: localize('Trades last month'),
        icon: <img src={TradingTrades} />,
    },
    {
        amount: 'USD 6,049,935,000+',
        text: localize('Total trade turnover'),
        icon: <img src={TradingTurnover} />,
    },
]
export const OurNumbers = () => (
    <OurNumbersWrapper>
        <OurNumbersContainer>
            <Show.Mobile>
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
            </Show.Mobile>
            <Show.Desktop>
                <Header as="h2" color="black-2" align="center">
                    {localize('Our numbers')}
                </Header>
                <Header as="h4" color="black-3" align="center" weight="500">
                    {localize(
                        'Our powerful platform and intuitive tools make it easy for users to make profitable trading decisions. We’ll let the numbers do the talking.',
                    )}
                </Header>
            </Show.Desktop>
            <ChartContainer>
                {chart_data.map((data, idx) => (
                    <Charts key={idx}>
                        <Show.Desktop>{data.icon}</Show.Desktop>
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
