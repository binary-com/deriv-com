import { useState, useEffect } from 'react'
import { isBrowser } from 'common/utility'

export const useScroll = () => {
    const offset = isBrowser() && document.body.getBoundingClientRect()
    const [lastScrollTop, setLastScrollTop] = useState(0)
    const [bodyOffset, setBodyOffset] = useState(offset)
    const [scrollY, setScrollY] = useState(bodyOffset.top)
    const [scrollDirection, setScrollDirection] = useState('')

    const listener = () => {
        setBodyOffset(document.body.getBoundingClientRect())
        setScrollY(-bodyOffset.top)
        setScrollDirection(lastScrollTop > -bodyOffset.top ? 'up' : 'down')
        setLastScrollTop(-bodyOffset.top)
    }

    useEffect(() => {
        window.addEventListener('scroll', listener)
        return () => {
            window.removeEventListener('scroll', listener)
        }
    })

    return {
        scrollY,
        scrollDirection,
    }
}
