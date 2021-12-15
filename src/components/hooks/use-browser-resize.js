import { useState, useEffect } from 'react'
import { isBrowser } from 'common/utility'
import { size } from 'themes/device'

export const useBrowserResize = (maxSize) => {
    const [is_mobile, setMobile] = useState(false)
    const [width, setWidth] = useState(isBrowser() ? window.innerWidth : 0)
    const breakpoint = maxSize ? maxSize : size.tablet

    const handleResizeWindow = () => {
        setMobile(isBrowser() ? !!(width <= breakpoint) : false)
    }

    useEffect(() => {
        if (!isBrowser()) return false
        const handleResize = () => setWidth(window.innerWidth)
        handleResizeWindow()
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            handleResizeWindow()
        }
    })

    return [is_mobile]
}
