import React from 'react'
import styled from 'styled-components'
import TradingTools from './_tools'
import { Flex, Container, SEO } from 'components/containers'
import { Header, LocalizedLinkText } from 'components/elements'
import { localize, WithIntl, Localize } from 'components/localization'
import Layout from 'components/layout/layout'
import Patterns from 'images/common/trade-tools/trade-tools-bg.png'

const Hero = styled(Flex)`
    height: 40rem;
    background: var(--color-black);
    background-image: url(${Patterns});
    background-size: cover;
`

const tools = [
    {
        title: <Localize translate_text="Margin calculator" />,
        subtitle: (
            <Localize
                translate_text="Estimate the margin you need to hold your positions. The result depends on leverage, volume lot, and your DMT5 account balance. <br /><0>Try margin calculator</0>"
                components={[<LocalizedLinkText color="red" key={0} />]}
            />
        ),

        image_name: 'margin',
        image_alt: localize('margin calculator'),
    },
    {
        title: <Localize translate_text="Swap calculator" />,
        subtitle: (
            <Localize
                translate_text="Calculate the overnight fees for holding any open positions. The fees can be positive or negative depending on your swap rate.<br /><0>Try swap calculator</0>"
                components={[<LocalizedLinkText color="red" key={0} />]}
            />
        ),
        subtitle_mobile: (
            <Localize
                translate_text="Calculate the overnight fees for holding any open positions. The fees can be positive or negative depending on your swap rate.<br /><0>Try swap calculator</0>"
                components={[<LocalizedLinkText color="red" key={0} />]}
            />
        ),

        image_name: 'swap',
        image_alt: localize('swap calculator'),
    },
    {
        title: <Localize translate_text="Pip calculator" />,
        subtitle: (
            <Localize
                translate_text="Find the value of the pips in your trades to manage your risk efficiently.<br /><0>Try pip calculator</0>"
                components={[<LocalizedLinkText color="red" key={0} />]}
            />
        ),
        subtitle_mobile: (
            <Localize
                translate_text="Find the value of the pips in your trades to manage your risk efficiently.<br /><0>Try pip calculator</0>"
                components={[<LocalizedLinkText color="red" key={0} />]}
            />
        ),

        image_name: 'pip',
        image_alt: localize('pip calculator'),
    },
    {
        title: <Localize translate_text="PnL for margin" />,
        subtitle: (
            <Localize
                translate_text="Estimate the stop loss and/or take profit levels as well as the pip value for your contract to mitigate your risk when buying or selling a position.<br /><0>Try PnL for margin</0>"
                components={[<LocalizedLinkText color="red" key={0} />]}
            />
        ),
        subtitle_mobile: (
            <Localize
                translate_text="Estimate the stop loss and/or take profit levels as well as the pip value for your contract to mitigate your risk when buying or selling a position.<br /><0>Try PnL for margin</0>"
                components={[<LocalizedLinkText color="red" key={0} />]}
            />
        ),

        image_name: 'pnl_margin',
        image_alt: localize('PnL margin'),
    },
    {
        title: <Localize translate_text="PnL for multipliers" />,
        subtitle: (
            <Localize
                translate_text="Estimate the stop loss and/or take profit level as well as the stop loss and/or take profit amount for your contract to mitigate your risk in case the market price moves against your favour.<br /><0>Try PnL for multipliers</0>"
                components={[<LocalizedLinkText color="red" key={0} />]}
            />
        ),
        subtitle_mobile: (
            <Localize
                translate_text="Estimate the stop loss and/or take profit level as well as the stop loss and/or take profit amount for your contract to mitigate your risk in case the market price moves against your favour.<br /><0>Try PnL for multipliers</0>"
                components={[<LocalizedLinkText color="red" key={0} />]}
            />
        ),

        image_name: 'pnl_multipliers',
        image_alt: localize('PnL multipliers'),
    },
]

const Traders = () => {
    return (
        <Layout>
            <SEO title={localize('Trade tools')} />
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
export default WithIntl()(Traders)
