import React from 'react'
import { Partytown } from "@builder.io/partytown/react";
import { WrapPagesWithLocaleContext } from './src/components/localization'
import './src/components/localization/config'
import GlobalProvider from './src/store/global-provider'

export const wrapRootElement = ({ element }) => {
    return <GlobalProvider>{element}</GlobalProvider>
}

export const wrapPageElement = WrapPagesWithLocaleContext

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
    const gtmTrackingId = process.env.GATSBY_GOOGLE_TAG_MANAGER_TRACKING_ID;
    setHeadComponents([
        <Partytown key="partytown" debug={true} forward={["dataLayer.push"]} />,
        <script
            key="plugin-google-tagmanager"
            type="text/partytown"
            dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl+'';f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${gtmTrackingId}');`,
            }}
        />,
        <script
            key="partytown-vanilla-config"
            dangerouslySetInnerHTML={{
                __html: `partytown = {
           resolveUrl(url, location) {
                // Use a secure connection
                if (url?.protocol === 'http:') {
                  url = new URL(url.href.replace('http', 'https'))
                }
                // Point to our proxied URL
                const proxyUrl = new URL(location.origin + '/__third-party-proxy')
                proxyUrl.searchParams.append('url', url)
                return proxyUrl
           }
         }`,
            }}
        />,
    ]);
    setPreBodyComponents([
        <noscript
            key="gtm"
            dangerouslySetInnerHTML={{
                __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmTrackingId}" height="0" width="0" style="display: none; visibility: hidden" aria-hidden="true"></iframe>
                    `,
            }}
        />,
    ]);
}
