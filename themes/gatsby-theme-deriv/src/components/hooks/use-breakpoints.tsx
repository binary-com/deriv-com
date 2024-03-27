import { useContext } from 'react'
import { BreakpointsContext } from 'store/breakpoints-context'

const useBreakpoints = () => {
    const breakpoints = useContext(BreakpointsContext)

    if (!breakpoints) {
        throw new Error('useBreakpoints must be used within BreakpointsContext')
    }

    return breakpoints
}

export default useBreakpoints
