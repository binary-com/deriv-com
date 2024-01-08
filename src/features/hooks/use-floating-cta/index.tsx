import { useEffect, useRef, useState } from 'react'
import { useIntersectionObserver, useWindowSize } from 'usehooks-ts'
import useAuthCheck from 'components/hooks/use-auth-check'

const useFloatingCta = () => {
    const [is_logged_in] = useAuthCheck()
    const [visibilityPercentage, setVisibilityPercentage] = useState(100)
    const targetRef = useRef<HTMLButtonElement | null>(null)
    const { width } = useWindowSize()
    const entry = useIntersectionObserver(targetRef, {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '-80px 0px 0px 0px',
    })

    useEffect(() => {
        if (width < 601 && !is_logged_in) {
            const targetHeight = entry?.boundingClientRect?.height
            const intersectionHeight = entry?.intersectionRect?.height
            const percentage = (intersectionHeight / targetHeight) * 100
            setVisibilityPercentage(percentage)
        }
    }, [entry?.boundingClientRect?.height, entry?.intersectionRect?.height, width, is_logged_in])

    return { visibilityPercentage, targetRef }
}

export default useFloatingCta
