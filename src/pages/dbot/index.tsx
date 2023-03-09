import React, { ReactElement } from 'react'
import Loadable from '@loadable/component'
import PageNotFound from '../404'
import DCommonBanner from './_hero'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import DNumber from 'components/custom/_dnumbers'
import { MetaAttributesType } from 'types/page.types'
const DTrading = Loadable(() => import('components/custom/_dtrading'))
const DBotEasySteps = Loadable(() => import('./_steps_section'))
const DBotGetApp = Loadable(() => import('./_get-app-section'))
const OurPlatforms = Loadable(() => import('./_our-platforms'))
import useRegion from 'components/hooks/use-region'

type ItemType = {
    title: string | ReactElement
    subtitle: ReactElement
}

type TradingType = {
    title: ReactElement
    subtitle: ReactElement
    image_name: string
    image_alt: string
}

const meta_attributes: MetaAttributesType = {
    og_title: localize('DBot Trading | Auto Trading Robot | Deriv'),
    og_description: localize(
        'Deriv’s easy and free setup of DBot trader can automate your trading without writing codes. Create your own bot trader using our tutorials and guides!',
    ),
}
const items: ItemType[] = [
    { title: '50+', subtitle: <Localize translate_text="assets to unleash your bot" /> },
    {
        title: <Localize translate_text="FREE" />,
        subtitle: <Localize translate_text="zero cost to build" />,
    },
    { title: '3', subtitle: <Localize translate_text="pre-built strategies included" /> },
]
const trading: TradingType[] = [
    {
        title: <Localize translate_text="Start with a popular strategy" />,
        subtitle: (
            <Localize translate_text="Martingale, D'Alembert, and Oscar's Grind — load and customise proven strategies or create your own from scratch." />
        ),
        image_name: 'dbot_strategy',
        image_alt: localize('Customise your DBot strategy'),
    },
    {
        title: <Localize translate_text="Build your strategy visually" />,
        subtitle: (
            <Localize translate_text="Simply drag, drop, and configure pre-built blocks and indicators onto a canvas to build your bot. No coding needed." />
        ),
        image_name: 'dbot_build_strategy',
        image_alt: localize('Build your bot using drag and drop'),
    },
    {
        title: <Localize translate_text="Maximise profits, limit losses" />,
        subtitle: (
            <Localize translate_text="Use analysis tools, indicators, and smart logic such as take profit and stop loss to maximise your profits and limit losses." />
        ),
        image_name: 'dbot_maximise_profits',
        image_alt: localize('Increase your profits'),
    },
    {
        title: <Localize translate_text="Track your performance" />,
        subtitle: (
            <Localize translate_text="See how your bot is performing as it executes each trade and receive notifications via Telegram." />
        ),
        image_name: 'dbot_track_your_performance',
        image_alt: localize('Check performance of your bot'),
    },
    {
        title: <Localize translate_text="Get integrated help" />,
        subtitle: (
            <Localize translate_text="Access tutorials, guides, and reference information as you build your bot." />
        ),
        image_name: 'dbot_get_integrated_help',
        image_alt: localize('Guide and tutorial for DBot'),
    },
    {
        title: <Localize translate_text="Save your strategies" />,
        subtitle: (
            <Localize translate_text="Enjoy the convenience and security of storing your strategies on your Google Drive." />
        ),
        image_name: 'dbot_save_your_strategies',
        image_alt: localize('Save your bots'),
    },
]

const Dbot = () => {
    const { is_eu, is_row } = useRegion()
    return (
        <>
            <SEO
                title={localize('DBot | Trading robot | Deriv')}
                description={localize(
                    'Automate your trading with DBot, Deriv’s trading robot which you can build without writing code.',
                )}
                meta_attributes={meta_attributes}
            />
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

export default WithIntl()(Dbot)
