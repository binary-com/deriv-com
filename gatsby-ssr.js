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

    setHeadComponents([
        <link key="preconnect-gstatic" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />,
        <link key="preload-font" rel="preload" href="https://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIFsdP3pBms.woff2" as="font" type="font/woff2" crossOrigin="true" />,
        // Partytown setup
        <Partytown key="partytown" />,
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
    ])
}
