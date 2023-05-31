import React from 'react'
import { p2p_iframe } from './styles.module.scss'
import dclsx from 'features/utils/dclsx'

const DP2PVideo = () => {
    return (
        <iframe
            className={dclsx(p2p_iframe, 'margin-bottom-35x', 'border-radius-10x')}
            src="https://www.youtube.com/embed/x8v4Hb-Uw2I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    )
}

export default DP2PVideo
