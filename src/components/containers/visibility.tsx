import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { size, SizeType } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { useCountryRule } from 'components/hooks/use-country-rule'

type ResponsiveContainerProps = {
    children: ReactElement
    breakpoint?: number | SizeType
    className?: string
}

type CountryRuleType =
    | 'is_eu'
    | 'is_uk'
    | 'is_non_uk'
    | 'is_non_eu'
    | 'is_uk_eu'
    | 'is_row'
    | 'is_dev'

type CountryBasedContentProps = {
    children: ReactElement
    country_rule: CountryRuleType
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

const getBreakPoint = (breakpoint: ResponsiveContainerProps['breakpoint']) => {
    if (typeof breakpoint === 'number') {
        return breakpoint
    } else {
        return size[breakpoint] ?? DEFAULT_BREAKPOINT
    }
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
    className = '',
}: ResponsiveContainerProps) => {
    const breakpoint_size = getBreakPoint(breakpoint)
    const [is_mobile] = useBrowserResize(breakpoint_size)
    const is_loaded = deviceRenderer()

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
    const is_loaded = deviceRenderer()

    const mobile_view = is_mobile ? <div className={className}>{children}</div> : <></>

    return is_loaded ? (
        mobile_view
    ) : (
        <MobileLayer breakpoint={breakpoint_size}>{children}</MobileLayer>
    )
}

export const EU = ({ children }: ResponsiveContainerProps) => {
    const [is_eu] = useCountryRule()
    return is_eu && <>{children}</>
}

export const NonEU = ({ children }: ResponsiveContainerProps) => {
    const [is_eu] = useCountryRule()
    return !is_eu && <>{children}</>
}

export const UK = ({ children }: ResponsiveContainerProps) => {
    const [is_uk] = useCountryRule()
    return is_uk && <>{children}</>
}

export const NonUK = ({ children }: ResponsiveContainerProps) => {
    const [is_uk] = useCountryRule()
    return !is_uk && <>{children}</>
}

export const UKEU = ({ children }: ResponsiveContainerProps) => {
    const [is_uk_eu] = useCountryRule()
    return is_uk_eu && <>{children}</>
}

export const ROW = ({ children }: ResponsiveContainerProps) => {
    const [is_row] = useCountryRule()
    return is_row && <>{children}</>
}

export const Dev = ({ children }: ResponsiveContainerProps) => {
    const [is_dev] = useCountryRule()
    return is_dev && <>{children}</>
}
