import { useContext } from 'react'
import { DerivStore } from 'store'

export type TVisiblity = {
    is_xs: boolean
    is_sm: boolean
    is_md: boolean
    is_lg: boolean
    is_xl: boolean
}

const useVisibility = (): TVisiblity => {
    const { breakpoints } = useContext(DerivStore)

    return breakpoints
}

export default useVisibility
