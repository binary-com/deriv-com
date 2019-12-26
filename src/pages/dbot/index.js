import React, { Component } from 'react'
import styled from 'styled-components'
import DBotAnimation from './dbot-animation.json'
import DBotVideo from './_dbot-video.js'
import DHowItWorks from 'components/custom/_dhow-it-works.js'
import DTrading from 'components/custom/_dtrading.js'
import DHero from 'components/custom/_dhero.js'
import DNumber from 'components/custom/_dnumbers.js'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import dbot_logo from 'images/svg/dbot-icon.svg'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import DBotBG from 'images/svg/dbot-bg.svg'

const items = [
    { title: '5', subtitle: 'Pre-built strategies included' },
    { title: 'FREE', subtitle: 'zero cost to build' },
    { title: '50+', subtitle: 'markets to unleash your bot' }
]
const PlatformContainer = styled.div`
    padding: 8rem 0;
`
const trading = [
    {
        title: <Localize
            translate_text='Start with a popular<0/>strategy'
            components={[
                <br key={0} />
            ]}
        />,
        subtitle: localize(
            'Martingale, D’Alembert, Oscar’s Grid, Cuttler’s RSI, Bollinger Bands, and SMA Crossover - load and customise proven strategies or create your own from scratch.',
        ),
        image_name: 'dbot-strategy.png',
        image_alt: 'Strategy',
    },
    {
        title: <Localize
            translate_text='Build your strategy<0/>visually'
            components={[
                <br key={0} />
            ]}
        />,
        subtitle: localize(
            'Simply drag, drop, and configure pre-built blocks and indicators onto a canvas to build your bot. No coding needed.',
        ),
        image_name: 'dbot-build-strategy.png',
        image_alt: 'Build bot strategy',
    },
    {
        title: <Localize
            translate_text='Maximise profits,<0/>limit losses'
            components={[
                <br key={0} />
            ]}
        />,
        subtitle: localize(
            'Use analysis tools and indicators and include take-profit, stop-loss and other smart logic to maximise your profits, and limit losses.',
        ),
        image_name: 'dbot-maximise-profits.png',
        image_alt: 'Analysis tool',
    },
    {
        title: <Localize
            translate_text='Track your<0/>performance'
            components={[
                <br key={0} />
            ]}
        />,
        subtitle: localize(
            'See how your bot is performing as it executes each trade and receive notifications via Telegram.',
        ),
        image_name: 'dbot-track-your-performance.png',
        image_alt: 'Track performace',
    },
    {
        title: <Localize
            translate_text='Get<0/>integrated help'
            components={[
                <br key={0} />
            ]}
        />,
        subtitle: localize(
            'Access tutorials, guides, and reference information as you build your bot.',
        ),
        image_name: 'dbot-get-integrated-help.png',
        image_alt: 'Integrated help',
    },
    {
        title: <Localize
            translate_text='Save<0/>your strategies'
            components={[
                <br key={0} />
            ]}
        />,
        subtitle: localize(
            'Enjoy the convenience and security of storing your strategies on your Google Drive.',
        ),
        image_name: 'dbot-save-your-strategies.png',
        image_alt: 'Save bot strategy',
    },
]
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
                    background={DBotBG}
                />
                <DNumber items={items} justify='space-around' />
                <DHowItWorks Video={DBotVideo} title='Build a trading robot in 5 easy steps' />
                <DTrading trading={trading} />
                <PlatformContainer>
                    <OtherPlatform exclude="dbot" />
                </PlatformContainer>
            </Layout>
        )
    }
}

export default WithIntl()(Dbot)
