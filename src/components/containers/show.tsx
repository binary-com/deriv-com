/* eslint-disable react/prop-types */
// TODO: Remove the above once fully typed the whole codebase

import React, { useEffect, useState, ReactNode } from 'react'
import styled from 'styled-components'
import { BrowserView, MobileView, TabletView, isTablet } from 'react-device-detect'
import { DerivStore } from 'store'
import device, { size } from 'themes/device'

const DesktopLayer = styled.div`
    border: solid 30px red;
    @media ${device.tabletS} {
        display: none;
    }
`
const MobileLayer = styled.div`
    border: solid 30px pink;
    @media (min-width: ${size.tablet}px) {
        display: none;
    }
`
const deviceRenderer = (): boolean => {
    const [is_loaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [BrowserView, MobileView])

    return is_loaded
}

const Desktop: ReactNode = ({ children }) => {
    const is_loaded = deviceRenderer()
    const desktop_view = isTablet ? (
        <TabletView>{children}</TabletView>
    ) : (
        <BrowserView>{children}</BrowserView>
    )

    return is_loaded ? desktop_view : <DesktopLayer>{children}</DesktopLayer>
}

const Mobile: ReactNode = ({ children }) => {
    const is_loaded = deviceRenderer()

    return is_loaded && !isTablet ? (
        <MobileView>{children}</MobileView>
    ) : (
        <MobileLayer>{children}</MobileLayer>
    )
}

// export const Eu: ReactNode = ({ children }: WrapperProps) => {
//     const { is_eu_country } = React.useContext(DerivStore)

//     if (is_eu_country) return <>{children}</>
//     else return null
// }

// export const NonEU = ({ children }) => {
//     const { is_eu_country } = React.useContext(DerivStore)

//     if (is_eu_country === false) return <>{children}</>
//     else return null
// }

export default {
    Mobile,
    Desktop,
}
