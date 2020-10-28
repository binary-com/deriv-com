import React from 'react'
import { WrapPagesWithLocaleContext } from './src/components/localization'
import './src/components/localization/config'
import { MediaContextProvider } from './src/themes/media'

export const wrapRootElement = ({ element }) => {
    return (
        <MediaContextProvider>
            {element}
        </MediaContextProvider>
    )
}

export const wrapPageElement = WrapPagesWithLocaleContext
