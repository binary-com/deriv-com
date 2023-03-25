import React from 'react'
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
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { MetaAttributesType } from 'types/page.types'
import useRegion from 'components/hooks/use-region'

const meta_attributes: MetaAttributesType = {
    og_title: localize('DMT5 | MetaTrader 5 | Deriv'),
    og_description: localize(
        'DMT5 is developed to give you the best CFD trading experience. You can access our MT5 trader through desktop and even mobile.',
    ),
}

const DMT5 = () => {
    const { is_row } = useRegion()

    return (
        <Layout>
            <SEO
                title={localize('Deriv MT5 | MetaTrader 5 trading platform | Deriv')}
                description={localize(
                    'Deriv MT5 is an all-in-one CFD trading platform where you can trade on the biggest financial markets and Deriv’s synthetic indices.',
                )}
                meta_attributes={meta_attributes}
            />
            <DHero join_us_for_free />
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
    )
}

export default WithIntl()(DMT5)
