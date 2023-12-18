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
    const hotjarId = process.env.GATSBY_HOTJAR_ID || '' // Add your Hotjar ID here
    console.log(hotjarId, 'www')
    setHeadComponents([
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

        // GTM setup
        gtmTrackingId && (
            <script
                key="gtm-script"
                type="text/partytown"
                async
                src={`https://www.googletagmanager.com/gtm.js?id=${gtmTrackingId}`}
            ></script>
        ),
        gtmTrackingId && (
            <script
                key="gtm-script"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl+'';f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer', '${gtmTrackingId}');`,
                }}
            />
        ),

        // Hotjar setup
        hotjarId && (
            <script
                key="hotjar-script"
                dangerouslySetInnerHTML={{
                    __html: `(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:'${hotjarId}',hjsv:'7'};
                    a=o.getElementsByTagName('head')[0];
                    
                    // Delay script execution by 5 seconds
                    setTimeout(function(){
                        r=o.createElement('script');r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    }, 5000);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
                }}
            />
        ),
    ])
}
