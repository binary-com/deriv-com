import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    WhyTrader,
    StartTrader,
    DownloadApp,
    Flexibility,
    DBanner,
    MarginCalculator,
} from './_lazy-load'
// import TradeControl from './_trade-control.js'
import DHero from './_dhero'
import Numbers from './_numbers'
import WhatIsTrader from './_what-is-trader'
import BackgroundPatternDMT5 from 'images/svg/bg_banner_dmt5.svg'
import BackgroundPatternDMT5_mobile from 'images/svg/bg_banner_dmt5_mobile.svg'
import Layout from 'components/layout/layout'
import dmt5_logo from 'images/svg/dmt5-icon.svg'
import { SEO } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import DMT5BG from 'images/svg/dmt5-bg.svg'
import DMT5BG2 from 'images/svg/dmt5-bg2.svg'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "dmt5-banner.png" }) {
            ...fadeIn
        }
    }
`

const DMT5 = () => {
    const [is_mobile, setMobile] = useState(false)
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
                title={localize('DMT5 | MetaTrader 5 | Deriv')}
                description={localize(
                    'DMT5 is developed to give you the best CFD trading experience. You can access our MT5 trader through desktop and even mobile.',
                )}
            />
            <DHero
                title={localize('Deriv MetaTrader 5 (DMT5)')}
                content={<Localize translate_text="The all-in-one FX and CFD trading platform" />}
                join_us_for_free
                Logo={dmt5_logo}
                image_name="dmt5"
                is_mobile={is_mobile}
                background_svg={DMT5BG}
                background_svg2={DMT5BG2}
                background_alt={localize('DMT5')}
            />
            <Numbers />
            <WhatIsTrader />
            <WhyTrader />
            <StartTrader />
            <DownloadApp />
            {/* TODO: add this section when trade tools are ready */}
            {/* <TradeControl /> */}
            <MarginCalculator />
            <Flexibility />
            {/* TODO: add/revise this section when swap free trading design is ready */}
            {/* <SwapFreeTrading /> */}
            <DBanner
                background_pattern={
                    is_mobile ? BackgroundPatternDMT5_mobile : BackgroundPatternDMT5
                }
                title={<Localize translate_text="Get into the DMT5 experience" />}
                data={data}
            />
        </Layout>
    )
}

export default WithIntl()(DMT5)
