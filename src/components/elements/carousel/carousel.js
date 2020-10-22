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
}) => {
    const [emblaRef, embla] = useEmblaCarousel(options)
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

    const onSelect = useCallback(() => {
        if (!embla) return
        setPrevBtnEnabled(embla.canScrollPrev())
        setNextBtnEnabled(embla.canScrollNext())
    }, [embla])

    useEffect(() => {
        if (!embla) return
        embla.on('select', onSelect)
        onSelect()
    }, [embla, onSelect])

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
    chevron_style: PropTypes.object,
    children: PropTypes.array,
    container_style: PropTypes.object,
    options: PropTypes.object,
    slide_style: PropTypes.object,
    view_port: PropTypes.object,
}
