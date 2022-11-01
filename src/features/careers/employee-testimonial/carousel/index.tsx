import React, { useMemo } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import styled from 'styled-components'
import { employeee_testimonials } from './data'
import EmployeeSlide from './components/employee.slide'
import useInitCarousel from 'components/elements/carousel/use-init-carousel'
import Carousel from 'components/elements/carousel'
import { ChevronRight, ChevronLeft } from 'components/elements/carousel/carousel.styles'
import useMediaQuery from 'components/hooks/use-media-query'
import device from 'themes/device'

const StyledCarouselContainer = styled(Carousel)`
    max-width: 105rem;
    margin: 0 auto;
`

const StyledSlide = styled(Carousel.Slide)`
    min-width: 100%;
`

const StyledChevronContainer = styled.div`
    width: 40px;
    height: 40px;
    background: #ffffff;
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1288);
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    display: flex;
`

const TestimonialCarousel = () => {
    const is_smaller_than_Ltablet = useMediaQuery(device.tabletL)

    const auto_play = useMemo(() => {
        return Autoplay({
            delay: 4000,
        })
    }, [])

    const { embla, emblaRef } = useInitCarousel({
        options: {
            loop: false,
            containScroll: 'trimSnaps',
        },
        plugins: [auto_play],
        mode: 'horizontal',
    })
    return (
        <StyledCarouselContainer
            embla={embla}
            config={{
                nav_offset: -10,
                controls_placement: 'inside',
                controls_offset: 0,
                controls_active_color: '#000000',
            }}
        >
            <Carousel.Container>
                <Carousel.ViewPort ref={emblaRef}>
                    <Carousel.Slides>
                        {employeee_testimonials.map((item) => {
                            return (
                                <StyledSlide key={item.name}>
                                    <EmployeeSlide item={item} />
                                </StyledSlide>
                            )
                        })}
                    </Carousel.Slides>
                </Carousel.ViewPort>
                {!is_smaller_than_Ltablet && (
                    <Carousel.Controls
                        render_next_button={() => {
                            return (
                                <StyledChevronContainer>
                                    <ChevronRight />
                                </StyledChevronContainer>
                            )
                        }}
                        render_prev_button={() => {
                            return (
                                <StyledChevronContainer>
                                    <ChevronLeft />
                                </StyledChevronContainer>
                            )
                        }}
                    />
                )}

                <Carousel.Nav />
            </Carousel.Container>
        </StyledCarouselContainer>
    )
}

export default TestimonialCarousel
