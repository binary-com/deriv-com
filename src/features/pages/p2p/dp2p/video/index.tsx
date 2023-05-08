import React from 'react'
import { p2p_iframe } from './video.module.scss'

const DP2PVideo = () => {
    return (
        <iframe
            className={p2p_iframe}
            src="https://www.youtube.com/embed/x8v4Hb-Uw2I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    )
}

export default DP2PVideo
