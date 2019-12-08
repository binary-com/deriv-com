import React from 'react'
import Numbers from './_numbers.js'
import HowItWorks from './_how-it-works.js'
import Trading from './_trading.js'
import DHero from 'components/custom/_dhero.js'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import { Show, SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl, Localize } from 'components/localization'

const Dtrader = () => {
    return (
        <Layout>
            <SEO title={localize('DTrader')} />
            <DHero
                title={localize('DTrader')}
                content={<Localize translate_text="Everything you <0/>need<0/>and more" components={[<br key={0} />]} />}
                join_us_for_free
                go_to_live_demo
            />
            <Show.Desktop>
                <Numbers />
            </Show.Desktop>
            <HowItWorks />
            <Trading />
            <OtherPlatform exclude="dtrader" />
        </Layout>
    )
}

export default WithIntl()(Dtrader)
