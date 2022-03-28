import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { size } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { eu_domains, uk_domains } from 'common/constants'
import { getClientInformation, getDomain, getSubDomain } from 'common/utility'
import { eu_countries } from 'common/country-base'
import { useWebsiteStatus } from 'components/hooks/use-website-status'

type ResponsiveContainerProps = {
    children: ReactElement
    breakpoint?: number
    className?: string
}

type CountryRuleType = 'is_eu' | 'is_uk' | 'is_non_uk' | 'is_non_eu' | 'is_uk_eu' | 'is_row'

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

export const getCountryRule = () => {
    const subdomain = getSubDomain()

    const is_eu = subdomain.includes('eu')
    const is_uk = subdomain.includes('uk')
    const is_non_uk = !is_uk
    const is_non_eu = !is_eu
    const is_uk_eu = !(!is_eu && !is_uk)
    const is_row = !is_uk_eu

    return { is_eu, is_uk, is_non_uk, is_non_eu, is_uk_eu, is_row }
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

const CountryBasedContent = ({ country_rule, children }: CountryBasedContentProps) => {
    const rules = getCountryRule()

    return rules[country_rule] ? <>{children}</> : <></>
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
