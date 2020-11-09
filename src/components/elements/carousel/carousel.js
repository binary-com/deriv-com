import React, { useState, useEffect, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import PropTypes from 'prop-types'
import {
    Embla,
    EmblaContainer,
    EmblaSlideInner,
    ViewPort,
    StyledButtonWrapper,
    ChevronRight,
    ChevronLeft,
} from './carousel-style'
import { useRecursiveTimeout } from 'components/hooks/use-recursive-timeout'

export const PrevButton = ({ enabled, onClick, color, style, is_reviews }) => (
    <StyledButtonWrapper
        onClick={onClick}
        disabled={!enabled}
        left
        style={style}
        is_reviews={is_reviews}
    >
        {color === 'black' ? (
            <ChevronLeft black />
        ) : color === 'red' ? (
            <ChevronLeft red />
        ) : (
            <ChevronLeft />
        )}
    </StyledButtonWrapper>
)

PrevButton.propTypes = {
    chevron_style: PropTypes.object,
    enabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export const NextButton = ({ enabled, onClick, color, style, is_reviews }) => (
    <StyledButtonWrapper
        onClick={onClick}
        disabled={!enabled}
        style={style}
        is_reviews={is_reviews}
    >
        {color === 'black' ? (
            <ChevronRight black />
        ) : color === 'red' ? (
            <ChevronRight red />
        ) : (
            <ChevronRight />
        )}
    </StyledButtonWrapper>
)

NextButton.propTypes = PrevButton.propTypes

export const Carousel = ({
    children,
    options,
    container_style,
    slide_style,
    view_port,
    chevron_style,
    has_autoplay,
    autoplay_interval,
}) => {
    const [emblaRef, embla] = useEmblaCarousel(options)
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const autoplay = useCallback(() => {
        if (has_autoplay) {
            if (!embla) return
            if (embla.canScrollNext()) {
                embla.scrollNext()
            } else {
                embla.scrollTo(0)
            }
        }
    }, [embla])

    const { play, stop } = useRecursiveTimeout(autoplay, autoplay_interval)

    const scrollPrev = useCallback(() => {
        if (!embla) return
        embla && embla.scrollPrev()
        stop()
    }, [embla, stop])

    const scrollNext = useCallback(() => {
        if (!embla) return
        embla && embla.scrollNext()
        stop()
    }, [embla, stop])

    const onSelect = useCallback(() => {
        if (!embla) return
        setPrevBtnEnabled(embla.canScrollPrev())
        setNextBtnEnabled(embla.canScrollNext())
    }, [embla])

    useEffect(() => {
        if (!embla) return
        onSelect()
        embla.on('select', onSelect)
        embla.on('pointerDown', stop)
    }, [embla, onSelect, stop])

    useEffect(() => {
        play()
    }, [play])

    const chevron_left = chevron_style?.chevron_left
    const chevron_right = chevron_style?.chevron_right
    const chevron_color = chevron_style?.chevron_color
    const is_arrow = prevBtnEnabled || nextBtnEnabled

    return (
        <div style={container_style}>
            <Embla>
                <ViewPort style={view_port} ref={emblaRef}>
                    <EmblaContainer>
                        {children.map((child, idx) => (
                            <div key={idx} style={slide_style}>
                                <EmblaSlideInner>{child}</EmblaSlideInner>
                            </div>
                        ))}
                    </EmblaContainer>
                </ViewPort>
                {chevron_color && is_arrow && (
                    <PrevButton
                        color={chevron_color}
                        onClick={scrollPrev}
                        enabled={prevBtnEnabled}
                        style={chevron_left}
                        is_reviews={chevron_color === 'black'}
                    />
                )}
                {chevron_color && is_arrow && (
                    <NextButton
                        color={chevron_color}
                        onClick={scrollNext}
                        enabled={nextBtnEnabled}
                        style={chevron_right}
                        is_reviews={chevron_color === 'black'}
                    />
                )}
            </Embla>
        </div>
    )
}

Carousel.propTypes = {
    autoplay_interval: PropTypes.number,
    chevron_style: PropTypes.object,
    children: PropTypes.array,
    container_style: PropTypes.object,
    has_autoplay: PropTypes.bool,
    options: PropTypes.object,
    slide_style: PropTypes.object,
    view_port: PropTypes.object,
}
