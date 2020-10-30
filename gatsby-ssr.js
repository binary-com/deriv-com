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
