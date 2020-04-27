import React, { Component } from 'react'
import styled from 'styled-components'
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
import Signup, { Appearances } from 'components/custom/signup'

const items = [
    { title: '3', subtitle: <Localize translate_text="pre-built strategies included" /> },
    {
        title: <Localize translate_text="FREE" />,
        subtitle: <Localize translate_text="zero cost to build" />,
    },
    { title: '50+', subtitle: <Localize translate_text="assets to unleash your bot" /> },
]
const PlatformContainer = styled.div`
    padding: 8rem 0;
`
const trading = [
    {
        title: localize('Start with a popular strategy'),
        subtitle: localize(
            "Martingale, D'Alembert, Oscar's Grind, Cutler's RSI, Bollinger Bands, and SMA Crossover — load and customise proven strategies or create your own from scratch.",
        ),
        image_name: 'dbot_strategy',
        image_alt: localize('Strategy'),
    },
    {
        title: localize('Build your strategy visually'),
        subtitle: localize(
            'Simply drag, drop, and configure pre-built blocks and indicators onto a canvas to build your bot. No coding needed.',
        ),
        image_name: 'dbot_build_strategy',
        image_alt: localize('Create your Strategy '),
    },
    {
        title: localize('Maximise profits, limit losses'),
        subtitle: localize(
            'Use analysis tools, indicators, and smart logic such as take-profit and stop-loss to maximise your profits and limit losses.',
        ),
        image_name: 'dbot_maximise_profits',
        image_alt: localize('Tools'),
    },
    {
        title: localize('Track your performance'),
        subtitle: localize(
            'See how your bot is performing as it executes each trade and receive notifications via Telegram.',
        ),
        image_name: 'dbot_track_your_performance',
        image_alt: localize('Performance Tracking'),
    },
    {
        title: localize('Get integrated help'),
        subtitle: localize(
            'Access tutorials, guides, and reference information as you build your bot.',
        ),
        image_name: 'dbot_get_integrated_help',
        image_alt: localize('Tutorials'),
    },
    {
        title: localize('Save your strategies'),
        subtitle: localize(
            'Enjoy the convenience and security of storing your strategies on your Google Drive.',
        ),
        image_name: 'dbot_save_your_strategies',
        image_alt: localize('Save Strategies'),
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
                    join_us_for_free
                    go_to_live_demo
                    Logo={dbot_logo}
                    background_svg={DBotBG}
                    image_name="dbot"
                    background_alt={localize('DBot Board')}
                />
                <DNumber items={items} justify="space-around" />
                <DHowItWorks
                    Video={DBotVideo}
                    title={<Localize translate_text="Build a trading robot in 5 easy steps" />}
                />
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
