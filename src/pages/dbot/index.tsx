import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Loadable from '@loadable/component'
import PageNotFound from '../404'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import dbot_logo from 'images/svg/dbot/dbot-icon.svg'
import DBotBG from 'images/svg/dbot/dbot-bg.svg'
import DBotBGMobile from 'images/svg/dbot/dbot-bg-mobile.svg'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import BackgroundPatternDBot from 'images/common/bg_banner_signup.png'
import DHero from 'components/custom/_dhero'
import DNumber, { ItemType } from 'components/custom/_dnumbers'
import { MetaAttributesType } from 'types/page.types'
import useRegion from 'components/hooks/use-region'
import { TradingType } from 'components/custom/_dtrading'

const DBotVideo = Loadable(() => import('./_dbot-video'))
const DHowItWorks = Loadable(() => import('components/custom/_dhow-it-works'))
const DTrading = Loadable(() => import('components/custom/_dtrading'))
const DBanner = Loadable(() => import('components/custom/_dbanner'))
const OtherPlatform = Loadable(() => import('components/custom/other-platforms'))

const meta_attributes: MetaAttributesType = {
    og_title: localize('_t_DBot Trading | Auto Trading Robot | Deriv_t_'),
    og_description: localize(
        '_t_Deriv’s easy and free setup of DBot trader can automate your trading without writing codes. Create your own bot trader using our tutorials and guides!_t_',
    ),
}

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "dbot/dbot-banner.png" }) {
            ...fadeIn
        }
    }
`

const items: ItemType[] = [
    { untranslated_title: '3', subtitle: '_t_pre-built strategies included_t_' },
    {
        title: '_t_FREE_t_',
        subtitle: '_t_zero cost to build_t_',
    },
    { untranslated_title: '50+', subtitle: '_t_assets to unleash your bot_t_' },
]

const PlatformContainer = styled.div`
    padding: 8rem 0;
`

const trading: TradingType[] = [
    {
        title: '_t_Start with a popular strategy_t_',
        subtitle:
            "_t_Martingale, D'Alembert, Oscar's Grind, Cutler's RSI, Bollinger Bands, and SMA Crossover — load and customise proven strategies or create your own from scratch._t_",
        image_name: 'dbot_strategy',
        image_alt: 'Customise your DBot strategy',
    },
    {
        title: '_t_Build your strategy visually_t_',
        subtitle:
            '_t_Simply drag, drop, and configure pre-built blocks and indicators onto a canvas to build your bot. No coding needed._t_',
        image_name: 'dbot_build_strategy',
        image_alt: 'Build your bot using drag and drop',
    },
    {
        title: '_t_Maximise profits, limit losses_t_',
        subtitle:
            '_t_Use analysis tools, indicators, and smart logic such as take-profit and stop-loss to maximise your profits and limit losses._t_',
        image_name: 'dbot_maximise_profits',
        image_alt: 'Increase your profits',
    },
    {
        title: '_t_Track your performance_t_',
        subtitle:
            '_t_See how your bot is performing as it executes each trade and receive notifications via Telegram._t_',
        image_name: 'dbot_track_your_performance',
        image_alt: 'Check performance of your bot',
    },
    {
        title: '_t_Get integrated help_t_',
        subtitle:
            '_t_Access tutorials, guides, and reference information as you build your bot._t_',
        image_name: 'dbot_get_integrated_help',
        image_alt: 'Guide and tutorial for DBot',
    },
    {
        title: '_t_Save your strategies_t_',
        subtitle:
            '_t_Enjoy the convenience and security of storing your strategies on your Google Drive._t_',
        image_name: 'dbot_save_your_strategies',
        image_alt: 'Save your bots',
    },
]

const Dbot = () => {
    const { is_eu, is_row } = useRegion()
    const [is_mobile, setIsMobile] = useState(
        isBrowser() ? window.screen.width <= size.mobileL : false,
    )

    const handleResizeWindow = useCallback(() => {
        setIsMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow)
        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [handleResizeWindow])

    return (
        <>
            <SEO
                title={localize('_t_DBot | Trading robot | Deriv_t_')}
                description={localize(
                    '_t_Automate your trading with DBot, Deriv’s trading robot which you can build without writing code._t_',
                )}
                meta_attributes={meta_attributes}
            />
            {is_row && (
                <Layout>
                    <DHero
                        title="_t_DBot_t_"
                        content="_t_Automate your trading ideas without writing code_t_"
                        join_us_for_free
                        is_live_demo
                        Logo={dbot_logo}
                        background_svg={is_mobile ? DBotBGMobile : DBotBG}
                        image_name="dbot"
                        is_mobile={is_mobile}
                        background_alt="Automate trade with DBot at Deriv"
                    />
                    <DNumber items={items} justify="space-around" />
                    <DHowItWorks
                        Video={DBotVideo}
                        title="_t_Build a trading robot in 5 easy steps_t_"
                    />
                    <DTrading trading={trading} />
                    <PlatformContainer>
                        <OtherPlatform exclude="dbot" />
                    </PlatformContainer>
                    <StaticQuery
                        query={query}
                        render={(data) => (
                            <DBanner
                                title="_t_Get into the DBot experience_t_"
                                data={data}
                                background_pattern={BackgroundPatternDBot}
                                image_alt="Start trading with DBot at Deriv"
                            />
                        )}
                    />
                </Layout>
            )}
            {is_eu && <PageNotFound />}
        </>
    )
}

export default WithIntl()(Dbot)
