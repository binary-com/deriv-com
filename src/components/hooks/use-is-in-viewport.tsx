import React, { MutableRefObject, useEffect, useMemo, useState, useRef } from 'react'

function useIsInViewport(ref: MutableRefObject<HTMLDivElement>) {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const observer = useRef<IntersectionObserver>()

    // do this only once, on mount
    useEffect(() => {
        observer.current = new IntersectionObserver(([entry]) =>
            setIsIntersecting(entry.isIntersecting),
        )
    }, [])

    useEffect(() => {
        observer.current.observe(ref.current)

        return () => {
            observer.current.disconnect()
        }
    }, [ref, observer])

    return isIntersecting
}

export default useIsInViewport
