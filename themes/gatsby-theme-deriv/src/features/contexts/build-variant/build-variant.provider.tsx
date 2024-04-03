import React, { ReactNode } from 'react'
import BuildVariantContext, { BuildVariantContextType } from './build-variant.context'

type BuildVariantProviderProps = BuildVariantContextType & {
    children: ReactNode
}
const BuildVariantProvider = ({ region, children }: BuildVariantProviderProps) => {
    return (
        <BuildVariantContext.Provider value={{ region }}>{children}</BuildVariantContext.Provider>
    )
}

export default BuildVariantProvider
