import React from 'react'
import { Hero } from './common/_style'
import TradingTools, { ToolsType } from './_trading-tools'
import { Container, SEO } from 'components/containers'
import { Header } from 'components/elements'
import { localize, WithIntl, Localize } from 'components/localization'
import Layout from 'components/layout/layout'

const tools: ToolsType = [
    {
        title: '_t_Margin calculator_t_',
        subtitle:
            '_t_Estimate the margin you need to hold your positions. The result depends on leverage, volume lot, and your Deriv MT5 account balance._t_',
        link: {
            text: '_t_Try margin calculator_t_',
            route: '/trader-tools/margin-calculator/',
        },
        image_name: 'margin',
        image_alt: localize('_t_margin calculator_t_'),
    },
    {
        title: '_t_Swap calculator_t_',
        subtitle:
            '_t_Calculate the overnight fees for holding any open positions. The fees can be positive or negative depending on your swap rate._t_',
        link: {
            text: '_t_Try swap calculator_t_',
            route: '/trader-tools/swap-calculator/',
        },
        image_name: 'swap',
        image_alt: localize('_t_swap calculator_t_'),
    },
    {
        title: '_t_Pip calculator_t_',
        subtitle:
            '_t_Find the value of the pips in your trades to manage your risk efficiently._t_',
        link: {
            text: '_t_Try pip calculator_t_',
            route: '/trader-tools/pip-calculator/',
        },
        image_name: 'pip',
        image_alt: localize('_t_pip calculator_t_'),
    },
    {
        title: '_t_PnL for margin_t_',
        subtitle:
            '_t_Estimate the stop loss and/or take profit levels as well as the pip value for your contract to mitigate your risk when buying or selling a position._t_',
        link: {
            text: '_t_Try PnL for margin calculator_t_',
            route: '/trader-tools/pnl-for-margin/',
        },
        image_name: 'pnl_margin',
        image_alt: localize('_t_PnL margin_t_'),
    },
    {
        title: '_t_Stop loss and take profit for multipliers_t_',
        subtitle:
            '_t_Estimate the level and amount of the stop loss and take profit for your contract to mitigate your risk in case the market price moves against your prediction._t_',
        link: {
            text: '_t_Try multipliers calculator_t_',
            route: '/trader-tools/pnl-for-multipliers/',
        },
        image_name: 'pnl_multipliers',
        image_alt: localize('_t_PnL multipliers_t_'),
    },
]

const TraderTools = () => {
    return (
        <Layout>
            <SEO
                title={localize('_t_Trading tools | Swap, pip, and margin calculators | Deriv_t_')}
                description={localize(
                    "_t_Take advantage of Deriv's trading calculators that help you to calculate your swap, pip, profit, and losses for the CFD and multiplier trading._t_",
                )}
            />
            <Hero jc="center" ai="center">
                <Container>
                    <Header as="h1" type="display-title" color="white" align="center">
                        <Localize translate_text="_t_Traders’ tools_t_" />
                    </Header>
                </Container>
            </Hero>
            <TradingTools tools={tools} />
        </Layout>
    )
}
export default WithIntl()(TraderTools)
