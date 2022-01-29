import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { size } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { DerivStore } from 'store'

type ResponsiveContainerProps = {
    children: ReactElement
    breakpoint?: number
}

type LayerProps = {
    breakpoint?: number
}

type StoreDataType = {
    is_eu_country?: boolean
    is_uk_country?: boolean
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
            const host_name = window.location.hostname
            if (host_name.includes('eu')) {
                setEuDomain(true)
            }
            if (host_name.includes('uk')) {
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
    const { is_eu_domain, is_uk_domain } = domainBasedCheck()
    const { is_eu_country, is_uk_country } = React.useContext<StoreDataType>(DerivStore)

    const is_eu = (is_eu_country || is_eu_domain) && !is_uk_country
    const is_uk = is_uk_country || is_uk_domain
    const is_non_uk = !is_uk
    const is_non_eu = !is_eu
    const is_eu_uk = !(!is_eu && !is_uk)
    const is_row = !is_eu_uk

    return { is_eu, is_uk, is_non_uk, is_non_eu, is_eu_uk, is_row }
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
