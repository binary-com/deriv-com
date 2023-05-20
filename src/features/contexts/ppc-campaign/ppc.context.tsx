import { createContext } from 'react'

type TPpcContext = {
    is_ppc: boolean
    is_ppc_redirect: boolean
}

const PpcContext = createContext<TPpcContext>({ is_ppc: false, is_ppc_redirect: false })

export default PpcContext
