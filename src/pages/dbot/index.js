import React, { Component } from 'react'
import { Tutorial } from './_tutorial'
import { TradeWithDbot } from './_trade-with-dbot'
import AutomateTrading from './_automate-trading'
import Banner from './_banner'
import HowItWorks from './_how-it-works'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import Signup, { Appearances } from 'components/custom/signup'

class Dbot extends Component {
    render() {
        return (
            <Layout>
                <SEO title={localize('Dbot')} />
                <AutomateTrading />
                <Banner />
                <HowItWorks />
                <Tutorial />
                <TradeWithDbot />
                <OtherPlatform exclude="dbot" />
                <Signup appearance={Appearances.public}></Signup>
            </Layout>
        )
    }
}

export default WithIntl()(Dbot)
