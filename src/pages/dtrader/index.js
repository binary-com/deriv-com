import React from 'react'
import HowItWorks from './_how-it-works.js'
import Trading from './_trading.js'
import DTraderAnimation from './dtrader-animation.json'
import DHero from 'components/custom/_dhero.js'
import DNumber from 'components/custom/_dnumbers.js'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import { Show, SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import dtrader_logo from 'images/svg/dtrader-icon.svg'
import { localize, WithIntl, Localize } from 'components/localization'

const items = [
    { title: '50+', subtitle: 'tradable assets and growing' },
    { title: '$0.35', subtitle: 'low minimum stake' },
    { title: '1s - 365d', subtitle: 'flexible trade duration' },
    { title: '>200%', subtitle: 'potential payout' },
]
const Dtrader = () => {
    return (
        <Layout>
            <SEO title={localize('DTrader')} />
            <DHero
                title={localize('DTrader')}
                content={<Localize translate_text="Everything you <0/>need<0/>and more" components={[<br key={0} />]} />}
                join_us_for_free
                go_to_live_demo
                Logo={dtrader_logo}
                animation={DTraderAnimation}
            />
            <Show.Desktop>
                <DNumber items={items} justify='space-around' />
            </Show.Desktop>
            <HowItWorks />
            <Trading />
            <OtherPlatform exclude="dtrader" />
        </Layout>
    )
}

export default WithIntl()(Dtrader)
