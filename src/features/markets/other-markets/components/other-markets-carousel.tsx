import React, { useMemo } from 'react'
import styled from 'styled-components'
import Autoplay from 'embla-carousel-autoplay'
import { TOtherMarketsContent } from '../types'
import OtherMarketsCard from './other-markets-card'
import Carousel from 'components/elements/carousel'
import useInitCarousel from 'components/elements/carousel/use-init-carousel'

const StyledSlide = styled(Carousel.Slide)`
    min-width: 282px;
    height: 360px;
    margin: 12px;
    border-radius: 8px;
`

export type TOtherMarketsCarouselProps = {
    items: TOtherMarketsContent[]
}

const OtherMarketsCarousel = ({ items }: TOtherMarketsCarouselProps) => {
    const auto_play = useMemo(() => {
        return Autoplay({
            delay: 4000,
        })
    }, [])

    const { embla, emblaRef } = useInitCarousel({
        options: {
            align: 0.1,
            draggable: true,
            slidesToScroll: 1,
        },
        plugins: [auto_play],
        mode: 'horizontal',
    })

    return (
        <Carousel embla={embla}>
            <Carousel.Container>
                <Carousel.ViewPort ref={emblaRef}>
                    <Carousel.Slides>
                        {items?.map((item) => (
                            <StyledSlide key={item.id}>
                                <OtherMarketsCard item={item.data} />
                            </StyledSlide>
                        ))}
                    </Carousel.Slides>
                </Carousel.ViewPort>
            </Carousel.Container>
        </Carousel>
    )
}

export default OtherMarketsCarousel
