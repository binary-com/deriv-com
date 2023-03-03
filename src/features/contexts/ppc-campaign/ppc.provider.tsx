import React, { ReactNode } from 'react'
import PpcContext from './ppc.context'

type TPPcProviderProps = {
    is_ppc?: boolean
    is_ppc_redirect?: boolean
    children: ReactNode
}

const PpcProvider = ({ is_ppc, is_ppc_redirect, children }: TPPcProviderProps) => {
    return <PpcContext.Provider value={{ is_ppc, is_ppc_redirect }}>{children}</PpcContext.Provider>
}

export default PpcProvider
