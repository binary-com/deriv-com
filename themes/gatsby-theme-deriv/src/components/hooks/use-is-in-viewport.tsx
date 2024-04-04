import React, { MutableRefObject, useEffect, useMemo, useState, useRef } from 'react'

function useIsInViewport(ref: MutableRefObject<HTMLDivElement>) {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const observer = useRef<IntersectionObserver>()

    useEffect(() => {
        observer.current = new IntersectionObserver(([entry]) =>
            setIsIntersecting(entry.isIntersecting),
        )

        observer.current.observe(ref.current)

        return () => observer.current.disconnect()
    }, [ref.current, observer.current])

    return isIntersecting
}

export default useIsInViewport
