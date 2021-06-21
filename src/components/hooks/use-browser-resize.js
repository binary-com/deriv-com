import { useState, useEffect } from 'react'
import { isBrowser } from 'common/utility'
import { size } from 'themes/device'

export const useBrowserResize = () => {
    const [is_mobile, setMobile] = useState(false)
    const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)

    useEffect(() => {
        if (!isBrowser) return false
        const handleResize = () => setWidth(window.innerWidth)
        handleResizeWindow()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            handleResizeWindow()
        }
    })

    const handleResizeWindow = () => {
        setMobile(isBrowser() ? !!(width <= size.tablet) : false)
    }

    return [is_mobile]
}
