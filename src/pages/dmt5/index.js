import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import DMT5Video from './_dmt5-video.js'
import BackgroundPatternDMT5 from 'images/common/bg_banner_dmt5.png'
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
import DBanner from 'components/custom/_dbanner.js'

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "dmt5-banner.png" }) {
            ...fadeIn
        }
    }
`
const items = [
    { title: '70+', subtitle: <Localize translate_text="tradable assets and growing" /> },
    { title: '1:1,000', subtitle: <Localize translate_text="maximum leverage" /> },
    { title: '30', subtitle: <Localize translate_text="maximum lot size" /> },
]
const PlatformContainer = styled.div`
    padding: 8rem 0;
`
const trading = [
    {
        title: <Localize translate_text="Financial" />,
        subtitle: (
            <Localize translate_text="The Financial account offers new and experienced traders high leverage and variable spreads for maximum flexibility. Trade commodities, cryptocurrencies, major (standard and micro-lots), and minor currency pairs with high leverage." />
        ),
        second_title: <Localize translate_text="Financial STP" />,
        second_subtitle: (
            <Localize translate_text="The Financial STP account is a 100% A Book account where your trades are passed straight through to the market, giving you direct access to forex liquidity providers. Trade major, minor, and exotic currency pairs with tight spreads and higher trade volumes." />
        ),
        image_name: 'dmt_5_ipad_iphone',
        image_alt: <Localize translate_text="DMT5 Platform" />,
    },
    {
        title: <Localize translate_text="Synthetic" />,
        subtitle: (
            <Localize translate_text="The Synthetic account allows you to trade contracts for difference (CFDs) on synthetic indices that mimic real-world movements. Available for trading 24/7 and audited for fairness by an independent third party." />
        ),
        second_title: <Localize translate_text="Practice with Demo accounts" />,
        second_subtitle: (
            <Localize translate_text="Create free demo accounts (Financial, Financial STP, or Synthetic) — the best way for you to check out the platform, get familiar with the tools, and learn trading techniques." />
        ),
        image_name: 'dmt_5_mac',
        image_alt: <Localize translate_text="DMT5 Demo Account" />,
    },
]

const DMT5 = () => {
    const data = useStaticQuery(query)
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
                image_name="dmt5"
                background_svg={DMT5BG}
                background_alt={localize('DMT5')}
            />
            <Show.Desktop>
                <DNumber items={items} justify="space-around" />
            </Show.Desktop>
            <DHowItWorks
                Video={DMT5Video}
                title={<Localize translate_text="Get started with DMT5 in 3 easy steps" />}
            />
            <DTrading trading={trading} reverse two_title />
            <PlatformContainer>
                <OtherPlatform exclude="dmt5" />
            </PlatformContainer>
            <DBanner
                background_pattern={BackgroundPatternDMT5}
                title={<Localize translate_text="Get into the DMT5 experience" />}
                data={data}
            />
        </Layout>
    )
}

export default WithIntl()(DMT5)
