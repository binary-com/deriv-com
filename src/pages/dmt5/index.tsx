import React, { useState, useEffect, useMemo } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    WhyTrader,
    StartTrader,
    DownloadApp,
    Flexibility,
    DBanner,
    MarginCalculator,
    SwapFreeTrading,
} from './_lazy-load'
import Numbers from './_numbers'
import WhatIsTrader from './_what-is-trader'
import DHero from 'components/custom/_dhero-dmt5'
import BackgroundPatternDMT5 from 'images/svg/dmt5/bg_banner_dmt5.svg'
import BackgroundPatternDMT5_mobile from 'images/svg/dmt5/bg_banner_dmt5_mobile.svg'
import Layout from 'components/layout/layout'
import dmt5_logo from 'images/svg/dmt5/dmt5-icon.svg'
import { SEO, Desktop, Mobile } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import { MetaAttributesType } from 'types/page.types'
import { useIsRtl } from 'components/hooks/use-isrtl'

const meta_attributes: MetaAttributesType = {
    og_title: localize('_t_DMT5 | MetaTrader 5 | Deriv_t_'),
    og_description: localize(
        '_t_DMT5 is developed to give you the best CFD trading experience. You can access our MT5 trader through desktop and even mobile._t_',
    ),
}

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "dmt5/dmt5-banner.png" }) {
            ...fadeIn
        }
        dmt5_desktop_banner: file(relativePath: { eq: "dmt5/bg_desktop_banner_dmt5.png" }) {
            ...fadeIn
        }
        dmt5_desktop_banner_rtl: file(relativePath: { eq: "dmt5/bg_desktop_banner_dmt5_rtl.png" }) {
            ...fadeIn
        }
        dmt5_mobile_banner: file(relativePath: { eq: "dmt5/bg_banner_dmt5_mobile.png" }) {
            ...fadeIn
        }
    }
`

const DMT5 = () => {
    const [is_mobile, setMobile] = useState(false)
    const data = useStaticQuery(query)
    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }

    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        window.addEventListener('resize', handleResizeWindow)
    }, [])

    const is_rtl = useIsRtl()
    const background = useMemo(() => {
        if (is_mobile) {
            return data['dmt5_mobile_banner']
        } else {
            return is_rtl ? data['dmt5_desktop_banner_rtl'] : data['dmt5_desktop_banner']
        }
    }, [data, is_mobile, is_rtl])

    return (
        <Layout>
            <SEO
                title={localize('_t_Deriv MT5 | MetaTrader 5 trading platform | Deriv_t_')}
                description={localize(
                    '_t_Deriv MT5 is an all-in-one CFD trading platform where you can trade on the biggest financial markets and Deriv’s synthetic indices._t_',
                )}
                meta_attributes={meta_attributes}
            />
            <Desktop>
                <DHero
                    title={localize('_t_Deriv MT5_t_')}
                    content={
                        <Localize
                            translate_text="_t_The all-in-one <0/>CFD trading<0/> platform_t_"
                            components={[<br key={0} />]}
                        />
                    }
                    join_us_for_free
                    Logo={dmt5_logo}
                    background_alt="_t_DMT5 trading dashboard_t_"
                    background={background}
                />
            </Desktop>
            <Mobile>
                <DHero
                    title={localize('_t_Deriv MT5_t_')}
                    content={
                        <Localize
                            translate_text="_t_The all-in-one <0/> CFD trading platform <0/>_t_"
                            components={[<br key={0} />]}
                        />
                    }
                    join_us_for_free
                    Logo={dmt5_logo}
                    background_alt="DMT5 trading dashboard"
                    background={background}
                />
            </Mobile>

            <Numbers />
            <WhatIsTrader />
            <WhyTrader />
            <StartTrader />
            <DownloadApp />
            <MarginCalculator />
            <Flexibility />
            <SwapFreeTrading />
            <DBanner
                background_pattern={
                    is_mobile ? BackgroundPatternDMT5_mobile : BackgroundPatternDMT5
                }
                title="_t_Get into the Deriv MT5 experience_t_"
                data={data}
                image_alt="DMT5 trading platform"
                is_mt5
            />
        </Layout>
    )
}

export default WithIntl()(DMT5)
