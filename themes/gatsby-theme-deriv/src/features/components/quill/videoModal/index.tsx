import React, { useCallback, useEffect } from 'react'
import ModalVideo from 'react-modal-video'

interface VideoModalProps {
    video_id: string
    isOpen: boolean
    onClose: () => void
}

const VideoModal = ({ video_id, isOpen, onClose }: VideoModalProps) => {
    const handleClose = useCallback(() => onClose(), [onClose])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

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
