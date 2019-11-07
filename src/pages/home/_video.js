import React from 'react'

const Video = () => (
    <video width="100%" height="100%" autoPlay muted playsInline loop>
        <source src="/deriv_trading_platform.webm" type="video/webm" />
        <source src="/deriv_trading_platform.mp4" type="video/mp4" />
    </video>
)

export default Video
