import { MouseEvent, useRef, useLayoutEffect } from 'react'

const useScrollToActiveTab = <T extends HTMLElement, U extends HTMLElement>(wrapper: T) => {
    const active_element_ref = useRef<U>(null)

    const clickOnActiveElement = (e: MouseEvent<U>) => {
        const item_position = e.currentTarget.offsetLeft + e.currentTarget.offsetWidth / 2
        const item_width = e.currentTarget.offsetWidth
        const container_width = wrapper.clientWidth

        let next_position = 0

        if (
            item_position - item_width / 2 < wrapper.scrollLeft ||
            item_position + item_width / 2 > wrapper.scrollLeft + container_width
        ) {
            next_position = item_position - container_width / 2 + item_width / 2
            next_position = Math.max(next_position, 0)
        } else {
            next_position = wrapper.scrollLeft
        }
        sessionStorage.setItem('next_item_position', String(next_position))
    }

    useLayoutEffect(() => {
        const item_position = +sessionStorage.getItem('next_item_position')
        if (wrapper) {
            if (item_position) {
                // If page load onClick
                wrapper.scrollLeft = item_position
                sessionStorage.removeItem('next_item_position')
            } else {
                // If page load from URL
                const active_element = active_element_ref?.current
                const screen_position = wrapper.scrollLeft + wrapper.clientWidth
                const active_item_position =
                    active_element?.offsetLeft + active_element?.offsetWidth
                if (active_item_position > screen_position) {
                    wrapper.scrollLeft = active_element.offsetLeft
                }
                // For RTL
                if (active_element?.offsetLeft < 0) {
                    wrapper.scrollLeft = active_element?.offsetLeft - active_element?.offsetWidth
                }
            }
        }
    }, [wrapper])

    return { active_element_ref, clickOnActiveElement }
}

export default useScrollToActiveTab
