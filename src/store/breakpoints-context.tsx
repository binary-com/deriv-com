import React, { createContext, ReactNode } from 'react'
import useMediaQuery from 'components/hooks/use-media-query'
import { breakpoints } from 'themes/theme.breakpoints'

type BreakpointsProviderProps = {
    children?: ReactNode
}

type TUseBreakpoints = Record<
    | 'is_mobile'
    | 'is_tablet'
    | 'is_mobile_or_tablet'
    | 'is_large_tablet'
    | 'is_laptop'
    | 'is_desktop'
    | 'is_laptop_or_desktop',
    boolean
>

export const BreakpointsContext = createContext<TUseBreakpoints>(null)

export const BreakpointsProvider = ({ children }: BreakpointsProviderProps) => {
    const is_mobile = useMediaQuery(breakpoints.xs)
    const is_tablet = useMediaQuery(breakpoints.sm)
    const is_large_tablet = useMediaQuery(breakpoints.md)
    const is_laptop = useMediaQuery(breakpoints.lg)
    const is_desktop = useMediaQuery(breakpoints.xl)
    const is_mobile_or_tablet = is_mobile || is_tablet // 0 - 992px
    const is_laptop_or_desktop = is_laptop || is_desktop // >= 1201px

    return (
        <BreakpointsContext.Provider
            value={{
                is_mobile,
                is_tablet,
                is_large_tablet,
                is_laptop,
                is_desktop,
                is_mobile_or_tablet,
                is_laptop_or_desktop,
            }}
        >
            {children}
        </BreakpointsContext.Provider>
    )
}
