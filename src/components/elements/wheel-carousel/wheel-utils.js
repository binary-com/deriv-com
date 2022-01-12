const CIRCLE_DEGREES = 360
const WHEEL_ITEM_SIZE = 32
const WHEEL_ITEM_COUNT = 18
const WHEEL_ITEMS_IN_VIEW = 4

export const WHEEL_ITEM_RADIUS = CIRCLE_DEGREES / WHEEL_ITEM_COUNT
export const IN_VIEW_DEGREES = WHEEL_ITEM_RADIUS * WHEEL_ITEMS_IN_VIEW
export const WHEEL_RADIUS = Math.round(WHEEL_ITEM_SIZE / 2 / Math.tan(Math.PI / WHEEL_ITEM_COUNT))

const isInView = (wheelLocation, slidePosition) =>
    Math.abs(wheelLocation - slidePosition) < IN_VIEW_DEGREES

const getSlideCss = (embla, index, loop, slideCount, totalRadius, wheelRotation) => {
    const wheelLocation = embla.scrollProgress() * totalRadius
    const positionDefault = embla.scrollSnapList()[index] * totalRadius
    const positionLoopStart = positionDefault + totalRadius
    const positionLoopEnd = positionDefault - totalRadius

    let inView = false
    let angle = index * -WHEEL_ITEM_RADIUS

    if (isInView(wheelLocation, positionDefault)) {
        inView = true
    }

    if (loop && isInView(wheelLocation, positionLoopEnd)) {
        inView = true
        angle = -CIRCLE_DEGREES + (slideCount - index) * WHEEL_ITEM_RADIUS
    }

    if (loop && isInView(wheelLocation, positionLoopStart)) {
        inView = true
        angle = -(totalRadius % CIRCLE_DEGREES) - index * WHEEL_ITEM_RADIUS
    }

    if (inView) {
        return {
            opacity: 1,
            transform: `rotateX(${angle + wheelRotation}deg) translateZ(${WHEEL_RADIUS}px)`,
        }
    }

    return { opacity: 0, transform: 'none' }
}

export const getSlidesCss = (embla, loop, slideCount, totalRadius, wheelRotation) => {
    const styles = []
    for (let index = 0; index < slideCount; index += 1) {
        const style = embla
            ? getSlideCss(embla, index, loop, slideCount, totalRadius, wheelRotation)
            : {}
        styles.push(style)
    }
    return styles
}
