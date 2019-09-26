import React, { Component } from 'react'
import { TradeWithDbot } from './_trade-with-dbot'
import { OtherPlatform } from './_other-platform'
import AutomateTrading from './_automate-trading.js'
import Banner from './_banner.js'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
// import { getLocationHash, sanitize } from 'common/utility'
// import device from 'themes/device'

class Dbot extends Component {
    render() {
        return (
            <Layout>
                <SEO title={localize('Dbot')} />
                <AutomateTrading />
                <Banner />
                <TradeWithDbot />
                <OtherPlatform />
            </Layout>
        )
    }
}

export default WithIntl()(Dbot)
