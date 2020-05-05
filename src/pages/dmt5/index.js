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
        title: localize('DMT5 Standard account'),
        subtitle: localize(
            'Get started easily with a DMT5 Standard account for high leverage on your forex trades.',
        ),
        second_title: localize('DMT5 Advanced account'),
        second_subtitle: localize(
            'Get your trades placed straight through to the market with a DMT5 Advanced account — a 100% A-Book account with tight spreads.',
        ),
        image_name: 'dmt_5_ipad_iphone',
        image_alt: localize('DMT5 Platform'),
    },
    {
        title: localize('DMT5 Synthetic Indices account'),
        subtitle: localize(
            'Trade 24/7 with a DMT5 Synthetic Indices account. Trade indices that simulate the movements of real markets.',
        ),
        second_title: localize('Practise with Demo accounts'),
        second_subtitle: localize(
            'Create demo accounts (DMT5 Standard, DMT5 Advanced, or DMT5 Synthetic Indices) — the best way for you to check out the platform, get familiar with the tools, and learn trading techniques.',
        ),
        image_name: 'dmt_5_mac',
        image_alt: localize('DMT5 Demo Account'),
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
