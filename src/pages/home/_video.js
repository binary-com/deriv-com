import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { size } from 'themes/device'

const Video = () => {
    const isMobile = useMediaQuery({ maxWidth: size.tabletL })
    if (isMobile) {
        return null
    } else {
        return (
            <video width="100%" height="100%" autoPlay muted playsInline loop>
                <source src="/deriv_trading_platform.webm" type="video/webm" />
                <source src="/deriv_trading_platform.mp4" type="video/mp4" />
            </video>
        )
    }
}

export default Video
