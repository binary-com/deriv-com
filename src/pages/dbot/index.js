import React, { Component } from 'react'
import styled from 'styled-components'
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

const PlatformContainer = styled.div`
    padding: 8rem 0;
`
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
                <PlatformContainer>
                    <OtherPlatform exclude="dbot" />
                </PlatformContainer>
                <Signup appearance={Appearances.public} />
            </Layout>
        )
    }
}

export default WithIntl()(Dbot)
