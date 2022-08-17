import { useState, useEffect } from 'react'
import { isBrowser } from 'common/utility'

export const useScroll = () => {
    const offset = isBrowser() && document.body.getBoundingClientRect()
    const [last_scroll_top, setLastScrollTop] = useState(0)
    const [body_offset, setBodyOffset] = useState(offset)
    const [scroll_y, setScrollY] = useState(body_offset.top)
    const [scroll_direction, setScrollDirection] = useState('')

    const listener = () => {
        const offset_top = -body_offset.top
        setBodyOffset(document.body.getBoundingClientRect())
        setScrollY(offset_top)
        setScrollDirection(last_scroll_top > offset_top ? 'up' : 'down')
        setLastScrollTop(offset_top)
    }

    useEffect(() => {
        window.addEventListener('scroll', listener)
        return () => {
            window.removeEventListener('scroll', listener)
        }
    })

    return {
        scroll_y,
        scroll_direction,
    }
}
