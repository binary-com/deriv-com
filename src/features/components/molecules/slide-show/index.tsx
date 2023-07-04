import React, { useState, useEffect, ReactNode } from 'react'
import Image1 from '../../../../images/common/home/hero_1.png'
import Image2 from '../../../../images/common/home/hero_2.png'
import Image3 from '../../../../images/common/home/hero_3.png'
import Image4 from '../../../../images/common/home/hero_4.png'
import * as styles from './slide-show.module.scss'
import dclsx from 'features/utils/dclsx'

const Slideshow: React.FC = () => {
    const images = [Image1, Image2, Image3, Image4]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000) // Adjust the interval between slides here (in milliseconds)

        return () => {
            clearInterval(intervalId)
        }
    }, [images])

    return (
        <div className={dclsx(styles.slideshow)}>
            {images.map((image, index) => (
                <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    key={index}
                    className={dclsx(
                        styles.slide,
                        ` ${index === currentImageIndex ? styles.fadeIn : styles.fadeOut}`,
                    )}
                />
            ))}
        </div>
    )
}

export default Slideshow
