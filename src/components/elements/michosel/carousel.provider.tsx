import type { EmblaCarouselType } from 'embla-carousel-react'
import React, { ReactNode } from 'react'
import { TCarouselConfig, TCarouselContent } from './carousel.types'

export const CarouselContext = React.createContext<TCarouselContent>({})

type TCarouselProviderProps = {
    embla: EmblaCarouselType
    config?: TCarouselConfig
    children: ReactNode
}

const Provider = ({ embla, children, config }: TCarouselProviderProps) => {
    return <CarouselContext.Provider value={{ embla, config }}>{children}</CarouselContext.Provider>
}

export default Provider
