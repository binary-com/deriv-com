import { useContext } from 'react'
import { TUseBreakpoints } from './use-breakpoints'
import { DerivStore } from 'store'

// HINT: We will add more values to the hook in the future,
// so for the type handling for now I'll just alias the type
export type TVisiblity = TUseBreakpoints

const useVisibility = (): TVisiblity => {
    const { breakpoints } = useContext(DerivStore)

    return breakpoints
}

export default useVisibility
