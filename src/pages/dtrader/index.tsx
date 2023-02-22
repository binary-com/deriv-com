import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Loadable from '@loadable/component'
import { OtherPlatform } from 'components/custom/other-platforms'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import dtrader_logo from 'images/svg/dtrader/dtrader-icon.svg'
import { localize, WithIntl } from 'components/localization'
import DTraderBGMobile from 'images/svg/dtrader/dtrader-bg-mobile.svg'
import DTraderBG from 'images/svg/dtrader/dtrader-bg.svg'
import BackgroundPatternTrader from 'images/common/bg_banner_trader.png'
import DHero from 'components/custom/_dhero'
import DNumber, { ItemType } from 'components/custom/_dnumbers'
import useRegion from 'components/hooks/use-region'
import { TradingType } from 'components/custom/_dtrading'

const DtraderVideo = Loadable(() => import('./_dtrader-tabs'))
const DTrading = Loadable(() => import('components/custom/_dtrading'))
const DBanner = Loadable(() => import('components/custom/_dbanner'))
const DHowItWorks = Loadable(() => import('components/custom/_dhow-it-works'))

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

const items: ItemType[] = [
    { untranslated_title: '50+', subtitle: '_t_Tradable assets and growing_t_' },
    { untranslated_title: '$0.35', subtitle: '_t_Minimum stake_t_' },
    { untranslated_title: '1s - 365d', subtitle: '_t_Flexible trade duration_t_' },
    { untranslated_title: '>200%', subtitle: '_t_Potential payout_t_' },
]

const itemsEU: ItemType[] = [
    { untranslated_title: '20+', subtitle: '_t_Tradable assets and growing_t_' },
    { untranslated_title: '$5.00', subtitle: '_t_Minimum stake_t_' },
    { untranslated_title: '1s - 365d', subtitle: '_t_Flexible trade duration_t_' },
    { untranslated_title: 'Up to x30', subtitle: '_t_Multiply potential profit_t_' },
]

const trading: TradingType[] = [
    {
        title: '_t_Make smarter trading decisions_t_',
        subtitle:
            '_t_Customise your chart with technical indicators and widgets  — everything you need to make smarter trading decisions._t_',

        image_name: 'make_smarter',
        image_alt: 'Customise your chart types',
    },
    {
        title: '_t_Trade what you want, when you want..._t_',
        subtitle:
            '_t_Forex, commodities, cryptocurrencies, and indices — whether it’s the world markets or derived markets that excite you, you’ll find them here._t_',

        image_name: 'trade_what_you_want',
        image_alt: 'Trade world or synthetic markets',
    },
    {
        title: '_t_... And how you want_t_',
        subtitle:
            '_t_Choose from a variety of customisable trade types with stakes as low as $0.35 and durations as short as a second._t_',

        image_name: 'how_you_want',
        image_alt: 'Customise your trade types',
    },
]

const trading_eu = [
    {
        title: '_t_Make smarter trading decisions_t_',
        subtitle:
            '_t_Customise your chart with technical indicators and widgets  — everything you need to make smarter trading decisions._t_',

        image_name: 'make_smarter',
        image_alt: 'Customise your chart types',
    },
    {
        title: '_t_Trade what you want, when you want..._t_',
        subtitle:
            '_t_Forex, cryptocurrencies, and indices – whether it’s the world markets or derived markets that excite you, you’ll find them here._t_',

        image_name: 'trade_what_you_want_eu',
        image_alt: 'Trade world or synthetic markets',
    },
    {
        title: '_t_... And how you want_t_',
        subtitle:
            '_t_Choose a multiplier value, fine-tune your trade with multipliers optional features (take profit, stop loss, and deal cancellation), and start trading with a stake as low as $5._t_',

        image_name: 'how_you_want_eu',
        image_alt: 'Customise your trade types',
    },
]

const PlatformContainer = styled.div`
    padding: 8rem 0;
`

const Dtrader = () => {
    const [is_mobile, setMobile] = useState(false)
    const { is_eu, is_row } = useRegion()
    const data = useStaticQuery(query)

    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }

    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        window.addEventListener('resize', handleResizeWindow)
    })

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
                title="_t_DTrader_t_"
                content="_t_Trading<0/>made simple<0/>_t_"
                content_components={[<br key={0} />]}
                join_us_for_free
                is_live_demo
                Logo={dtrader_logo}
                image_name={is_eu ? 'dtrader_eu' : 'dtrader'}
                is_mobile={is_mobile}
                background_svg={is_mobile ? DTraderBGMobile : DTraderBG}
                background_alt="Trade volatility indices with DTrader at Deriv"
            />
            {is_row && <DNumber items={items} justify="space-around" />}
            {is_eu && <DNumber items={itemsEU} justify="space-around" />}
            <DHowItWorks Video={DtraderVideo} title="_t_Make a trade in 3 easy steps_t_" />
            {is_row && <DTrading trading={trading} />}
            {is_eu && <DTrading trading={trading_eu} />}
            <PlatformContainer>
                <OtherPlatform exclude="dtrader" />
            </PlatformContainer>
            <DBanner
                background_pattern={BackgroundPatternTrader}
                title="_t_Get into the DTrader experience_t_"
                data={data}
            />
        </Layout>
    )
}

export default WithIntl()(Dtrader)
