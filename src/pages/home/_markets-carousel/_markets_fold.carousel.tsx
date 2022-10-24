import Autoplay from 'embla-carousel-autoplay'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { market_data } from './_data'
import { TMarketSmartContent, TUseStaticMarketImagesQuery } from './_type'
import MarketFoldCarouselItem from './_markets_carousel.item'
import Carousel from 'components/elements/michosel'
import useInitCarousel from 'components/elements/michosel/use-init-carousel'
import { useCountryRule } from 'components/hooks/use-country-rule'
import useVisibleContent from 'components/hooks/use-visible-content'
import device from 'themes/device'
import { Mobile } from 'components/containers/visibility'
import { useWindowSize } from 'components/hooks/use-window-size'
import useDynamicVisibleContent from 'components/hooks/use-dynamic-visible-content'

const StyledCarousel = styled(Carousel)`
    max-width: 100%;
    margin: 0 auto;
`

const StyledCarouselContainer = styled(Carousel.Container)`
    @media ${device.desktopL} {
        max-width: 1600px;
    }

    @media ${device.tablet} {
        max-width: 100%;
        max-height: 364px;
    }
    @media ${device.desktop} {
        max-width: 1210px;
    }
`

const StyledSlide = styled(Carousel.Slide)`
    height: auto;
    margin-inline: 8px;
    @media ${device.desktop} {
        margin-inline: 12px;
    }
`

const query = graphql`
    query {
        market_forex: file(relativePath: { eq: "home/market_forex.png" }) {
            ...fadeIn
        }
        market_synthetic_indices: file(relativePath: { eq: "home/market_synthetic_indices.png" }) {
            ...fadeIn
        }
        market_stocks_indices: file(relativePath: { eq: "home/market_stocks_indices.png" }) {
            ...fadeIn
        }
        market_crypto: file(relativePath: { eq: "home/market_crypto.png" }) {
            ...fadeIn
        }
        market_basket_indices: file(relativePath: { eq: "home/market_basket_indices.png" }) {
            ...fadeIn
        }
        market_commodities: file(relativePath: { eq: "home/market_commodities.png" }) {
            ...fadeIn
        }
    }
`

const MarketsFoldCarousel = () => {
    const image_data = useStaticQuery<TUseStaticMarketImagesQuery>(query)

    const auto_play = useMemo(() => {
        return Autoplay({
            delay: 3000,
        })
    }, [])

    const size = useWindowSize()
    const is_mobile = size.width < 768
    const rules = useCountryRule()

    const visible_data = useVisibleContent<TMarketSmartContent>({
        content: market_data,
        config: rules,
    })

    const { embla, emblaRef, mode } = useInitCarousel({
        options: {
            loop: true,
            containScroll: 'trimSnaps',
            slidesToScroll: 1,
            align: is_mobile ? 0.04 : 'center',
        },
        plugins: [auto_play],
        mode: 'horizontal',
    })

    return (
        <StyledCarousel embla={embla} config={{ mode }}>
            <StyledCarouselContainer>
                <Carousel.ViewPort ref={emblaRef}>
                    <Carousel.Slides>
                        {visible_data.map((item) => (
                            <StyledSlide key={item.id}>
                                <MarketFoldCarouselItem item={item.data} image_data={image_data} />
                            </StyledSlide>
                        ))}
                    </Carousel.Slides>
                </Carousel.ViewPort>
                <Mobile>
                    <Carousel.Nav />
                </Mobile>
            </StyledCarouselContainer>
        </StyledCarousel>
    )
}

export default MarketsFoldCarousel
