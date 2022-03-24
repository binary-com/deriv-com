import React from 'react'
import { Partytown } from '@builder.io/partytown/react'
import { WrapPagesWithLocaleContext } from './src/components/localization'
import './src/components/localization/config'
import { MediaContextProvider } from './src/themes/media'
import { DerivProvider } from './src/store'

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
    setHeadComponents([
        <Partytown key="partytown" forward={['dataLayer.push']} />,
        <script
            key="gtm"
            dangerouslySetInnerHTML={{
                __html: `
                            if(typeof window !== 'undefined' && window.location.href.includes('no_partytown=1')) {
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var
                                f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.type="text/javascript";j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-NF7884S');
                            } else {
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var
                                f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.type="text/partytown";j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                })(window,document,'script','dataLayer','GTM-NF7884S');
                            }
                        `,
            }}
        />,
    ])
    setPreBodyComponents([
        <noscript
            key="noscript-gtm"
            dangerouslySetInnerHTML={{
                __html: `
                            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NF7884S" height="0" width="0"
                                style="display:none;visibility:hidden"></iframe>
                        `,
            }}
        />,
    ])
}

export const wrapRootElement = ({ element }) => {
    return (
        <DerivProvider>
            <MediaContextProvider>{element}</MediaContextProvider>
        </DerivProvider>
    )
}

export const wrapPageElement = WrapPagesWithLocaleContext
