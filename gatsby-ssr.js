import React from 'react'
import { WrapPagesWithLocaleContext } from './src/components/localization'
import './src/components/localization/config'
import { MediaContextProvider } from './src/themes/media'
import { DerivProvider } from './src/store'
import { LogInProvider } from './src/components/layout/log-in-context'

export const wrapRootElement = ({ element }) => {
    return (
        <DerivProvider>
            <LogInProvider>
                <MediaContextProvider>{element}</MediaContextProvider>
            </LogInProvider>
        </DerivProvider>
    )
}

export const wrapPageElement = WrapPagesWithLocaleContext
