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
        key="partytown-vanilla-config"
        dangerouslySetInnerHTML={{
          __html: `
            partytown = {
              resolveUrl(url, location) {
                // Use a secure connection
                if (url.protocol === 'http:') {
                  url = new URL(url.href.replace('http', 'https'));
                }
                // Point to our proxied URL
                const proxyUrl = new URL(location.origin + '/__third-party-proxy');
                proxyUrl.searchParams.append('url', url);
                return proxyUrl;
              }
            }
          `,
        }}
      />,
      <script
        key="plugin-google-tagmanager"
        type="text/partytown-x"
        src={`https://www.googletagmanager.com/gtm.js?id=${gtmTrackingId}`}
        data-ptsrc={`https://www.googletagmanager.com/gtm.js?id=${gtmTrackingId}`}
      />,
    ]);
  
    setPreBodyComponents([
      <noscript
        key="gtm"
        dangerouslySetInnerHTML={{
          __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmTrackingId}" height="0" width="0" style="display:none;visibility:hidden" aria-hidden="true"></iframe>
          `,
        }}
      />,
    ]);
  };
  
