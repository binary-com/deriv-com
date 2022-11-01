import { TOffset } from './carousel.types'

export const getOffsetValue = (offset: TOffset) => {
    return typeof offset === 'number' ? `${offset}px` : offset
}
