import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import device, { size } from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

type ResponsiveContainerProps = {
    children: ReactElement
}

const DesktopLayer = styled.div`
    @media ${device.tablet} {
        display: none;
    }
`
const MobileLayer = styled.div`
    @media ${device.mobile} {
        display: none;
    }
`

const deviceRenderer = (): boolean => {
    const [is_loaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [useBrowserResize])

    return is_loaded
}

export const Desktop = ({ children }: ResponsiveContainerProps) => {
    const [is_mobile] = useBrowserResize(size.tablet)
    const is_loaded = deviceRenderer()

    const desktop_view = is_mobile ? <></> : <>{children}</>

    return is_loaded ? desktop_view : <DesktopLayer>{children}</DesktopLayer>
}

export const Mobile = ({ children }: ResponsiveContainerProps) => {
    const [is_mobile] = useBrowserResize(size.tablet)
    const is_loaded = deviceRenderer()

    const mobile_view = is_mobile ? <>{children}</> : <></>

    return is_loaded ? mobile_view : <MobileLayer>{children}</MobileLayer>
}
