import { useContext } from 'react'
import { CarouselContext } from './carousel.provider'

const useCarousel = () => {
    return useContext(CarouselContext)
}

export default useCarousel
