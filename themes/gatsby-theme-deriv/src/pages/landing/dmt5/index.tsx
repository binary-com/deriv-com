import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { WhyTrader, StartTrader, DownloadApp, Flexibility, DBanner } from '../../dmt5/_lazy-load'
import Numbers from '../../dmt5/_numbers'
import WhatIsTrader from '../../dmt5/_what-is-trader'
import DHero from 'components/custom/_dhero-2'
import BackgroundPatternDMT5 from 'images/svg/dmt5/bg_banner_dmt5.svg'
import BackgroundPatternDMT5_mobile from 'images/svg/dmt5/bg_banner_dmt5_mobile.svg'
import Layout from 'components/layout/layout'
import dmt5_logo from 'images/svg/dmt5/dmt5-icon.svg'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'
import DMT5BG from 'images/svg/dmt5/dmt5-bg.svg'
import DMT5BG2 from 'images/svg/dmt5/dmt5-bg2.svg'
import { size } from 'themes/device'
import { isBrowser } from 'common/utility'
import { TGatsbyHead } from 'features/types'

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
    const data = useStaticQuery(query)

    return (
        <Layout is_ppc_redirect>
            <DHero
                title="_t_Deriv MT5 (DMT5)_t_"
                content="_t_Trade 24/7 on forex, stocks, synthetic indices, and commodities_t_"
                Logo={dmt5_logo}
                image_name="dmt5"
                is_mobile={is_mobile}
                background_svg={DMT5BG}
                background_svg2={DMT5BG2}
                background_alt="_t_DMT5_t_"
                is_ppc={true}
                d_height="60.2rem"
                laptopM_height="60rem"
                laptop_height="62rem"
                tabletL_height="66rem"
            />
            <Numbers />
            <WhatIsTrader />
            <WhyTrader />
            <StartTrader />
            <DownloadApp />
            {/* TODO: add this section when trade tools are ready */}
            {/* <TradeControl /> */}
            <Flexibility />
            <DBanner
                background_pattern={
                    is_mobile ? BackgroundPatternDMT5_mobile : BackgroundPatternDMT5
                }
                title="_t_Get into the DMT5 experience_t_"
                data={data}
                is_ppc
                is_mt5
            />
        </Layout>
    )
}

export default WithIntl()(DMT5)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_DMT5 | MetaTrader 5 | Deriv_t_"
        description="_t_DMT5 is developed to give you the best CFD trading experience. You can access our MT5 trader through desktop and even mobile._t_"
        no_index
        pageContext={pageContext}
    />
)
