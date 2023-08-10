import React, { useEffect, useState } from 'react'
import Loadable from '@loadable/component'
import DtraderEasySteps from './_steps_section'
import DtraderGetApps from './_get-app-section'
import OurPlatforms from './_our-platforms'
import { SEO, TMetaAttributes } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import DHero from 'components/custom/_dhero'
import DNumber, { TDNumbersItem } from 'components/custom/_dnumbers'
import useRegion from 'components/hooks/use-region'
import { TradingType } from 'components/custom/_dtrading'
import { TGatsbyHead } from 'features/types'

const DTrading = Loadable(() => import('components/custom/_dtrading'))

const meta_attributes: TMetaAttributes = {
    og_title: '_t_DTrader | Online Trading Platform | Deriv.com_t_',
    og_description:
        '_t_DTrader keeps online trading simple, allowing you to trade forex, indices, commodities and synthetic indices._t_',
}

const items: TDNumbersItem[] = [
    { title: '50+', subtitle: '_t_Tradable assets and growing_t_' },
    { title: '$0.35', subtitle: '_t_Minimum stake_t_' },
    { title: '1s - 365d', subtitle: '_t_Flexible trade duration_t_' },
    { title: '>200%', subtitle: '_t_Potential payout_t_' },
]

const itemsEU: TDNumbersItem[] = [
    { title: '20+', subtitle: '_t_Tradable assets and growing_t_' },
    { title: '$5.00', subtitle: '_t_Minimum stake_t_' },
    { title: '1s - 365d', subtitle: '_t_Flexible trade duration_t_' },
    { title: 'Up to x30', subtitle: '_t_Multiply potential profit_t_' },
]

const trading: TradingType[] = [
    {
        title: '_t_Make smarter trading decisions_t_',
        subtitle:
            '_t_Customise your chart with technical indicators and widgets  — everything you need to make smarter trading decisions._t_',
        image_name: 'make_smarter',
        image_alt: '_t_Customise your chart types_t_',
    },
    {
        title: '_t_Trade what you want, when you want..._t_',
        subtitle:
            '_t_Forex, commodities, cryptocurrencies, and indices — whether it’s the world markets or derived markets that excite you, you’ll find them here._t_',
        image_name: 'trade_what_you_want',
        image_alt: '_t_Trade world or synthetic markets_t_',
    },
    {
        title: '_t_... And how you want_t_',
        subtitle:
            '_t_Choose from a variety of customisable trade types with stakes as low as $0.35 and durations as short as a second._t_',
        image_name: 'how_you_want',
        image_alt: '_t_Customise your trade types_t_',
    },
]

const trading_eu: TradingType[] = [
    {
        title: '_t_Make smarter trading decisions_t_',
        subtitle:
            '_t_Customise your chart with technical indicators and widgets  — everything you need to make smarter trading decisions._t_',
        image_name: 'make_smarter',
        image_alt: '_t_Customise your chart types_t_',
    },
    {
        title: '_t_Trade what you want, when you want..._t_',
        subtitle:
            '_t_Forex, cryptocurrencies, and synthetics – whether it’s the world markets or derived markets that excite you, you’ll find them here._t_',
        image_name: 'trade_what_you_want_eu',
        image_alt: '_t_Trade world or synthetic markets_t_',
    },
    {
        title: '_t_... And how you want_t_',
        subtitle:
            '_t_Choose a multiplier value, fine-tune your trade with multipliers optional features (take profit, stop loss, and deal cancellation), and start trading with a stake as low as $5._t_',
        image_name: 'how_you_want_eu',
        image_alt: '_t_Customise your trade types_t_',
    },
]

const Dtrader = () => {
    const { is_eu, is_row } = useRegion()
    const [is_loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    if (is_loaded) {
        return (
            <Layout>
                <DHero
                    join_us_for_free
                    is_live_demo
                    image_name={is_eu ? 'dtrader_eu' : 'dtrader'}
                />
                {is_row && <DNumber items={items} justify="space-around" />}
                {is_eu && <DNumber items={itemsEU} justify="space-around" />}

                <DtraderEasySteps />
                {is_row && <DTrading trading={trading} spacing={1} />}
                {is_eu && <DTrading trading={trading_eu} spacing={1} />}

                <DtraderGetApps />
                {is_row && <OurPlatforms />}
            </Layout>
        )
    }

    return <React.Fragment></React.Fragment>
}

export default WithIntl()(Dtrader)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_DTrader | Online trading platform | Deriv_t_"
        description="_t_DTrader keeps online trading simple. Trade forex, commodities, stock indices, cryptocurrencies, and Deriv’s synthetic indices._t_"
        meta_attributes={meta_attributes}
        pageContext={pageContext}
    />
)
