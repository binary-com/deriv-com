import React from 'react'
import styled from 'styled-components'
import DMT5Video from './_dmt5-video.js'
import DMT5Animation from 'images/lotties/dmt5-animation.json'
import DHowItWorks from 'components/custom/_dhow-it-works.js'
import DTrading from 'components/custom/_dtrading.js'
import DHero from 'components/custom/_dhero.js'
import DNumber from 'components/custom/_dnumbers.js'
import Layout from 'components/layout/layout'
import dmt5_logo from 'images/svg/dmt5-icon.svg'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import { SEO, Show } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import DMT5BG from 'images/svg/dmt5-bg.svg'
import Signup, { Appearances } from 'components/custom/signup'

const items = [
    { title: '70+', subtitle: localize('tradable assets and growing') },
    { title: '1:1,000', subtitle: localize('maximum leverage') },
    { title: '30', subtitle: localize('maximum lot size') },
]
const PlatformContainer = styled.div`
    padding: 8rem 0;
`
const trading = [
    {
        title: localize('DMT5 Standard account'),
        subtitle: localize(
            'The Standard account offers new and experienced traders high leverage and variable spreads for maximum flexibility. Trade commodities, cryptocurrencies, major (standard and micro-lots), and minor currency pairs with high leverage.',
        ),
        second_title: localize('DMT5 Advanced account'),
        second_subtitle: localize(
            'The Advanced account is a 100% A Book account where your trades are passed straight through to the market, giving you direct access to forex liquidity providers. Trade major, minor, and exotic currency pairs with tight spreads and higher trade volumes.',
        ),
        image_name: 'dmt-5-ipad-iphone.png',
        image_alt: localize('DMT5 mac'),
    },
    {
        title: localize('DMT5 Synthetic Indices account'),
        subtitle: localize(
            'The Synthetic Indices account allows you to trade contracts for difference (CFDs) on synthetic indices that mimic real-world movements. Available for trading 24/7 and audited for fairness by an independent third party.',
        ),
        second_title: localize('Practice with Demo accounts'),
        second_subtitle: localize(
            'Create demo accounts (DMT5 Standard, DMT5 Advanced, or DMT5 Synthetic Indices) — the best way for you to check out the platform, get familiar with the tools, and learn trading techniques.',
        ),
        image_name: 'dmt-5-mac.png',
        image_alt: localize('DMT5 ipad iphone'),
    },
]

const DMT5 = () => {
    return (
        <Layout>
            <SEO
                description={localize(
                    'DMT5 is developed to give you the best CFD trading experience. You can access our MT5 trader through desktop and even mobile.',
                )}
                title={localize('DMT5 | MetaTrader 5')}
            />
            <DHero
                title={localize('DMT5')}
                content={
                    <Localize
                        translate_text="The all-in-one FX<0/>and CFD trading<0/>platform"
                        components={[<br key={0} />]}
                    />
                }
                join_us_for_free
                Logo={dmt5_logo}
                animation={DMT5Animation}
                background_image_name="dmt5-platform.png"
                background_svg={DMT5BG}
            />
            <Show.Desktop>
                <DNumber items={items} justify="space-around" />
            </Show.Desktop>
            <DHowItWorks Video={DMT5Video} title="Get started with DMT5 in 3 easy steps" />
            <DTrading trading={trading} reverse two_title />
            <PlatformContainer>
                <OtherPlatform exclude="dmt5" />
            </PlatformContainer>
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(DMT5)
