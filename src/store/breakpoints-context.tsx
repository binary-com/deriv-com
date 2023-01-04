import React, { createContext, ReactNode } from 'react'
import useBreakpoints from 'components/hooks/use-breakpoints'

type BreakpointsProviderProps = {
    children?: ReactNode
}

export type BreakpointsContextType = {
    breakpoints: ReturnType<typeof useBreakpoints>
}

export const BreakpointsContext = createContext<BreakpointsContextType>(null)

export const BreakpointsProvider = ({ children }: BreakpointsProviderProps) => {
    const breakpoints = useBreakpoints()

    return (
        <BreakpointsContext.Provider
            value={{
                breakpoints,
            }}
        >
            {children}
        </BreakpointsContext.Provider>
    )
}
