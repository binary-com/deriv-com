import React, { ReactNode, useEffect, useState } from 'react'
import { DotLoader } from 'components/elements'

export const useHandleLazyLoad = (lazyTemplates: ReactNode, targetId: string, options: object) => {
    const [is_visible, setIsVisible] = useState(false)
    const [is_large_screen, setLargeScreen] = useState(false)

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
        if (window.innerHeight >= 950) {
            setLargeScreen(true)
        }
    }, [])

    const createObserver = () => {
        const target = document.querySelector(targetId)
        const observer = new IntersectionObserver(handleIntersect, options)
        observer.observe(target)
    }

    return is_visible || is_large_screen ? (
        <>{lazyTemplates}</>
    ) : (
        <>
            <DotLoader />
        </>
    )
}
