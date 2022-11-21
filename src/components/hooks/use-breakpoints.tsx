import useMediaQuery from './use-media-query'
import { breakpoints } from 'themes/theme.breakpoints'

export type TUseBreakpoints = {
    is_mobile: boolean
    is_tablet: boolean
    is_lg_tablet: boolean
    is_laptop: boolean
    is_desktop: boolean
}

const useBreakpoints = (): TUseBreakpoints => {
    const is_mobile = useMediaQuery(breakpoints.xs)
    const is_tablet = useMediaQuery(breakpoints.sm)
    const is_lg_tablet = useMediaQuery(breakpoints.md)
    const is_laptop = useMediaQuery(breakpoints.lg)
    const is_desktop = useMediaQuery(breakpoints.xl)

    return {
        is_mobile,
        is_tablet,
        is_lg_tablet,
        is_laptop,
        is_desktop,
    }
}

export default useBreakpoints
