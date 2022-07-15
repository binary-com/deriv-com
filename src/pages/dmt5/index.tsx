import React, { useState, useEffect } from 'react'
import { graphql, StaticQuery } from 'gatsby'
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
import { SEO } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import DMT5MainBanner from 'images/svg/dmt5/dmt5_main_banner.svg'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import { MetaAttributesType } from 'types/page.types'

const meta_attributes: MetaAttributesType = {
    og_title: localize('DMT5 | MetaTrader 5 | Deriv'),
    og_description: localize(
        'DMT5 is developed to give you the best CFD trading experience. You can access our MT5 trader through desktop and even mobile.',
    ),
}

const query = graphql`
    query {
        deriv_platform: file(relativePath: { eq: "dmt5/dmt5-banner.png" }) {
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

    return (
        <Layout>
            <SEO
                title={localize('Deriv MT5 | MetaTrader 5 trading platform | Deriv')}
                description={localize(
                    'Deriv MT5 is an all-in-one CFD trading platform where you can trade on the biggest financial markets and Deriv’s synthetic indices.',
                )}
                meta_attributes={meta_attributes}
            />
            <DHero
                title={localize('Deriv MT5 (DMT5)')}
                content={<Localize translate_text="The all-in-one CFD trading platform " />}
                join_us_for_free
                Logo={dmt5_logo}
                background_alt={localize('DMT5 trading dashboard')}
                background_svg={DMT5MainBanner}
            />
            <Numbers />
            <WhatIsTrader />
            <WhyTrader />
            <StartTrader />
            <DownloadApp />
            <MarginCalculator />
            <Flexibility />
            <SwapFreeTrading />
            <StaticQuery
                query={query}
                render={(data) => (
                    <DBanner
                        background_pattern={
                            is_mobile ? BackgroundPatternDMT5_mobile : BackgroundPatternDMT5
                        }
                        title={<Localize translate_text="Get into the Deriv MT5 experience" />}
                        data={data}
                        image_alt="DMT5 trading platform"
                    />
                )}
            />
        </Layout>
    )
}

export default WithIntl()(DMT5)
