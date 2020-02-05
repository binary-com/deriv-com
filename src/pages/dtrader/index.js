import React from 'react'
import styled from 'styled-components'
import DtraderVideo from './_dtrader-video.js'
import DTrading from 'components/custom/_dtrading.js'
import DHero from 'components/custom/_dhero.js'
import DHowItWorks from 'components/custom/_dhow-it-works.js'
import DNumber from 'components/custom/_dnumbers.js'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import { Show, SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import dtrader_logo from 'images/svg/dtrader-icon.svg'
import { localize, WithIntl, Localize } from 'components/localization'
import DTraderBG from 'images/svg/dtrader-bg.svg'
import Signup, { Appearances } from 'components/custom/signup'

const items = [
    { title: '50+', subtitle: localize('tradable assets and growing') },
    { title: '$0.35', subtitle: localize('minimum stake') },
    { title: '1s - 365d', subtitle: localize('flexible trade duration') },
    { title: '>200%', subtitle: localize('potential payout') },
]
const trading = [
    {
        title: (
            <Localize
                translate_text="Make smarter<0/>trading decisions"
                components={[<br key={0} />]}
            />
        ),
        subtitle: (
            <Localize
                translate_text="Customise your chart with technical indicators and widgets - everything you<0/>need to make smarter trading decisions."
                components={[<br key={0} />]}
            />
        ),
        image_name: 'make-smarter.png',
        image_alt: localize('Make smarter'),
    },
    {
        title: (
            <Localize
                translate_text="Trade what you want,<0/>when you want..."
                components={[<br key={0} />]}
            />
        ),
        subtitle: localize(
            'Forex, indices, commodities and Synthetic indices — whether it’s the world markets or synthetic markets that excite you, you’ll find them here.',
        ),
        image_name: 'trade-what-you-want.png',
        image_alt: localize('Trade what you want'),
    },
    {
        title: <Localize translate_text="...And<0/>how you want" components={[<br key={0} />]} />,
        subtitle: localize(
            'Choose from a variety of customisable trade types with stakes as low as $0.35 and durations as short as a second.',
        ),
        image_name: 'how-you-want.png',
        image_alt: localize('How you want'),
    },
]
const PlatformContainer = styled.div`
    padding: 8rem 0;
`
const Dtrader = () => {
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
                background_image_name="dtrader-artboard.png"
                background_svg={DTraderBG}
            />
            <Show.Desktop>
                <DNumber items={items} justify="space-around" />
            </Show.Desktop>
            <DHowItWorks Video={DtraderVideo} title="Make a trade in 3 easy steps" />
            <DTrading trading={trading} />
            <PlatformContainer>
                <OtherPlatform exclude="dtrader" />
            </PlatformContainer>
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(Dtrader)
