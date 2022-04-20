import React, { useEffect, useRef, useState } from 'react'
import { OurPlatforms, WhatOurClientsSay, TradeTypes } from '../../pages/home/_lazy-load'
import TRADE_DUMMY from 'images/common/trade-type-dummy.png'
import PLATFORM_DUMMY from 'images/common/platforms-dummy.png'
import WCS_DUMMY from 'images/common/wcs-dummy.png'

const UseHandleLazyLoad = () => {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const callbackFunction = (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
    }

    const options = {
        root: document.getElementById('market-fold'),
        rootMargin: '0px',
        threshold: 0.5,
    }
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)
        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])

    return (
        <div ref={containerRef}>
            <TradeTypes
                fallback={
                    <div>
                        <img
                            src={TRADE_DUMMY}
                            style={{ marginLeft: '331px' }}
                            alt="trade-type-dummy"
                        />
                    </div>
                }
            />
            <OurPlatforms
                fallback={
                    <div>
                        <img
                            src={PLATFORM_DUMMY}
                            style={{ marginLeft: '331px' }}
                            alt="platform-dummy"
                        />
                    </div>
                }
            />
            <WhatOurClientsSay
                fallback={
                    <div>
                        <img src={WCS_DUMMY} style={{ marginLeft: '331px' }} alt="wcs-dummy" />
                    </div>
                }
            />
        </div>
    )
}

export default UseHandleLazyLoad
