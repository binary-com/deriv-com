import { useContext } from 'react'
import { TUseBreakpoints } from './use-breakpoints'
import { DerivStore } from 'store'

export type TVisiblity = TUseBreakpoints

const useVisibility = (): TVisiblity => {
    const { breakpoints } = useContext(DerivStore)

    return breakpoints
}

export default useVisibility
