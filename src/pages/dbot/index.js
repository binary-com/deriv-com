import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import DBotVideo from './_dbot-video.js'
import DHowItWorks from 'components/custom/_dhow-it-works.js'
import DTrading from 'components/custom/_dtrading.js'
import DHero from 'components/custom/_dhero.js'
import DBanner from 'components/custom/_dbanner.js'
import DNumber from 'components/custom/_dnumbers.js'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import dbot_logo from 'images/svg/dbot-icon.svg'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import DBotBG from 'images/svg/dbot-bg.svg'
import DBotBGMobile from 'images/svg/dbot-bg-mobile.svg'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import BackgroundPatternDBot from 'images/common/bg_banner_dbot.png'

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "dbot-banner.png" }) {
            ...fadeIn
        }
    }
`
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
        title: <Localize translate_text="Start with a popular strategy" />,
        subtitle: (
            <Localize translate_text="Martingale, D'Alembert, Oscar's Grind, Cutler's RSI, Bollinger Bands, and SMA Crossover — load and customise proven strategies or create your own from scratch." />
        ),
        image_name: 'dbot_strategy',
        image_alt: <Localize translate_text="Strategy" />,
    },
    {
        title: <Localize translate_text="Build your strategy visually" />,
        subtitle: (
            <Localize translate_text="Simply drag, drop, and configure pre-built blocks and indicators onto a canvas to build your bot. No coding needed." />
        ),
        image_name: 'dbot_build_strategy',
        image_alt: <Localize translate_text="Create your Strategy" />,
    },
    {
        title: <Localize translate_text="Maximise profits, limit losses" />,
        subtitle: (
            <Localize translate_text="Use analysis tools, indicators, and smart logic such as take-profit and stop-loss to maximise your profits and limit losses." />
        ),
        image_name: 'dbot_maximise_profits',
        image_alt: <Localize translate_text="Tools" />,
    },
    {
        title: <Localize translate_text="Track your performance" />,
        subtitle: (
            <Localize translate_text="See how your bot is performing as it executes each trade and receive notifications via Telegram." />
        ),
        image_name: 'dbot_track_your_performance',
        image_alt: <Localize translate_text="Performance Tracking" />,
    },
    {
        title: <Localize translate_text="Get integrated help" />,
        subtitle: (
            <Localize translate_text="Access tutorials, guides, and reference information as you build your bot." />
        ),
        image_name: 'dbot_get_integrated_help',
        image_alt: <Localize translate_text="Tutorials" />,
    },
    {
        title: <Localize translate_text="Save your strategies" />,
        subtitle: (
            <Localize translate_text="Enjoy the convenience and security of storing your strategies on your Google Drive." />
        ),
        image_name: 'dbot_save_your_strategies',
        image_alt: <Localize translate_text="Save Strategies" />,
    },
]
class Dbot extends Component {
    state = { is_mobile: false }

    handleResizeWindow = () => {
        this.setState({
            is_mobile: isBrowser() ? window.screen.width <= size.mobileL : false,
        })
    }
    componentDidMount() {
        this.setState({
            is_mobile: isBrowser() ? window.screen.width <= size.mobileL : false,
        })
        window.addEventListener('resize', this.handleResizeWindow)
    }
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
                    background_svg={this.state.is_mobile ? DBotBGMobile : DBotBG}
                    image_name="dbot"
                    is_mobile={this.state.is_mobile}
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
                <StaticQuery
                    query={query}
                    render={(data) => (
                        <DBanner
                            title={<Localize translate_text="Get into the DBot experience" />}
                            data={data}
                            background_pattern={BackgroundPatternDBot}
                        />
                    )}
                />
            </Layout>
        )
    }
}

export default WithIntl()(Dbot)
