import React from 'react'
import styled from 'styled-components'
import { calculators } from './data'
import CalculatorCard from './components/calculator.card'
import useInitCarousel from 'components/elements/michosel/use-init-carousel'
import Carousel from 'components/elements/michosel'

const StyledCarousel = styled(Carousel)`
    max-width: 588px;
`

const StyledSlide = styled(Carousel.Slide)`
    min-width: 100%;
`

const CalculatorsCarousel = () => {
    const { embla, emblaRef } = useInitCarousel({
        options: {
            loop: false,
            containScroll: 'trimSnaps',
        },
        mode: 'horizontal',
    })

    return (
        <StyledCarousel
            embla={embla}
            config={{
                nav_offset: 25,
                controls_offset: -5,
            }}
        >
            <Carousel.Container>
                <Carousel.ViewPort ref={emblaRef}>
                    <Carousel.Slides>
                        {calculators.map((item) => {
                            return (
                                <StyledSlide key={item.name}>
                                    <CalculatorCard item={item} />
                                </StyledSlide>
                            )
                        })}
                    </Carousel.Slides>
                    <Carousel.Controls />
                </Carousel.ViewPort>
                <Carousel.Nav />
            </Carousel.Container>
        </StyledCarousel>
    )
}

export default CalculatorsCarousel
