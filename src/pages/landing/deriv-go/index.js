import React from 'react'
import { Banner, DerivGoContent, GoFooterBanner, GoFooter } from './_lazy-load.js'
import { Show, SEO } from 'components/containers'
import { localize, Localize, WithIntl } from 'components/localization'

const DERIVGO_CONTENT = [
    {
        title: <Localize translate_text="Trade on the GO anywhere, anytime" />,
        image_name: 'trade_with_go',
        image_alt: localize('Trade With Deriv Go'),
    },
    {
        title: <Localize translate_text="Real-time alerts & notifications" />,
        subtitle: <Localize translate_text="(even when you’re not trading)" />,
        image_name: 'realtime_alert',
        image_alt: localize('Realtime Alert'),
    },
    {
        title: <Localize translate_text="A faster, seamless mobile experience" />,
        image_name: 'mobile_exp',
        image_alt: localize('Mobile Experience'),
    },
]

const DerivGo = () => {
    return (
        <>
            <SEO
                title={localize('Deriv Go')}
                description={localize(
                    'Trade at the speed of touch.Get the new Deriv GO mobile app now from the Google Play Store.',
                )}
                no_index
            />
            <Banner />
            <Show.Desktop>
                <DerivGoContent reverse P2P={DERIVGO_CONTENT} />
            </Show.Desktop>
            <GoFooterBanner />
            <GoFooter />
        </>
    )
}

export default WithIntl()(DerivGo)
