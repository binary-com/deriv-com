import { useState, useEffect } from 'react'

export const useScroll = () => {
    const [scroll_y, setScrollY] = useState(0)
    const [last_scroll_top, setLastScrollTop] = useState(0)
    const [scroll_direction, setScrollDirection] = useState('')

    useEffect(() => {
        const listener = () => {
            const { scrollY } = window
            setScrollY(scrollY)
            setScrollDirection(last_scroll_top > scrollY ? 'up' : 'down')
            setLastScrollTop(scrollY)
        }

        window.addEventListener('scroll', listener)
        return () => {
            window.removeEventListener('scroll', listener)
        }
    }, [last_scroll_top])

    return {
        scroll_y,
        scroll_direction,
    }
}
