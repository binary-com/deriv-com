import Autoplay from 'embla-carousel-autoplay'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { market_data } from './data'
import { TMarketSmartContent, TUseStaticMarketImagesQuery } from './types'
import MarketFoldCarouselItem from './markets_carousel.item'
import Carousel from 'components/elements/carousel'
import useInitCarousel from 'components/elements/carousel/use-init-carousel'
import { useCountryRule } from 'components/hooks/use-country-rule'
import useVisibleContent from 'components/hooks/use-visible-content'
import device from 'themes/device'
import { Mobile } from 'components/containers/visibility'
import useMediaQuery from 'components/hooks/use-media-query'

const StyledCarousel = styled(Carousel)`
    width: 100%;
    margin: 0 auto;
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

    const is_smaller_than_tablet = useMediaQuery(device.tablet)

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
            align: is_smaller_than_tablet ? 0.04 : 'center',
        },
        plugins: [auto_play],
        mode: 'horizontal',
    })

    return (
        <StyledCarousel embla={embla} config={{ mode }}>
            <Carousel.Body
                ref={emblaRef}
                render_nav={() => (
                    <Mobile>
                        <Carousel.Nav />
                    </Mobile>
                )}
            >
                {visible_data.map((item) => (
                    <StyledSlide key={item.id}>
                        <MarketFoldCarouselItem item={item.data} image_data={image_data} />
                    </StyledSlide>
                ))}
            </Carousel.Body>
        </StyledCarousel>
    )
}

export default MarketsFoldCarousel
