import React from 'react'
const language_config = require(`./i18n-config.js`)
import { WrapPagesWithLocaleContext } from './src/components/localization'
import './src/components/localization/config'

export const wrapPageElement = WrapPagesWithLocaleContext

// export function onRenderBody({ setHeadComponents }) {
//     const languageLinks = []

//     Object.keys(language_config).map(lang => {
//         languageLinks.push(<link rel="alternate" href="https://deriv.com/about" hrefLang={lang} />)
//     })
   
//     setHeadComponents(languageLinks)
// }
