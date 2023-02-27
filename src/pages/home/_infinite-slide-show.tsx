import React, { useState, useEffect, ReactNode } from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import Background from 'components/elements/background-image'
import useBreakpoints from 'components/hooks/use-breakpoints'

interface Props {
    images: string[]
    children?: ReactNode
}

interface State {
    currentImageIndex: number
    currentImageName: string
}

const InfiniteSlideshow: React.FC<Props> = ({ images, children }) => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const [currentImageIndex, setCurrentImageIndex] = useState<State['currentImageIndex']>(0)
    const imageDataSize = Object.keys(images).length

    const CustomBGStyles = {
        display: 'flex',
        padding: is_mobile_or_tablet ? 'calc(4rem) 0px' : 'calc(7rem + 80px) 0',
        backgroundSize: 'cover',
        backgroundPosition: 'top right',
        height: '100vh',
        justifyContent: 'center',
        alignItems: is_mobile_or_tablet ? 'end' : 'center',
    }

    useEffect(() => {
        if (imageDataSize > 1) {
            const intervalId = setInterval(() => {
                setCurrentImageIndex((currentImageIndex + 1) % imageDataSize)
            }, 3000)
            return () => clearInterval(intervalId)
        }
    }, [images, currentImageIndex, imageDataSize])

    return (
        <Background
            data={images['image_' + currentImageIndex] || images['image_' + imageDataSize]}
            style={CustomBGStyles}
        >
            {children}
        </Background>
    )
}

export default InfiniteSlideshow
