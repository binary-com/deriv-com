import React, { useMemo } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import styled from 'styled-components'
import { hero_carousel_content } from './data'
import { TSmartHeroContent } from './types'
import { useCountryRule } from 'components/hooks/use-country-rule'
import useVisibleContent from 'components/hooks/use-visible-content'
import useInitCarousel from 'components/elements/michosel/use-init-carousel'
import Carousel from 'components/elements/michosel'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'

const StyledHeader = styled(Header)`
    height: 36px;
    line-height: 36px;
`

const StyledCarousel = styled(Carousel)`
    max-width: auto;
    margin: 24px 0 32px;
    height: 36px;
`

const StyledSlide = styled(Carousel.Slide)`
    height: 36px;
    min-width: 100%;
`

const StyledCarouselContainer = styled(Carousel.Container)`
    height: 100%;
    width: 100%;
`

const HeroContentCarousel = () => {
    const rules = useCountryRule()

    const visible_data = useVisibleContent<TSmartHeroContent>({
        config: rules,
        content: hero_carousel_content,
    })

    const auto_play = useMemo(() => {
        return Autoplay({
            delay: 6000,
        })
    }, [])

    const { embla, emblaRef, mode } = useInitCarousel({
        options: {
            loop: true,
            draggable: false,
            speed: 7,
        },
        plugins: [auto_play],
        mode: 'vertical',
    })

    return (
        <StyledCarousel mode={mode} embla={embla} config={{ mode }}>
            <StyledCarouselContainer>
                <Carousel.ViewPort ref={emblaRef}>
                    <Carousel.Slides>
                        {visible_data?.map((item) => {
                            return (
                                <StyledSlide key={item.id}>
                                    <StyledHeader as="h3" type="sub-section-title" color="white">
                                        <Localize translate_text={item.data.text} />
                                    </StyledHeader>
                                </StyledSlide>
                            )
                        })}
                    </Carousel.Slides>
                </Carousel.ViewPort>
            </StyledCarouselContainer>
        </StyledCarousel>
    )
}

export default HeroContentCarousel
