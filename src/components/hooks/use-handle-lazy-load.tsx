import React, { useEffect, useState } from 'react'
import { OurPlatforms, WhatOurClientsSay, TradeTypes } from '../../pages/home/_lazy-load'
import TRADE_DUMMY from 'images/common/trade-type-dummy.png'
import PLATFORM_DUMMY from 'images/common/platforms-dummy.png'
import WCS_DUMMY from 'images/common/wcs-dummy.png'

const UseHandleLazyLoad = () => {
    const [isVisible, setIsVisible] = useState(false)
    const handleIntersect = (entries, observer) => {
        const [entry] = entries
        if (typeof entry.isVisible === 'undefined') {
            // The browser doesn't support Intersection Observer v2, falling back to v1 behavior.
            setIsVisible(entry.isIntersecting)
            observer.disconnect()
            return
        }
        if (entry.isIntersecting) {
            setIsVisible(entry.isIntersecting)
            observer.disconnect()
        }
    }
    useEffect(() => {
        createObserver()
    }, [])

    const createObserver = () => {
        const target = document.querySelector('#market-fold')
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        }

        const observer = new IntersectionObserver(handleIntersect, options)
        observer.observe(target)
    }

    return (
        isVisible && (
            <>
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
            </>
        )
    )
}

export default UseHandleLazyLoad
