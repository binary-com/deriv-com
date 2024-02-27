import { createContext } from 'react'
export type BuildVariantContextType = {
    region: 'row' | 'eu'
}

const BuildVariantContext = createContext<BuildVariantContextType>({ region: 'row' })

export default BuildVariantContext
