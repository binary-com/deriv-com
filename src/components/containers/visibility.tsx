import React, { ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import { size, SizeType } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

type BreakPointType = number | SizeType

type ResponsiveContainerProps = {
    children: ReactNode
    breakpoint?: BreakPointType
    className?: string
}

type LayerProps = {
    breakpoint?: number
}

const DEFAULT_BREAKPOINT = size.tabletL

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

const getBreakPoint = (breakpoint: BreakPointType) => {
    if (typeof breakpoint === 'number') {
        return breakpoint
    } else {
        return size[breakpoint] ?? DEFAULT_BREAKPOINT
    }
}

export const Desktop = ({
    children,
    breakpoint = DEFAULT_BREAKPOINT,
    className = '',
}: ResponsiveContainerProps) => {
    const breakpoint_size = getBreakPoint(breakpoint)
    const [is_mobile] = useBrowserResize(breakpoint_size)
    const [is_loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])

    const desktop_view = is_mobile ? <></> : <div className={className}>{children}</div>

    return is_loaded ? (
        desktop_view
    ) : (
        <DesktopLayer breakpoint={breakpoint_size}>{children}</DesktopLayer>
    )
}

export const Mobile = ({
    children,
    breakpoint = DEFAULT_BREAKPOINT,
    className = '',
}: ResponsiveContainerProps) => {
    const breakpoint_size = getBreakPoint(breakpoint) + 1
    const [is_mobile] = useBrowserResize(breakpoint_size - 1)
    const [is_loaded, setLoaded] = useState(false)
    useEffect(() => {
        setLoaded(true)
    }, [])

    const mobile_view = is_mobile ? <div className={className}>{children}</div> : <></>

    return is_loaded ? (
        mobile_view
    ) : (
        <MobileLayer breakpoint={breakpoint_size}>{children}</MobileLayer>
    )
}
