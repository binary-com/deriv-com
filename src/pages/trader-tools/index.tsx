import React from 'react'
import { Hero } from './common/_style'
import TradingTools from './_trading-tools'
import { Container, SEO } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl, Localize } from 'components/localization'
import Layout from 'components/layout/layout'

const tools = [
    {
        title: <Localize translate_text="Margin calculator" />,
        subtitle: (
            <Localize translate_text="Estimate the margin you need to hold your positions. The result depends on leverage, volume lot, and your DMT5 account balance." />
        ),
        link: {
            text: <Localize translate_text="Try margin calculator" />,
            route: '/trader-tools/margin-calculator/',
        },
        image_name: 'margin',
        image_alt: localize('margin calculator'),
    },
    {
        title: <Localize translate_text="Swap calculator" />,
        subtitle: (
            <Localize translate_text="Calculate the overnight fees for holding any open positions. The fees can be positive or negative depending on your swap rate." />
        ),
        link: {
            text: <Localize translate_text="Try swap calculator" />,
            route: '/trader-tools/swap-calculator/',
        },
        image_name: 'swap',
        image_alt: localize('swap calculator'),
    },
    {
        title: <Localize translate_text="Pip calculator" />,
        subtitle: (
            <Localize translate_text="Find the value of the pips in your trades to manage your risk efficiently." />
        ),
        link: {
            text: <Localize translate_text="Try pip calculator" />,
            route: '/trader-tools/pip-calculator/',
        },
        image_name: 'pip',
        image_alt: localize('pip calculator'),
    },
    {
        title: <Localize translate_text="PnL for margin" />,
        subtitle: (
            <Localize translate_text="Estimate the stop loss and/or take profit levels as well as the pip value for your contract to mitigate your risk when buying or selling a position." />
        ),
        link: {
            text: <Localize translate_text="Try PnL for margin calculator" />,
            route: '/trader-tools/pnl-for-margin/',
        },
        image_name: 'pnl_margin',
        image_alt: localize('PnL margin'),
    },
    {
        title: <Localize translate_text="Stop loss and take profit for multipliers" />,
        subtitle: (
            <Localize translate_text="Estimate the level and amount of the stop loss and take profit for your contract to mitigate your risk in case the market price moves against your prediction." />
        ),
        link: {
            text: <Localize translate_text="Try multipliers calculator" />,
            route: '/trader-tools/pnl-for-multipliers/',
        },
        image_name: 'pnl_multipliers',
        image_alt: localize('PnL multipliers'),
    },
]

const TraderTools = () => {
    return (
        <Layout>
            <SEO
                title={localize('Trading tools | Swap, pip, and margin calculators | Deriv')}
                description={localize(
                    "Take advantage of Deriv's trading calculators that help you to calculate your swap, pip, profit, and losses for the CFD and multiplier trading.",
                )}
            />
            <Hero jc="center" ai="center">
                <Container>
                    <Header as="h1" type="display-title" color="white" align="center">
                        {localize('Traders’ tools')}
                    </Header>
                </Container>
            </Hero>
            <TradingTools tools={tools} />
        </Layout>
    )
}
export default WithIntl()(TraderTools)
