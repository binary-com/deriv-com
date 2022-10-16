import React, { ReactNode, useEffect, useState } from 'react'
import { DotLoader } from 'components/elements'

export const useHandleLazyLoad = (lazyTemplates: ReactNode, targetId: string, options: object) => {
    const [is_visible, setIsVisible] = useState(false)
    const [is_large_screen, setLargeScreen] = useState(false)

    const handleIntersect = (entries, observer) => {
        const [entry] = entries
        if (entry.isIntersecting) {
            setIsVisible(entry.isIntersecting)
            observer.disconnect()
        }
    }

    useEffect(() => {
        const target = document.querySelector(targetId)
        const observer = new IntersectionObserver(handleIntersect, options)
        observer.observe(target)
        if (window.innerHeight >= 990) {
            setLargeScreen(true)
        }
    }, [targetId, options])

    return is_visible || is_large_screen ? (
        <>{lazyTemplates}</>
    ) : (
        <>
            <DotLoader />
        </>
    )
}
