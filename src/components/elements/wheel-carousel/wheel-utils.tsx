import { EmblaCarouselType } from 'embla-carousel-react'

const CIRCLE_DEGREES = 360
const WHEEL_ITEM_SIZE = 32
const WHEEL_ITEM_COUNT = 18
const WHEEL_ITEMS_IN_VIEW = 4

export const WHEEL_ITEM_RADIUS = CIRCLE_DEGREES / WHEEL_ITEM_COUNT
export const IN_VIEW_DEGREES = WHEEL_ITEM_RADIUS * WHEEL_ITEMS_IN_VIEW
export const WHEEL_RADIUS = Math.round(WHEEL_ITEM_SIZE / 2 / Math.tan(Math.PI / WHEEL_ITEM_COUNT))

const isInView = (wheel_location, slide_position): boolean =>
    Math.abs(wheel_location - slide_position) < IN_VIEW_DEGREES

const getStyle = (
    embla: EmblaCarouselType,
    index,
    loop,
    slide_count,
    total_radius,
    wheel_rotation,
) => {
    const wheel_location = embla.scrollProgress() * total_radius
    const default_position = embla.scrollSnapList()[index] * total_radius
    const loop_start_position = default_position + total_radius
    const loop_end_position = default_position - total_radius

    let inView = false
    let angle = index * -WHEEL_ITEM_RADIUS

    if (isInView(wheel_location, default_position)) {
        inView = true
    }

    if (loop && isInView(wheel_location, loop_end_position)) {
        inView = true
        angle = -CIRCLE_DEGREES + (slide_count - index) * WHEEL_ITEM_RADIUS
    }

    if (loop && isInView(wheel_location, loop_start_position)) {
        inView = true
        angle = -(total_radius % CIRCLE_DEGREES) - index * WHEEL_ITEM_RADIUS
    }

    if (inView) {
        return {
            opacity: 1,
            transform: `rotateX(${angle + wheel_rotation}deg) translateZ(${WHEEL_RADIUS}px)`,
        }
    }
    return { opacity: 0, transform: 'none' }
}

export const getSlideStyles = (
    embla: EmblaCarouselType,
    loop,
    slide_count,
    total_radius,
    wheel_rotation,
) => {
    const styles = []
    for (let index = 0; index < slide_count; index++) {
        const style = embla
            ? getStyle(embla, index, loop, slide_count, total_radius, wheel_rotation)
            : {}
        styles.push(style)
    }
    return styles
}
