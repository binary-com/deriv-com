import React, { ReactNode } from 'react'
import { size, SizeType } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import useScreenSize from 'components/hooks/use-screen-size'

type BreakPointType = number | SizeType

type ResponsiveContainerProps = {
    children: ReactNode
    breakpoint?: BreakPointType
    className?: string
}

const DEFAULT_BREAKPOINT = size.tabletL

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

    return is_mobile ? <></> : <div className={className}>{children}</div>
}

export const Mobile = ({
    children,
    breakpoint = DEFAULT_BREAKPOINT,
    className = '',
}: ResponsiveContainerProps) => {
    const breakpoint_size = getBreakPoint(breakpoint) + 1
    const [is_mobile] = useBrowserResize(breakpoint_size - 1)

    return is_mobile ? <div className={className}>{children}</div> : <></>
}

type TVisiblityProps = {
    config: Partial<ReturnType<typeof useScreenSize>>
    children?: ReactNode
}

export const Visibility = ({ children, config }: TVisiblityProps) => {
    const visiblity = useScreenSize()

    const filterKeys = Object.keys(config)
    const is_visible = filterKeys.some((key) => {
        return visiblity[key]
    })

    return is_visible ? <>{children}</> : null
}
