import React, { useState, useEffect } from 'react'
import Background from 'components/elements/background-image'
import useBreakpoints from 'components/hooks/use-breakpoints'

type TProps = {
    images: string[]
}

const InfiniteSlideshow: React.FC<React.PropsWithChildren<TProps>> = ({ images, children }) => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
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
        let intervalId: ReturnType<typeof setTimeout>
        if (imageDataSize > 1) {
            intervalId = setTimeout(() => {
                setCurrentImageIndex((currentImageIndex + 1) % imageDataSize)
            }, 3000)
        }
        return () => clearTimeout(intervalId)
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
