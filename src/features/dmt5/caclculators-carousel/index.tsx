import React from 'react'
import styled from 'styled-components'
import { calculators } from './data'
import CalculatorCard from './components/calculator.card'
import useInitCarousel from 'components/elements/carousel/use-init-carousel'
import Carousel from 'components/elements/carousel'

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
                controls_offset: 25,
            }}
        >
            <Carousel.Body
                ref={emblaRef}
                render_controls={() => <Carousel.Controls />}
                render_nav={() => <Carousel.Nav />}
            >
                {calculators.map((item) => {
                    return (
                        <StyledSlide key={item.name}>
                            <CalculatorCard item={item} />
                        </StyledSlide>
                    )
                })}
            </Carousel.Body>
        </StyledCarousel>
    )
}

export default CalculatorsCarousel
