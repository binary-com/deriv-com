import type { EmblaOptionsType, EmblaPluginType } from 'embla-carousel-react'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useMemo } from 'react'
import { TCarouselMode } from './carousel.types'

type TUseInitCarousel = {
    options?: EmblaOptionsType
    plugins?: EmblaPluginType[]
    mode?: TCarouselMode
}

const useInitCarousel = ({ options, plugins, mode = 'horizontal' }: TUseInitCarousel) => {
    const [emblaRef, embla] = useEmblaCarousel(options, plugins)

    const carousel_axis = useMemo(() => {
        return mode === 'horizontal' ? 'x' : 'y'
    }, [mode])

    useEffect(() => {
        if (embla) {
            embla.reInit({ ...options, axis: carousel_axis }, plugins)
        }
    }, [embla, options, plugins, carousel_axis])

    return { emblaRef, embla, mode }
}

export default useInitCarousel
