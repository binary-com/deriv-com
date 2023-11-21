import React from 'react'
import { Partytown } from '@builder.io/partytown/react'
import { WrapPagesWithLocaleContext } from './src/components/localization'
import './src/components/localization/config'
import GlobalProvider from './src/store/global-provider'

export const wrapRootElement = ({ element }) => {
    return <GlobalProvider>{element}</GlobalProvider>
}

export const wrapPageElement = WrapPagesWithLocaleContext

export const onRenderBody = ({ setHeadComponents }) => {
    const gtmTrackingId = process.env.GATSBY_GOOGLE_TAG_MANAGER_TRACKING_ID || ''
    const ORIGIN = 'https://www.googletagmanager.com'

    if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') return null

    setHeadComponents([
        <Partytown key="partytown" forward={['gtag']} />,
        <script
            key="google-analytics"
            type="text/partytown"
            src={`${ORIGIN}/gtag/js?id=${gtmTrackingId}`}
        />,
        <script
            key="google-analytics-config"
            type="text/partytown"
            dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){ window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtmTrackingId}', { send_page_view: false })`,
            }}
        />,
    ])
}