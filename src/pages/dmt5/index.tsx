import React, { useEffect, useState } from 'react'
import {
    WhyTrader,
    StartTrader,
    DownloadApp,
    Flexibility,
    OtherPlatforms,
    MarginCalculator,
    SwapFreeTrading,
} from './_lazy-load'
import Numbers from './_numbers'
import WhatIsTrader from './_what-is-trader'
import DHero from 'components/custom/_dhero-dmt5'
import Layout from 'components/layout/layout'
import { SEO, MetaAttributesType } from 'components/containers'
import { WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const meta_attributes: MetaAttributesType = {
    og_title: '_t_DMT5 | MetaTrader 5 | Deriv_t_',
    og_description:
        '_t_DMT5 is developed to give you the best CFD trading experience. You can access our MT5 trader through desktop and even mobile._t_',
}

const DMT5 = () => {
    const { is_row } = useRegion()
    const [is_loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    if (is_loaded) {
        return (
            <>
                <SEO
                    title="_t_Deriv MT5 | MetaTrader 5 trading platform | Deriv_t_"
                    description="_t_Deriv MT5 is an all-in-one CFD trading platform where you can trade on the biggest financial markets and Deriv’s synthetic indices._t_"
                    meta_attributes={meta_attributes}
                />
                <Layout>
                    <DHero />
                    <Numbers />
                    <WhatIsTrader />
                    <WhyTrader />
                    <StartTrader />
                    <MarginCalculator />
                    <Flexibility />
                    <SwapFreeTrading />
                    <DownloadApp />
                    {is_row && <OtherPlatforms />}
                </Layout>
            </>
        )
    }

    return (
        <SEO
            title="_t_Deriv MT5 | MetaTrader 5 trading platform | Deriv_t_"
            description="_t_Deriv MT5 is an all-in-one CFD trading platform where you can trade on the biggest financial markets and Deriv’s synthetic indices._t_"
            meta_attributes={meta_attributes}
        />
    )
}

export default WithIntl()(DMT5)
