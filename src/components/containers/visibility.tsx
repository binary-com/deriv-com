/* eslint-disable react/prop-types */
import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { size } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

type ResponsiveContainerProps = {
    children: ReactElement
    breakpoint?: number
}

type LayerProps = {
    breakpoint?: number
}

const DEFAULT_BREAKPOINT = size.tablet

const DesktopLayer = styled.div<LayerProps>`
    @media (max-width: ${({ breakpoint }) => breakpoint}px) {
        display: none;
    }
`
const MobileLayer = styled.div<LayerProps>`
    @media (min-width: ${({ breakpoint }) => breakpoint}px) {
        display: none;
    }
`

const getBreakPoint = (breakpoint?: number) => {
    return breakpoint ?? DEFAULT_BREAKPOINT
}

const deviceRenderer = (): boolean => {
    const [is_loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [useBrowserResize])

    return is_loaded
}

export const Desktop = ({
    children,
    breakpoint = DEFAULT_BREAKPOINT,
}: ResponsiveContainerProps) => {
    const breakpoint_size = getBreakPoint(breakpoint)
    const [is_mobile] = useBrowserResize(breakpoint_size)
    const is_loaded = deviceRenderer()

    const desktop_view = is_mobile ? <></> : <>{children}</>

    return is_loaded ? (
        desktop_view
    ) : (
        <DesktopLayer breakpoint={breakpoint_size}>{children}</DesktopLayer>
    )
}

export const Mobile = ({ children, breakpoint = DEFAULT_BREAKPOINT }: ResponsiveContainerProps) => {
    const breakpoint_size = getBreakPoint(breakpoint) + 1
    const [is_mobile] = useBrowserResize(breakpoint_size - 1)
    const is_loaded = deviceRenderer()

    const mobile_view = is_mobile ? <>{children}</> : <></>

    return is_loaded ? (
        mobile_view
    ) : (
        <MobileLayer breakpoint={breakpoint_size}>{children}</MobileLayer>
    )
}
