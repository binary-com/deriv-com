import React, { useState, useEffect, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel-react'
import PropTypes from 'prop-types'
import {
    Embla,
    EmblaContainer,
    EmblaSlideInner,
    StyledButtonWrapper,
    ChevronRight,
    ChevronLeft,
} from './carousel-style'

export const PrevButton = ({ enabled, onClick, chevron_style }) => (
    <StyledButtonWrapper onClick={onClick} disabled={!enabled} style={chevron_style}>
        {chevron_style ? <ChevronLeft /> : <ChevronLeft black />}
    </StyledButtonWrapper>
)

PrevButton.propTypes = {
    chevron_style: PropTypes.object,
    enabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export const NextButton = ({ enabled, onClick, chevron_style }) => (
    <StyledButtonWrapper onClick={onClick} disabled={!enabled} style={chevron_style}>
        {chevron_style ? <ChevronRight /> : <ChevronRight black />}
    </StyledButtonWrapper>
)

NextButton.propTypes = PrevButton.propTypes

export const Carousel = ({ children, options, container_style, slide_style, button_style }) => {
    const [EmblaCarouselReact, embla] = useEmblaCarousel(options)
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

    const button = button_style?.button || button_style
    const chevron_left = button_style?.chevron_left
    const chevron_right = button_style?.chevron_right

    return (
        <div style={container_style}>
            <Embla>
                <EmblaCarouselReact>
                    <EmblaContainer>
                        {children.map((child, idx) => (
                            <div key={idx} style={slide_style}>
                                <EmblaSlideInner>{child}</EmblaSlideInner>
                            </div>
                        ))}
                    </EmblaContainer>
                </EmblaCarouselReact>
                {button_style && (
                    <StyledButtonWrapper style={button}>
                        <PrevButton
                            chevron_style={chevron_left}
                            onClick={scrollPrev}
                            enabled={prevBtnEnabled}
                        />
                        <NextButton
                            chevron_style={chevron_right}
                            onClick={scrollNext}
                            enabled={nextBtnEnabled}
                        />
                    </StyledButtonWrapper>
                )}
            </Embla>
        </div>
    )
}

Carousel.propTypes = {
    button_style: PropTypes.object,
    children: PropTypes.array,
    container_style: PropTypes.object,
    options: PropTypes.object,
    slide_style: PropTypes.object,
}
