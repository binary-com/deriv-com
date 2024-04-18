import React, { ReactNode, useContext, useEffect, useRef, useState } from 'react'
import { useIntersectionObserver, useWindowSize } from 'usehooks-ts'
import FloatingCtaContext from './cta.context'
import useAuthCheck from 'components/hooks/use-auth-check'
import { useShowCfdBanner } from 'components/hooks/use-show-cfd-banner'

type TFloatingCtaProps = {
    children: ReactNode
}

const FloatingCtaProvider = ({ children }: TFloatingCtaProps) => {
    const show_banner = useShowCfdBanner()
    const [visibilityPercentage, setVisibilityPercentage] = useState(100)
    const [is_logged_in] = useAuthCheck()
    const entryRef = useRef<HTMLButtonElement | null>(null)
    const exitRef = useRef<HTMLDivElement | null>(null)
    const { width } = useWindowSize()
    const entry = useIntersectionObserver(entryRef, {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: show_banner ? '-140px 0px 0px 0px' : '-80px 0px 0px 0px',
    })
    const exit = useIntersectionObserver(exitRef, {
        threshold: 0,
    })
    const isExitVisible = !!exit?.isIntersecting

    useEffect(() => {
        const isScrollThroughTarget = entry?.rootBounds?.height > entry?.boundingClientRect?.top
        if (isScrollThroughTarget && width < 1024 && !is_logged_in) {
            const targetHeight = entry?.boundingClientRect?.height
            const intersectionHeight = entry?.intersectionRect?.height
            const percentage = (intersectionHeight / targetHeight) * 100
            if (isExitVisible) {
                setVisibilityPercentage(100)
            } else {
                setVisibilityPercentage(percentage)
            }
        }
    }, [
        entry?.rootBounds?.height,
        entry?.boundingClientRect?.top,
        entry?.boundingClientRect?.height,
        entry?.intersectionRect?.height,
        width,
        is_logged_in,
        isExitVisible,
    ])

    return (
        <FloatingCtaContext.Provider
            value={{
                entryRef,
                visibilityPercentage,
                exitRef,
            }}
        >
            {children}
        </FloatingCtaContext.Provider>
    )
}

export const useFloatingCtaContext = () => useContext(FloatingCtaContext)

export default FloatingCtaProvider
