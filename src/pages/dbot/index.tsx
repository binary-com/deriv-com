import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Loadable from '@loadable/component'
import PageNotFound from '../404'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import dbot_logo from 'images/svg/dbot/dbot-icon.svg'
import DBotBG from 'images/svg/dbot/dbot-bg.svg'
import DBotBGMobile from 'images/svg/dbot/dbot-bg-mobile.svg'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import BackgroundPatternDBot from 'images/common/bg_banner_signup.png'
import DHero from 'components/custom/_dhero'
import DNumber from 'components/custom/_dnumbers'
import { MetaAttributesType } from 'types/page.types'
const DBotVideo = Loadable(() => import('./_dbot-video'))
const DHowItWorks = Loadable(() => import('components/custom/_dhow-it-works'))
const DTrading = Loadable(() => import('components/custom/_dtrading'))
const DBanner = Loadable(() => import('components/custom/_dbanner'))
const OtherPlatform = Loadable(() => import('components/custom/other-platforms'))
import { useCountryRule } from 'components/hooks/use-country-rule'

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

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "dbot/dbot-banner.png" }) {
            ...fadeIn
        }
    }
`
const items: ItemType[] = [
    { title: '3', subtitle: <Localize translate_text="pre-built strategies included" /> },
    {
        title: <Localize translate_text="FREE" />,
        subtitle: <Localize translate_text="zero cost to build" />,
    },
    { title: '50+', subtitle: <Localize translate_text="assets to unleash your bot" /> },
]
const PlatformContainer = styled.div`
    padding: 8rem 0;
`
const trading: TradingType[] = [
    {
        title: <Localize translate_text="Start with a popular strategy" />,
        subtitle: (
            <Localize translate_text="Martingale, D'Alembert, Oscar's Grind, Cutler's RSI, Bollinger Bands, and SMA Crossover — load and customise proven strategies or create your own from scratch." />
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
            <Localize translate_text="Use analysis tools, indicators, and smart logic such as take-profit and stop-loss to maximise your profits and limit losses." />
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
    const { is_uk_eu, is_row } = useCountryRule()
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
                title={localize('DBot | Trading robot | Deriv')}
                description={localize(
                    'Automate your trading with DBot, Deriv’s trading robot which you can build without writing code.',
                )}
                meta_attributes={meta_attributes}
            />
            {is_row && (
                <Layout>
                    <DHero
                        title={localize('DBot')}
                        content={localize('Automate your trading ideas without writing code')}
                        join_us_for_free
                        go_to_live_demo
                        Logo={dbot_logo}
                        background_svg={is_mobile ? DBotBGMobile : DBotBG}
                        image_name="dbot"
                        is_mobile={is_mobile}
                        background_alt={localize('Automate trade with DBot at Deriv')}
                    />
                    <DNumber items={items} justify="space-around" />
                    <DHowItWorks
                        Video={DBotVideo}
                        title={<Localize translate_text="Build a trading robot in 5 easy steps" />}
                    />
                    <DTrading trading={trading} />
                    <PlatformContainer>
                        <OtherPlatform exclude="dbot" />
                    </PlatformContainer>
                    <StaticQuery
                        query={query}
                        render={(data) => (
                            <DBanner
                                title={<Localize translate_text="Get into the DBot experience" />}
                                data={data}
                                background_pattern={BackgroundPatternDBot}
                                image_alt="Start trading with DBot at Deriv"
                            />
                        )}
                    />
                </Layout>
            )}
            {is_uk_eu && <PageNotFound />}
        </>
    )
}

export default WithIntl()(Dbot)
