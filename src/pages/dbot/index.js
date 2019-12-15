import React, { Component } from 'react'
import styled from 'styled-components'
import { Tutorial } from './_tutorial'
import DBotAnimation from './dbot-animation.json'
import { TradeWithDbot } from './_trade-with-dbot'
import HowItWorks from './_how-it-works'
import DHero from 'components/custom/_dhero.js'
import DNumber from 'components/custom/_dnumbers.js'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import dbot_logo from 'images/svg/dbot-icon.svg'
import { OtherPlatform } from 'components/custom/other-platforms.js'

const items = [
    { title: '5', subtitle: 'Pre-built strategies included' },
    { title: 'FREE', subtitle: 'zero cost to build' },
    { title: '50+', subtitle: 'markets to unleash your bot' }
]
const PlatformContainer = styled.div`
    padding: 8rem 0;
`
class Dbot extends Component {
    render() {
        return (
            <Layout>
                <SEO title={localize('DBot')} />
                <DHero
                    title={localize('DBot')}
                    content={localize('Automate your trading ideas without writing code')}
                    start_automating
                    go_to_live_demo
                    Logo={dbot_logo}
                    animation={DBotAnimation}
                />
                <DNumber items={items} justify='space-around' />
                <HowItWorks />
                <Tutorial />
                <TradeWithDbot />
                <PlatformContainer>
                    <OtherPlatform exclude="dbot" />
                </PlatformContainer>
            </Layout>
        )
    }
}

export default WithIntl()(Dbot)
