import { useContext } from 'react'
import useBreakpoints from './use-breakpoints'
import { DerivStore } from 'store'

// HINT: We will add more values to the hook in the future,
// so for the type handling for now I'll just alias the type
type TVisiblity = ReturnType<typeof useBreakpoints>

const useScreenSize = (): TVisiblity => {
    const { breakpoints } = useContext(DerivStore)
    return breakpoints
}

export default useScreenSize
