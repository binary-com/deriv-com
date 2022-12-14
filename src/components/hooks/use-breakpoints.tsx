import useMediaQuery from './use-media-query'
import { breakpoints } from 'themes/theme.breakpoints'

type TUseBreakpoints = {
    is_mobile: boolean
    is_tablet: boolean
    is_mobile_or_tablet: boolean
    is_large_tablet: boolean
    is_laptop: boolean
    is_desktop: boolean
    is_laptop_or_desktop: boolean
}

const useBreakpoints = (): TUseBreakpoints => {
    const is_mobile = useMediaQuery(breakpoints.xs)
    const is_tablet = useMediaQuery(breakpoints.sm)
    const is_large_tablet = useMediaQuery(breakpoints.md)
    const is_laptop = useMediaQuery(breakpoints.lg)
    const is_desktop = useMediaQuery(breakpoints.xl)

    return {
        is_mobile, // 0 - 768px
        is_tablet, // 769px - 992px
        is_mobile_or_tablet: is_mobile || is_tablet, // 0 - 992px
        is_large_tablet, // 993px - 1200px
        is_laptop, // 1201px - 1920px
        is_desktop, // >= 1921px
        is_laptop_or_desktop: is_laptop || is_desktop, // >= 1201px
    }
}

export default useBreakpoints
