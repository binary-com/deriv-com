import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'

type PlayerWrapperProps = {
    max_width: string
    mobile_max_width: string
}

const PlayerWrapper = styled.div<PlayerWrapperProps>`
    width: 100%;
    max-width: ${(props) => props.max_width};
    background-color: var(--color-black);
    outline: none;

    @media ${device.tabletL} {
        max-width: ${(props) => props.mobile_max_width};
    }
`

const Video = styled.video`
    width: 100%;
`

type VideoPlayerProps = {
    controls: boolean
    max_width?: string
    mobile_max_width?: string
    src: string
}

const VideoPlayer = ({ controls, mobile_max_width, max_width, src }: VideoPlayerProps) => {
    return (
        <PlayerWrapper max_width={max_width} mobile_max_width={mobile_max_width}>
            <Video controls={controls}>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </Video>
        </PlayerWrapper>
    )
}

export default VideoPlayer
