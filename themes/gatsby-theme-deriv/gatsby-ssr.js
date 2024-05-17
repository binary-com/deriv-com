import React from 'react'
import { WrapPagesWithLocaleContext } from './src/components/localization'
import './src/components/localization/config'
import GlobalProvider from './src/store/global-provider'

export const wrapRootElement = ({ element }) => {
    return <GlobalProvider>{element}</GlobalProvider>
}

export const wrapPageElement = WrapPagesWithLocaleContext

export const onRenderBody = ({ setHeadComponents }) => {
    const gtmTrackingId = process.env.GATSBY_GOOGLE_TAG_MANAGER_TRACKING_ID || ''
    const hotjarId = process.env.GATSBY_HOTJAR_ID || ''

    setHeadComponents([
        <link key="preconnect-gstatic" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />,
        <link key="preload-font" rel="preload" href="https://fonts.gstatic.com/s/ibmplexsans/v19/zYX9KVElMYYaJe8bpLHnCwDKjWr7AIFsdP3pBms.woff2" as="font" type="font/woff2" crossOrigin="true" />,

        // GTM setup
        (gtmTrackingId && (
            <script
                key="gtm-script"
                async
                src={`https://www.googletagmanager.com/gtm.js?id=${gtmTrackingId}`}
            ></script>
        )),
        (gtmTrackingId && (
            <script
                key="gtm-script"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl+'';f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer', '${gtmTrackingId}');`,
                }}
            />
        )),

        // Hotjar setup
        (hotjarId && (
            <script
                key="hotjar-script"
                dangerouslySetInnerHTML={{
                    __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:'${hotjarId}',hjsv:'7'};
            a=o.getElementsByTagName('head')[0];
            setTimeout(function(){
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            }, 3000);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
                }}
            />
        )),
    ])
}
