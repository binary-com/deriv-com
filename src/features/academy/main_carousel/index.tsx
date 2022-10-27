import React, { useMemo } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import styled from 'styled-components'
import HeroBanner from './components/hero_banner'
import device from 'themes/device'
import useInitCarousel from 'components/elements/michosel/use-init-carousel'
import Carousel from 'components/elements/michosel'
import { AcademyIndexFragment } from 'types/graphql.types'
import { Flex } from 'components/containers'

const Container = styled.div`
    display: flex;
    width: 90%;
    background-color: var(--color-white);
    flex-direction: column;
    overflow: hidden;
    max-width: 1200px;
    padding-top: 40px;
    margin: 0 auto;

    @media ${device.desktopL} {
        max-width: 1600px;
    }
`

const CarouselNavContainer = styled(Carousel.NavigationContainer)`
    align-items: flex-start;
    justify-content: flex-start;
    left: 102px;
    bottom: 20px;
    width: unset;
    @media ${device.tablet} {
        left: 16px;
    }
`

const StyledSlide = styled(Carousel.Slide)`
    min-width: 100%;
`

type TAcademyMainCarousel = {
    banner_data: AcademyIndexFragment['directus']['homepage_banners']
}

const AcademyMainCarousel = ({ banner_data }: TAcademyMainCarousel) => {
    const auto_play = useMemo(() => {
        return Autoplay({
            delay: 6000,
        })
    }, [])

    const { embla, emblaRef } = useInitCarousel({
        options: {
            loop: true,
        },
        plugins: [auto_play],
        mode: 'horizontal',
    })

    return (
        <Container>
            <Carousel embla={embla}>
                <Carousel.Container>
                    <Carousel.ViewPort ref={emblaRef}>
                        <Carousel.Slides>
                            {banner_data?.map((page_data) => {
                                return (
                                    <StyledSlide key={page_data.id}>
                                        <Flex>
                                            <HeroBanner
                                                imageData={
                                                    page_data.image?.imageFile.childImageSharp
                                                        .gatsbyImageData
                                                }
                                                imageAlt={page_data?.image?.description}
                                                title={page_data.heading}
                                                description={page_data.sub_heading}
                                                href={page_data.link}
                                                cta_text={page_data.button_text}
                                            />
                                        </Flex>
                                    </StyledSlide>
                                )
                            })}
                        </Carousel.Slides>
                        <CarouselNavContainer>
                            <Carousel.Navigation />
                        </CarouselNavContainer>
                    </Carousel.ViewPort>
                </Carousel.Container>
            </Carousel>
        </Container>
    )
}

export default AcademyMainCarousel
