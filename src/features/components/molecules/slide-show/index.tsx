import React, { useState, useEffect, ReactElement } from 'react'
import * as styles from './slide-show.module.scss'
import dclsx from 'features/utils/dclsx'

type SlideshowItemProps = {
    key: string
    image: ReactElement
}
type SlideshowItemArrayProps = {
    items: SlideshowItemProps[]
}

const Slideshow = ({ items }: SlideshowItemArrayProps) => {
    const [current_image_index, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % items.length)
        }, 2500) // Adjust the interval between slides here (in milliseconds)

        return () => {
            clearInterval(intervalId)
        }
    }, [items.length])

    return (
        <div className={dclsx(styles.slideshow)}>
            {items.map((item, index) => (
                <div
                    className={dclsx(
                        styles.slide,
                        ` ${index === current_image_index ? styles.fadeIn : styles.fadeOut}`,
                    )}
                    key={item.key}
                >
                    {item.image}
                </div>
            ))}
        </div>
    )
}

export default Slideshow
