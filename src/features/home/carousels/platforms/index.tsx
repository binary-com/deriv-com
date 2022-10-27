import React, { useCallback, useMemo } from 'react'
import styled from 'styled-components'
import Autoplay from 'embla-carousel-autoplay'
import { platforms_data } from './data'
import { TPlatformSmartContent } from './types'
import PlatformCarouselItem from './components/carousel.item'
import CarouselShadows from './components/carousel.shadows'
import SelectedOverlay from './components/carousel_selected.overlay'
import PlatformContentContainer from './components/desktop_carousel.content'
import { useCountryRule } from 'components/hooks/use-country-rule'
import useVisibleContent from 'components/hooks/use-visible-content'
import useInitCarousel from 'components/elements/michosel/use-init-carousel'
import Carousel from 'components/elements/michosel'
import useMediaQuery from 'components/hooks/use-media-query'
import device from 'themes/device'

const Container = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    @media ${device.tabletL} {
        width: 100%;
    }
`

const StyledCarouselContainer = styled(Carousel.Container)`
    height: 100%;
`

const StyledCarousel = styled(Carousel)`
    height: 640px;
    margin: 0 auto;

    @media ${device.tabletL} {
        width: 100%;
        min-height: 900px;
    }
`

const StyledSlide = styled(Carousel.Slide)`
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.tabletL} {
        min-width: 100%;
    }
`

const PlatformsCarousel = () => {
    const rules = useCountryRule()
    const is_smaller_than_Ltablet = useMediaQuery(device.tabletL)

    const auto_play = useMemo(() => {
        return Autoplay({
            delay: 3000,
            playOnInit: is_smaller_than_Ltablet ? true : !rules.is_eu,
        })
    }, [is_smaller_than_Ltablet, rules.is_eu])

    const { embla, emblaRef, mode } = useInitCarousel({
        options: {
            startIndex: 0,
            loop: false,
            align: is_smaller_than_Ltablet ? 'center' : 0.3,
            draggable: is_smaller_than_Ltablet ? true : false,
        },
        plugins: [auto_play],
        mode: is_smaller_than_Ltablet ? 'horizontal' : 'vertical',
    })

    const visible_data = useVisibleContent<TPlatformSmartContent>({
        config: rules,
        content: platforms_data,
    })

    const is_vertical = mode === 'vertical'

    const scrollHandler = useCallback(
        (index) => {
            if (embla && is_vertical) {
                embla.scrollTo(index)
            }
        },
        [embla, is_vertical],
    )

    return (
        <Container>
            <StyledCarousel
                embla={embla}
                config={{ mode, nav_offset: '60vw', nav_placement: 'start' }}
            >
                <StyledCarouselContainer>
                    {is_vertical && (
                        <>
                            <SelectedOverlay visible_data={visible_data} />
                            <CarouselShadows />
                        </>
                    )}
                    <Carousel.ViewPort ref={emblaRef}>
                        <Carousel.Slides>
                            {visible_data.map((item, index) => (
                                <StyledSlide key={item.id} onClick={() => scrollHandler(index)}>
                                    <PlatformCarouselItem item={item.data} />
                                </StyledSlide>
                            ))}
                        </Carousel.Slides>
                    </Carousel.ViewPort>
                    {!is_vertical && <Carousel.Nav />}
                </StyledCarouselContainer>
            </StyledCarousel>
            {is_vertical && visible_data && (
                <PlatformContentContainer embla={embla} items={visible_data} />
            )}
        </Container>
    )
}

export default PlatformsCarousel
