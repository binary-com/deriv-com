import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { size } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { eu_domains, uk_domains } from 'common/constants'
import { getClientInformation, getDomain } from 'common/utility'
import { eu_countries } from 'common/country-base'
import { useWebsiteStatus } from 'components/hooks/use-website-status'

type ResponsiveContainerProps = {
    children: ReactElement
    breakpoint?: number
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

    const is_eu =
        (is_eu_residence || is_eu_country || is_eu_domain) && !is_uk_country && !is_uk_residence
    const is_uk = is_uk_residence || is_uk_country || is_uk_domain
    const is_non_uk = !is_uk
    const is_non_eu = !is_eu
    const is_eu_uk = !(!is_eu && !is_uk)
    const is_row = !is_eu_uk

    return { is_eu, is_uk, is_non_uk, is_non_eu, is_eu_uk, is_row }
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
    const { is_eu } = getCountryRule()

    return is_eu ? <>{children}</> : null
}

export const NonEU = ({ children }: ResponsiveContainerProps) => {
    const { is_non_eu } = getCountryRule()

    return is_non_eu ? <>{children}</> : null
}

export const UK = ({ children }: ResponsiveContainerProps) => {
    const { is_uk } = getCountryRule()

    return is_uk ? <>{children}</> : null
}

export const NonUK = ({ children }: ResponsiveContainerProps) => {
    const { is_non_uk } = getCountryRule()

    return is_non_uk ? <>{children}</> : null
}

export const UKEU = ({ children }: ResponsiveContainerProps) => {
    const { is_eu_uk } = getCountryRule()

    return is_eu_uk ? <>{children}</> : null
}

export const ROW = ({ children }: ResponsiveContainerProps) => {
    const { is_row } = getCountryRule()

    return is_row ? <>{children}</> : null
}
