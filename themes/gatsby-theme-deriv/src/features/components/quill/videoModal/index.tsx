import React, { useCallback } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss'

interface VideoModalProps {
    video_id: string
    isOpen: boolean
    onClose: () => void
}

const VideoModal = ({ video_id, isOpen, onClose }: VideoModalProps) => {
    const handleClose = useCallback(() => onClose(), [onClose])

    return (
        <ModalVideo
            channel="vimeo"
            autoplay
            loop="1"
            isOpen={isOpen}
            videoId={video_id}
            onClose={handleClose}
        />
    )
}

export default VideoModal
