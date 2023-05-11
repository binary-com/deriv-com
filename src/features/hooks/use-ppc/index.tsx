import { useContext } from 'react'
import PpcContext from 'features/contexts/ppc-campaign/ppc.context'

const usePpc = () => {
    return useContext(PpcContext)
}

export default usePpc
