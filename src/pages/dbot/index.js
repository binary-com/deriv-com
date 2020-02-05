import React, { Component } from 'react'
import styled from 'styled-components'
import DBotVideo from './_dbot-video.js'
import DBotAnimation from 'images/lotties/dbot-animation.json'
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
import Signup, { Appearances } from 'components/custom/signup'

const items = [
    { title: '3', subtitle: localize('pre-built strategies included') },
    { title: 'FREE', subtitle: localize('zero cost to build') },
    { title: '50+', subtitle: localize('assets to unleash your bot') },
]
const PlatformContainer = styled.div`
    padding: 8rem 0;
`
const trading = [
    {
        title: (
            <Localize
                translate_text="Start with a popular<0/>strategy"
                components={[<br key={0} />]}
            />
        ),
        subtitle: localize(
            "Martingale, D'Alembert, Oscar's Grind, Cutler's RSI, Bollinger Bands, and SMA Crossover — load and customise proven strategies or create your own from scratch.",
        ),
        image_name: 'dbot-strategy.png',
        image_alt: localize('Strategy'),
    },
    {
        title: (
            <Localize
                translate_text="Build your strategy<0/>visually"
                components={[<br key={0} />]}
            />
        ),
        subtitle: localize(
            'Simply drag, drop, and configure pre-built blocks and indicators onto a canvas to build your bot. No coding needed.',
        ),
        image_name: 'dbot-build-strategy.png',
        image_alt: localize('Build bot strategy'),
    },
    {
        title: (
            <Localize
                translate_text="Maximise profits,<0/>limit losses"
                components={[<br key={0} />]}
            />
        ),
        subtitle: localize(
            'Use analysis tools, indicators, and smart logic such as take-profit and stop-loss to maximise your profits and limit losses.',
        ),
        image_name: 'dbot-maximise-profits.png',
        image_alt: localize('Analysis tool'),
    },
    {
        title: (
            <Localize translate_text="Track your<0/>performance" components={[<br key={0} />]} />
        ),
        subtitle: localize(
            'See how your bot is performing as it executes each trade and receive notifications via Telegram.',
        ),
        image_name: 'dbot-track-your-performance.png',
        image_alt: localize('Track performace'),
    },
    {
        title: <Localize translate_text="Get<0/>integrated help" components={[<br key={0} />]} />,
        subtitle: localize(
            'Access tutorials, guides, and reference information as you build your bot.',
        ),
        image_name: 'dbot-get-integrated-help.png',
        image_alt: localize('Integrated help'),
    },
    {
        title: <Localize translate_text="Save<0/>your strategies" components={[<br key={0} />]} />,
        subtitle: localize(
            'Enjoy the convenience and security of storing your strategies on your Google Drive.',
        ),
        image_name: 'dbot-save-your-strategies.png',
        image_alt: localize('Save bot strategy'),
    },
]
class Dbot extends Component {
    render() {
        return (
            <Layout>
                <SEO
                    description={localize(
                        'Deriv’s easy and free setup of DBot trader can automate your trading without writing codes. Create your own bot trader using our tutorials and guides!',
                    )}
                    title={localize('DBot Trading | Auto Trading Robot')}
                />
                <DHero
                    title={localize('DBot')}
                    content={localize('Automate your trading ideas without writing code')}
                    start_automating
                    go_to_live_demo
                    Logo={dbot_logo}
                    animation={DBotAnimation}
                    background_image_name="dbot-artboard.png"
                    background_svg={DBotBG}
                />
                <DNumber items={items} justify="space-around" />
                <DHowItWorks Video={DBotVideo} title="Build a trading robot in 5 easy steps" />
                <DTrading trading={trading} />
                <PlatformContainer>
                    <OtherPlatform exclude="dbot" />
                </PlatformContainer>
                <Signup appearance={Appearances.public} />
            </Layout>
        )
    }
}

export default WithIntl()(Dbot)
