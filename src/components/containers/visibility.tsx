import React, { ReactElement, useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import { size, SizeType } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { eu_domains, uk_domains } from 'common/constants'
import { getClientInformation, getDomain, isLocalhost, isTestlink } from 'common/utility'
import { eu_countries } from 'common/country-base'
import { useWebsiteStatus } from 'components/hooks/use-website-status'

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

const domainBasedCheck = () => {
    const [is_eu_domain, setEuDomain] = useState(false)
    const [is_uk_domain, setUkDomain] = useState(false)

    useEffect(() => {
        if (window) {
            const subdomain = window.location.hostname.split('.').slice(0, -2).join('.')

            if (eu_domains.includes(subdomain)) {
                setEuDomain(true)
            }
            if (uk_domains.includes(subdomain)) {
                setUkDomain(true)
            }
        }
    }, [])

    return { is_eu_domain, is_uk_domain }
}

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

export const getCountryRule = () => {
    const [website_status] = useWebsiteStatus()
    const user_ip_country = website_status?.clients_country || ''
    const { is_eu_domain, is_uk_domain } = domainBasedCheck()
    const { residence } = getClientInformation(getDomain()) || {
        residence: '',
    }
    const eu_countries_uk_excluded = eu_countries.filter((country: string) => country !== 'gb')

    const is_eu_country = eu_countries_uk_excluded.includes(user_ip_country)
    const is_uk_country = user_ip_country === 'gb'
    const is_eu_residence = eu_countries_uk_excluded.includes(residence)
    const is_uk_residence = residence === 'gb'

    const is_eu = is_eu_residence || (!residence && is_eu_country) || is_eu_domain
    const is_uk = is_uk_residence || (!residence && is_uk_country) || is_uk_domain
    const is_non_uk = !is_uk
    const is_non_eu = !is_eu
    const is_uk_eu = !(!is_eu && !is_uk)
    const is_row = !is_uk_eu
    const is_dev = isLocalhost() || isTestlink()

    return { is_eu, is_uk, is_non_uk, is_non_eu, is_uk_eu, is_row, is_dev }
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
