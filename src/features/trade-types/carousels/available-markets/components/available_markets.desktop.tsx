import React from 'react'
import styled from 'styled-components'
import { TAvailableMarketSmartContent } from '../types'
import MarketItemCard from './market_item.card'
import { Carousel } from 'components/elements'
import useInitCarousel from 'components/elements/carousel/use-init-carousel'
import { Container } from 'components/containers'
import device from 'themes/device'
import { ChevronRight, ChevronLeft } from 'components/elements/carousel/carousel.styles'

const SmallContainer = styled(Container)`
    width: 60%;
    max-width: 62.5rem;

    @media ${device.desktop} {
        max-width: 800px;
    }
    @media ${device.laptopL} {
        width: 60%;
    }
    @media ${device.desktopL} {
        max-width: 1000px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

const Wrapper = styled(SmallContainer)`
    width: 70%;
    position: relative;

    @media (max-width: 770px) {
        width: 81%;
    }
    @media (max-width: 680px) {
        display: none;
    }
`

const StyledCarouselContainer = styled(Carousel)`
    width: 100%;
    margin: 0 auto;
    position: relative;
`

const StyledSlide = styled(Carousel.Slide)`
    flex: 0 0 50%;
    margin: 4rem 0;
`

const Background = styled.div`
    width: 100%;
    background: var(--color-green-2);
    border-radius: 16px;
    height: 15.4rem;
    position: absolute;
    top: 0;
`

const StyledChevronContainer = styled.div`
    width: 18px;
    height: 18px;

    & svg {
        width: 16px;
        height: 16px;
    }

    justify-content: center;
    align-items: center;
    display: flex;
`

interface IDesktopAvailableMarketsProps<T> {
    items: T[]
}

const DesktopAvailableMarkets = <T extends TAvailableMarketSmartContent>({
    items,
}: IDesktopAvailableMarketsProps<T>) => {
    const is_control_enabled = items?.length > 2

    const { embla, emblaRef } = useInitCarousel({
        options: {
            loop: false,
            align: 'start',
            containScroll: 'trimSnaps',
            draggable: is_control_enabled,
        },
    })

    return (
        <Wrapper>
            <Background />
            <StyledCarouselContainer
                embla={embla}
                config={{
                    controls_offset: 10,
                }}
            >
                <Carousel.Body
                    ref={emblaRef}
                    render_controls={() => {
                        return is_control_enabled ? (
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
                        ) : null
                    }}
                >
                    {items.map((item) => {
                        return (
                            <StyledSlide key={item.id}>
                                <MarketItemCard item={item} />
                            </StyledSlide>
                        )
                    })}
                </Carousel.Body>
            </StyledCarouselContainer>
        </Wrapper>
    )
}

export default DesktopAvailableMarkets
