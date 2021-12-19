/* eslint-disable react/prop-types */
/* TODO: Remove the above once fully typed the whole codebae */

import React, { ReactNode, useEffect, useState } from 'react'
import { BrowserView, MobileView, TabletView, isTablet } from 'react-device-detect'
import styled from 'styled-components'
import device, { size } from 'themes/device'

const DesktopLayer = styled.div`
    @media ${device.tabletS} {
        display: none;
    }
`
const MobileLayer = styled.div`
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

export const Desktop: ReactNode = ({ children }) => {
    const is_loaded = deviceRenderer()

    return is_loaded ? (
        isTablet ? (
            <TabletView>{children}</TabletView>
        ) : (
            <BrowserView>{children}</BrowserView>
        )
    ) : (
        <DesktopLayer>{children}</DesktopLayer>
    )
}

export const Mobile: ReactNode = ({ children }) => {
    const is_loaded = deviceRenderer()

    return is_loaded && !isTablet ? (
        <MobileView>{children}</MobileView>
    ) : (
        <MobileLayer>{children}</MobileLayer>
    )
}
