import React, { useEffect, useState } from 'react'
import Loadable from '@loadable/component'
import DCommonBanner from './_hero'
import PageNotFound from 'features/pages/404'
import { SEO, TMetaAttributes } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import DNumber, { TDNumbersItem } from 'components/custom/_dnumbers'
import useRegion from 'components/hooks/use-region'
import { TradingType } from 'components/custom/_dtrading'
import { TGatsbyHead } from 'features/types'

const DTrading = Loadable(() => import('components/custom/_dtrading'))
const DBotEasySteps = Loadable(() => import('./_steps_section'))
const DBotGetApp = Loadable(() => import('./_get-app-section'))
const OurPlatforms = Loadable(() => import('./_our-platforms'))

const meta_attributes: TMetaAttributes = {
    og_title: '_t_DBot Trading | Auto Trading Robot | Deriv_t_',
    og_description:
        '_t_Deriv’s easy and free setup of DBot trader can automate your trading without writing codes. Create your own bot trader using our tutorials and guides!_t_',
}

const items: TDNumbersItem[] = [
    { title: '50+', subtitle: '_t_assets to unleash your bot_t_' },
    {
        title: '_t_FREE_t_',
        subtitle: '_t_zero cost to build_t_',
    },
    { title: '3', subtitle: '_t_pre-built strategies included_t_' },
]

const trading: TradingType[] = [
    {
        title: '_t_Start with a popular strategy_t_',
        subtitle:
            "_t_Martingale, D'Alembert, and Oscar's Grind — load and customise proven strategies or create your own from scratch._t_",
        image_name: 'dbot_strategy',
        image_alt: '_t_Customise your DBot strategy_t_',
    },
    {
        title: '_t_Build your strategy visually_t_',
        subtitle:
            '_t_Simply drag, drop, and configure pre-built blocks and indicators onto a canvas to build your bot. No coding needed._t_',
        image_name: 'dbot_build_strategy',
        image_alt: '_t_Build your bot using drag and drop_t_',
    },
    {
        title: '_t_Maximise profits, limit losses_t_',
        subtitle:
            '_t_Use analysis tools, indicators, and smart logic such as take profit and stop loss to maximise your profits and limit losses._t_',
        image_name: 'dbot_maximise_profits',
        image_alt: '_t_Increase your profits_t_',
    },
    {
        title: '_t_Track your performance_t_',
        subtitle:
            '_t_See how your bot is performing as it executes each trade and receive notifications via Telegram._t_',
        image_name: 'dbot_track_your_performance',
        image_alt: '_t_Check performance of your bot_t_',
    },
    {
        title: '_t_Get integrated help_t_',
        subtitle:
            '_t_Access tutorials, guides, and reference information as you build your bot._t_',
        image_name: 'dbot_get_integrated_help',
        image_alt: '_t_Guide and tutorial for DBot_t_',
    },
    {
        title: '_t_Save your strategies_t_',
        subtitle:
            '_t_Enjoy the convenience and security of storing your strategies on your Google Drive._t_',
        image_name: 'dbot_save_your_strategies',
        image_alt: '_t_Save your bots_t_',
    },
]

const Dbot = () => {
    const { is_eu, is_row } = useRegion()
    const [is_loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    if (is_loaded) {
        return (
            <>
                {is_row && (
                    <Layout>
                        <DCommonBanner join_us_for_free is_live_demo image_name="dbot" />
                        <DNumber items={items} justify="space-around" />
                        <DBotEasySteps />
                        <DTrading trading={trading} />
                        <DBotGetApp />
                        <OurPlatforms />
                    </Layout>
                )}
                {is_eu && <PageNotFound />}
            </>
        )
    }

    return <React.Fragment></React.Fragment>
}

export default WithIntl()(Dbot)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_DBot | Trading robot | Deriv_t_"
        description="_t_Automate your trading with DBot, Deriv’s trading robot which you can build without writing code._t_"
        meta_attributes={meta_attributes}
        pageContext={pageContext}
    />
)
