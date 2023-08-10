// src/context/PageContext.tsx
import React from 'react'
import { featureFlags } from './featureFlags'

type PageContextType = {
    featureFlags: typeof featureFlags
}

export const PageContext = React.createContext<PageContextType>({
    featureFlags,
})
