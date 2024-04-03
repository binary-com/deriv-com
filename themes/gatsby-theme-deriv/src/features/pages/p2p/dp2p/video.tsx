import React from 'react'
import { p2p_iframe } from './styles.module.scss'
import dclsx from 'features/utils/dclsx'
import Box from 'features/components/atoms/box'

const DP2PVideo = () => {
    return (
        <Box
            as="iframe"
            mb="35x"
            radius="10x"
            className={dclsx(p2p_iframe)}
            src="https://www.youtube.com/embed/Xh5VQx6qFOA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></Box>
    )
}

export default DP2PVideo
