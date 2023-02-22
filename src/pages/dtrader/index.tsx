import React, { useEffect, useState } from 'react'
import Loadable from '@loadable/component'
import DtraderEasySteps from './_steps_section'
import DtraderGetApps from './_get-app-section'
import OurPlatforms from './_our-platforms'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import { localize, WithIntl, Localize } from 'components/localization'
import DHero from 'components/custom/_dhero'
import DNumber from 'components/custom/_dnumbers'
import useRegion from 'components/hooks/use-region'
const DTrading = Loadable(() => import('components/custom/_dtrading'))

const meta_attributes = {
    og_title: localize('DTrader | Online Trading Platform | Deriv.com'),
    og_description: localize(
        'DTrader keeps online trading simple, allowing you to trade forex, indices, commodities and synthetic indices.',
    ),
}

const items = [
    { title: '50+', subtitle: <Localize translate_text="Tradable assets and growing" /> },
    { title: '$0.35', subtitle: <Localize translate_text="Minimum stake" /> },
    { title: '1s - 365d', subtitle: <Localize translate_text="Flexible trade duration" /> },
    { title: '>200%', subtitle: <Localize translate_text="Potential payout" /> },
]

const itemsEU = [
    { title: '20+', subtitle: <Localize translate_text="Tradable assets and growing" /> },
    { title: '$5.00', subtitle: <Localize translate_text="Minimum stake" /> },
    { title: '1s - 365d', subtitle: <Localize translate_text="Flexible trade duration" /> },
    { title: 'Up to x30', subtitle: <Localize translate_text="Multiply potential profit" /> },
]
const trading = [
    {
        title: <Localize translate_text="Make smarter trading decisions" />,
        subtitle: (
            <Localize translate_text="Customise your chart with technical indicators and widgets  — everything you need to make smarter trading decisions." />
        ),

        image_name: 'make_smarter',
        image_alt: localize('Customise your chart types'),
    },
    {
        title: <Localize translate_text="Trade what you want, when you want..." />,
        subtitle: (
            <Localize translate_text="Forex, commodities, cryptocurrencies, and indices — whether it’s the world markets or derived markets that excite you, you’ll find them here." />
        ),

        image_name: 'trade_what_you_want',
        image_alt: localize('Trade world or synthetic markets'),
    },
    {
        title: <Localize translate_text="... And how you want" />,
        subtitle: (
            <Localize translate_text="Choose from a variety of customisable trade types with stakes as low as $0.35 and durations as short as a second." />
        ),

        image_name: 'how_you_want',
        image_alt: localize('Customise your trade types'),
    },
]

const trading_eu = [
    {
        title: <Localize translate_text="Make smarter trading decisions" />,
        subtitle: (
            <Localize translate_text="Customise your chart with technical indicators and widgets  — everything you need to make smarter trading decisions." />
        ),

        image_name: 'make_smarter',
        image_alt: localize('Customise your chart types'),
    },
    {
        title: <Localize translate_text="Trade what you want, when you want..." />,
        subtitle: (
            <Localize translate_text="Forex, cryptocurrencies, and synthetics – whether it’s the world markets or derived markets that excite you, you’ll find them here." />
        ),

        image_name: 'trade_what_you_want_eu',
        image_alt: localize('Trade world or synthetic markets'),
    },
    {
        title: <Localize translate_text="... And how you want" />,
        subtitle: (
            <Localize translate_text="Choose a multiplier value, fine-tune your trade with multipliers optional features (take profit, stop loss, and deal cancellation), and start trading with a stake as low as $5." />
        ),

        image_name: 'how_you_want_eu',
        image_alt: localize('Customise your trade types'),
    },
]
const Dtrader = () => {
    const [is_mobile, setMobile] = useState(false)
    const { is_eu, is_row } = useRegion()

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
                title={localize('DTrader | Online trading platform | Deriv')}
                description={localize(
                    'DTrader keeps online trading simple. Trade forex, commodities, stock indices, cryptocurrencies, and Deriv’s synthetic indices.',
                )}
                meta_attributes={meta_attributes}
            />
            <DHero
                join_us_for_free
                is_live_demo
                image_name={is_eu ? 'dtrader_eu' : 'dtrader'}
                background_alt={localize('Trade volatility indices with DTrader at Deriv')}
            />
            {is_row && <DNumber items={items} justify="space-around" />}
            {is_eu && <DNumber items={itemsEU} justify="space-around" />}

            <DtraderEasySteps />
            {is_row && <DTrading trading={trading} />}
            {is_eu && <DTrading trading={trading_eu} />}

            <DtraderGetApps />
            {is_row && <OurPlatforms />}
        </Layout>
    )
}

export default WithIntl()(Dtrader)
