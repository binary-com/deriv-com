import React, { ReactElement, useEffect, useLayoutEffect, useState } from 'react'
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

const CountryBasedContent = ({ country_rule, children }: CountryBasedContentProps) => {
    const rules = useCountryRule()
    const [is_loaded, setLoaded] = useState(false)

    useLayoutEffect(() => {
        setLoaded(true)
    }, [rules])

    const condition = rules[country_rule]

    return is_loaded && condition ? <>{children}</> : <></>
}

export const EU = ({ children }: ResponsiveContainerProps) => (
    <CountryBasedContent country_rule="is_eu">{children}</CountryBasedContent>
)

export const NonEU = ({ children }: ResponsiveContainerProps) => (
    <CountryBasedContent country_rule="is_non_eu">{children}</CountryBasedContent>
)

export const UK = ({ children }: ResponsiveContainerProps) => (
    <CountryBasedContent country_rule="is_uk">{children}</CountryBasedContent>
)

export const NonUK = ({ children }: ResponsiveContainerProps) => (
    <CountryBasedContent country_rule="is_non_uk">{children}</CountryBasedContent>
)

export const UKEU = ({ children }: ResponsiveContainerProps) => (
    <CountryBasedContent country_rule="is_uk_eu">{children}</CountryBasedContent>
)

export const ROW = ({ children }: ResponsiveContainerProps) => (
    <CountryBasedContent country_rule="is_row">{children}</CountryBasedContent>
)

export const Dev = ({ children }: ResponsiveContainerProps) => (
    <CountryBasedContent country_rule="is_dev">{children}</CountryBasedContent>
)
