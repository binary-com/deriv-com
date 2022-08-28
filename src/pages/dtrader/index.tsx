import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Loadable from '@loadable/component'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import { EU, ROW } from 'components/containers/visibility'
import dtrader_logo from 'images/svg/dtrader/dtrader-icon.svg'
import { localize, WithIntl, Localize } from 'components/localization'
import DTraderBGMobile from 'images/svg/dtrader/dtrader-bg-mobile.svg'
import DTraderBG from 'images/svg/dtrader/dtrader-bg.svg'
import BackgroundPatternTrader from 'images/common/bg_banner_trader.png'
import DHero from 'components/custom/_dhero.js'
import DNumber from 'components/custom/_dnumbers.js'
import { useCountryRule } from 'components/hooks/use-country-rule'
const DtraderVideo = Loadable(() => import('./_dtrader-tabs'))
const DTrading = Loadable(() => import('components/custom/_dtrading.js'))
const DBanner = Loadable(() => import('components/custom/_dbanner.js'))
const DHowItWorks = Loadable(() => import('components/custom/_dhow-it-works.js'))

const meta_attributes = {
    og_title: localize('_t_DTrader | Online Trading Platform | Deriv.com_t_'),
    og_description: localize(
        '_t_DTrader keeps online trading simple, allowing you to trade forex, indices, commodities and synthetic indices._t_',
    ),
}

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "dtrader/dtrader-banner.png" }) {
            ...fadeIn
        }
        deriv_platform_eu: file(relativePath: { eq: "dtrader/dtrader-banner_EU.png" }) {
            ...fadeIn
        }
    }
`
const items = [
    { title: '50+', subtitle: <Localize translate_text="_t_Tradable assets and growing_t_" /> },
    { title: '$0.35', subtitle: <Localize translate_text="_t_Minimum stake_t_" /> },
    { title: '1s - 365d', subtitle: <Localize translate_text="_t_Flexible trade duration_t_" /> },
    { title: '>200%', subtitle: <Localize translate_text="_t_Potential payout_t_" /> },
]

const itemsEU = [
    { title: '20+', subtitle: <Localize translate_text="_t_Tradable assets and growing_t_" /> },
    { title: '$5.00', subtitle: <Localize translate_text="_t_Minimum stake_t_" /> },
    { title: '1s - 365d', subtitle: <Localize translate_text="_t_Flexible trade duration_t_" /> },
    { title: 'Up to x30', subtitle: <Localize translate_text="_t_Multiply potential profit_t_" /> },
]
const trading = [
    {
        title: <Localize translate_text="_t_Make smarter trading decisions_t_" />,
        subtitle: (
            <Localize translate_text="_t_Customise your chart with technical indicators and widgets  — everything you need to make smarter trading decisions._t_" />
        ),

        image_name: 'make_smarter',
        image_alt: localize('_t_Customise your chart types_t_'),
    },
    {
        title: <Localize translate_text="_t_Trade what you want, when you want..._t_" />,
        subtitle: (
            <Localize translate_text="_t_Forex, indices, commodities and synthetic indices — whether it’s the world markets or synthetic markets that excite you, you’ll find them here._t_" />
        ),

        image_name: 'trade_what_you_want',
        image_alt: localize('_t_Trade world or synthetic markets_t_'),
    },
    {
        title: <Localize translate_text="_t_... And how you want_t_" />,
        subtitle: (
            <Localize translate_text="_t_Choose from a variety of customisable trade types with stakes as low as $0.35 and durations as short as a second._t_" />
        ),

        image_name: 'how_you_want',
        image_alt: localize('_t_Customise your trade types_t_'),
    },
]

const trading_eu = [
    {
        title: <Localize translate_text="_t_Make smarter trading decisions_t_" />,
        subtitle: (
            <Localize translate_text="_t_Customise your chart with technical indicators and widgets  — everything you need to make smarter trading decisions._t_" />
        ),

        image_name: 'make_smarter',
        image_alt: localize('_t_Customise your chart types_t_'),
    },
    {
        title: <Localize translate_text="_t_Trade what you want, when you want..._t_" />,
        subtitle: (
            <Localize translate_text="_t_Synthetic indices, forex, and cryptocurrencies — whether it’s the world financial markets or synthetic markets that excite you, you’ll find them here._t_" />
        ),

        image_name: 'trade_what_you_want_eu',
        image_alt: localize('_t_Trade world or synthetic markets_t_'),
    },
    {
        title: <Localize translate_text="_t_... And how you want_t_" />,
        subtitle: (
            <Localize translate_text="_t_Choose a multiplier value, fine-tune your trade with multipliers optional features (take profit, stop loss, and deal cancellation), and start trading with a stake as low as $5._t_" />
        ),

        image_name: 'how_you_want_eu',
        image_alt: localize('_t_Customise your trade types_t_'),
    },
]
const PlatformContainer = styled.div`
    padding: 8rem 0;
`
const Dtrader = () => {
    const [is_mobile, setMobile] = useState(false)
    const { is_eu } = useCountryRule()

    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }

    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        window.addEventListener('resize', handleResizeWindow)
    })
    const data = useStaticQuery(query)
    return (
        <Layout>
            <SEO
                title={localize('_t_DTrader | Online trading platform | Deriv_t_')}
                description={localize(
                    '_t_DTrader keeps online trading simple. Trade forex, commodities, stock indices, cryptocurrencies, and Deriv’s synthetic indices._t_',
                )}
                meta_attributes={meta_attributes}
            />
            <DHero
                title={localize('_t_DTrader_t_')}
                content={
                    <Localize
                        translate_text="_t_Trading<0/>made simple<0/>_t_"
                        components={[<br key={0} />]}
                    />
                }
                join_us_for_free
                go_to_live_demo
                Logo={dtrader_logo}
                image_name={is_eu ? 'dtrader_eu' : 'dtrader'}
                is_mobile={is_mobile}
                background_svg={is_mobile ? DTraderBGMobile : DTraderBG}
                background_alt={localize('_t_Trade volatility indices with DTrader at Deriv_t_')}
            />
            <ROW>
                <DNumber items={items} justify="space-around" />
            </ROW>
            <EU>
                <DNumber items={itemsEU} justify="space-around" />
            </EU>
            <DHowItWorks
                Video={DtraderVideo}
                title={<Localize translate_text="_t_Make a trade in 3 easy steps_t_" />}
            />
            <ROW>
                <DTrading trading={trading} />
            </ROW>
            <EU>
                <DTrading trading={trading_eu} />
            </EU>
            <PlatformContainer>
                <OtherPlatform exclude="dtrader" />
            </PlatformContainer>
            <DBanner
                background_pattern={BackgroundPatternTrader}
                title={<Localize translate_text="_t_Get into the DTrader experience_t_" />}
                data={data}
            />
        </Layout>
    )
}

export default WithIntl()(Dtrader)
