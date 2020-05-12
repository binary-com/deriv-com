import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import DtraderVideo from './_dtrader-video.js'
import DTrading from 'components/custom/_dtrading.js'
import DHero from 'components/custom/_dhero.js'
import DBanner from 'components/custom/_dbanner.js'
import DHowItWorks from 'components/custom/_dhow-it-works.js'
import DNumber from 'components/custom/_dnumbers.js'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import { Show, SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import dtrader_logo from 'images/svg/dtrader-icon.svg'
import { localize, WithIntl, Localize } from 'components/localization'
import DTraderBG from 'images/svg/dtrader-bg.svg'
import BackgroundPatternTrader from 'images/common/bg_banner_trader.png'

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "dtrader-banner.png" }) {
            ...fadeIn
        }
    }
`
const items = [
    { title: '50+', subtitle: <Localize translate_text="tradable assets and growing" /> },
    { title: '$0.35', subtitle: <Localize translate_text="minimum stake" /> },
    { title: '1s - 365d', subtitle: <Localize translate_text="flexible trade duration" /> },
    { title: '>200%', subtitle: <Localize translate_text="potential payout" /> },
]
const trading = [
    {
        title: <Localize translate_text="Make smarter trading decisions" />,
        subtitle: (
            <Localize translate_text="Customise your chart with technical indicators and widgets  — everything you need to make smarter trading decisions." />
        ),

        image_name: 'make_smarter',
        image_alt: localize('Charts'),
    },
    {
        title: <Localize translate_text="Trade what you want, when you want..." />,
        subtitle: (
            <Localize translate_text="Forex, indices, commodities and synthetic indices — whether it’s the world markets or synthetic markets that excite you, you’ll find them here." />
        ),

        image_name: 'trade_what_you_want',
        image_alt: localize('Trading Market'),
    },
    {
        title: <Localize translate_text="...And how you want" />,
        subtitle: (
            <Localize translate_text="Choose from a variety of customisable trade types with stakes as low as $0.35 and durations as short as a second." />
        ),

        image_name: 'how_you_want',
        image_alt: localize('Trade Types'),
    },
]
const PlatformContainer = styled.div`
    padding: 8rem 0;
`
const Dtrader = () => {
    const data = useStaticQuery(query)
    return (
        <Layout>
            <SEO
                title={localize('DTrader | Online Trading Platform')}
                description={localize(
                    'DTrader keeps online trading simple, allowing you to trade forex, indices, commodities and synthetic indices. ',
                )}
            />
            <DHero
                title={localize('DTrader')}
                content={
                    <Localize
                        translate_text="Trading<0/>made simple<0/>"
                        components={[<br key={0} />]}
                    />
                }
                join_us_for_free
                go_to_live_demo
                Logo={dtrader_logo}
                image_name="dtrader"
                background_svg={DTraderBG}
                background_alt={localize('DTrader Board')}
            />
            <Show.Desktop>
                <DNumber items={items} justify="space-around" />
            </Show.Desktop>
            <DHowItWorks
                Video={DtraderVideo}
                title={<Localize translate_text="Make a trade in 3 easy steps" />}
            />
            <DTrading trading={trading} />
            <PlatformContainer>
                <OtherPlatform exclude="dtrader" />
            </PlatformContainer>
            <DBanner
                background_pattern={BackgroundPatternTrader}
                title={<Localize translate_text="Get into the DTrader experience" />}
                data={data}
            />
        </Layout>
    )
}

export default WithIntl()(Dtrader)
