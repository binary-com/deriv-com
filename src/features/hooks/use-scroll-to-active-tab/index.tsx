import { useEffect, useLayoutEffect, MouseEvent } from 'react'
import { useInView } from 'react-intersection-observer'

const useScrollToActiveTab = <T extends HTMLElement, U extends HTMLElement>(wrapper: T) => {
    const {
        ref: active_element_ref,
        inView: activeInView,
        entry,
    } = useInView({ threshold: 1, triggerOnce: true })

    const clickOnActiveElement = (e: MouseEvent<U>) => {
        const item_position = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2
        const screen_position = wrapper.scrollLeft + wrapper.clientWidth
        let next_position = 0

        // Check if the item is at least half visible in the container
        if (item_position > screen_position || item_position < wrapper.scrollLeft) {
            next_position = e.currentTarget.offsetLeft
        } else {
            next_position = wrapper.scrollLeft
        }
        sessionStorage.setItem('next_item_position', String(next_position))
    }

    useEffect(() => {
        // If page load onClick
        if (wrapper) {
            const item_position = +sessionStorage.getItem('next_item_position')
            wrapper.scrollLeft = item_position
            sessionStorage.removeItem('next_item_position')
        }
    }, [wrapper])

    useLayoutEffect(() => {
        // If page load from URL
        function pageLoad() {
            if (!activeInView && entry) {
                wrapper.scrollLeft = entry.boundingClientRect.left
            }
        }
        window.addEventListener('load', pageLoad)
        return () => window.removeEventListener('load', pageLoad)
    }, [entry])

    return { active_element_ref, clickOnActiveElement }
}

export default useScrollToActiveTab
