import React, { useEffect, useState } from 'react'
import { OurPlatforms, WhatOurClientsSay, TradeTypes } from '../../pages/home/_lazy-load'
import TRADE_DUMMY from 'images/common/trade-type-dummy.png'
import PLATFORM_DUMMY from 'images/common/platforms-dummy.png'
import WCS_DUMMY from 'images/common/wcs-dummy.png'

const UseHandleLazyLoad = () => {
    const [has_scrolled, setScrolled] = useState(false)
    const [is_large_screen, setLargeScreen] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        if (window.innerHeight >= 895) {
            setLargeScreen(true)
        }
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onScroll = () => {
        if (!has_scrolled) {
            setScrolled(true)
        }
    }

    return (
        <>
            {(has_scrolled || is_large_screen) && (
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
                                <img
                                    src={WCS_DUMMY}
                                    style={{ marginLeft: '331px' }}
                                    alt="wcs-dummy"
                                />
                            </div>
                        }
                    />
                </>
            )}
        </>
    )
}

export default UseHandleLazyLoad
