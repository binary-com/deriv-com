import React, { useState, useEffect, useMemo } from 'react'
import { hero_typewriter } from './hero-content.module.scss'
import dclsx from 'features/utils/dclsx'
import { localize } from 'components/localization'

const CustomTypewriter = () => {
    const textArray: string[] = useMemo(
        () => [
            localize('_t_Forex_t_'),
            localize('_t_Cryptocurrencies_t_'),
            localize('_t_Stocks & indices_t_'),
            localize('_t_Commodities_t_'),
            localize('_t_Derived Indices_t_'),
        ],
        [],
    )

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [displayedText, setDisplayedText] = useState<string>('')
    const [typing, setTyping] = useState<boolean>(true)

    useEffect(() => {
        const typingInterval = setTimeout(
            () => {
                if (typing && displayedText.length < textArray[currentIndex].length) {
                    setDisplayedText(
                        (prevText) => prevText + textArray[currentIndex][prevText.length],
                    )
                } else if (typing && displayedText.length === textArray[currentIndex].length) {
                    setTyping(false)
                } else if (!typing && displayedText.length > 0) {
                    setDisplayedText((prevText) => prevText.slice(0, prevText.length - 1))
                } else if (!typing && displayedText.length === 0) {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length)
                    setTyping(true)
                }
            },
            typing ? 100 : 50,
        )

        return () => {
            clearTimeout(typingInterval)
        }
    }, [currentIndex, displayedText, textArray, typing])

    return (
        <div className={hero_typewriter}>
            <span
                className={dclsx(
                    'heading',
                    'heading-large',
                    'typography-weight-bold',
                    'typography-color-primary',
                )}
            >
                {displayedText}
            </span>
        </div>
    )
}

export default CustomTypewriter
