import React from 'react'
import { WrapPagesWithLocaleContext } from './src/components/localization'
import './src/components/localization/config'
import { MediaContextProvider } from './src/themes/media'
import { DerivProvider } from './src/store'

export const wrapRootElement = ({ element }) => {
    return (
        <DerivProvider>
            <MediaContextProvider>{element}</MediaContextProvider>
        </DerivProvider>
    )
}

export const wrapPageElement = WrapPagesWithLocaleContext

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script
            key="partytown-vanilla-config"
            dangerouslySetInnerHTML={{
                __html: `partytown = {
           resolveUrl(url, location) {
              if (url.hostname.includes('google-analytics')) {
                // Use a secure connection
                if (url?.protocol === 'http:') {
                  url = new URL(url.href.replace('http', 'https'))
                }
                // Point to our proxied URL
                const proxyUrl = new URL(location.origin + '/__third-party-proxy')
                proxyUrl.searchParams.append('url', url)
                return proxyUrl
              }
              return url
           }
         }`,
            }}
        />,
        <script
            key="partytown-vanilla-config"
            dangerouslySetInnerHTML={{
                __html: `partytown = {
           resolveUrl(url, location) {
              if (url.hostname.includes('googletagmanager')) {
                // Use a secure connection
                if (url?.protocol === 'http:') {
                  url = new URL(url.href.replace('http', 'https'))
                }
                // Point to our proxied URL
                const proxyUrl = new URL(location.origin + '/__third-party-proxy')
                proxyUrl.searchParams.append('url', url)
                return proxyUrl
              }
              return url
           }
         }`,
            }}
        />,
        <script
            key="partytown-vanilla-config"
            dangerouslySetInnerHTML={{
                __html: `partytown = {
           resolveUrl(url, location) {
              if (url.hostname.includes('track-eu')) {
                // Use a secure connection
                if (url?.protocol === 'http:') {
                  url = new URL(url.href.replace('http', 'https'))
                }
                // Point to our proxied URL
                const proxyUrl = new URL(location.origin + '/__third-party-proxy')
                proxyUrl.searchParams.append('url', url)
                return proxyUrl
              }
              return url
           }
         }`,
            }}
        />,
        <script
            key="partytown-vanilla-config"
            dangerouslySetInnerHTML={{
                __html: `partytown = {
           resolveUrl(url, location) {
              if (url.hostname.includes('track')) {
                // Use a secure connection
                if (url?.protocol === 'http:') {
                  url = new URL(url.href.replace('http', 'https'))
                }
                // Point to our proxied URL
                const proxyUrl = new URL(location.origin + '/__third-party-proxy')
                proxyUrl.searchParams.append('url', url)
                return proxyUrl
              }
              return url
           }
         }`,
            }}
        />,
        <script
            key="partytown-vanilla-config"
            dangerouslySetInnerHTML={{
                __html: `partytown = {
           resolveUrl(url, location) {
              if (url.hostname.includes('static')) {
                // Use a secure connection
                if (url?.protocol === 'http:') {
                  url = new URL(url.href.replace('http', 'https'))
                }
                // Point to our proxied URL
                const proxyUrl = new URL(location.origin + '/__third-party-proxy')
                proxyUrl.searchParams.append('url', url)
                return proxyUrl
              }
              return url
           }
         }`,
            }}
        />,
        <script
            key="partytown-vanilla-config"
            dangerouslySetInnerHTML={{
                __html: `partytown = {
           resolveUrl(url, location) {
              if (url.hostname.includes('trustpilot')) {
                // Use a secure connection
                if (url?.protocol === 'http:') {
                  url = new URL(url.href.replace('http', 'https'))
                }
                // Point to our proxied URL
                const proxyUrl = new URL(location.origin + '/__third-party-proxy')
                proxyUrl.searchParams.append('url', url)
                return proxyUrl
              }
              return url
           }
         }`,
            }}
        />,
    ])
}
  
