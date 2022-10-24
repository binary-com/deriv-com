import React, { CSSProperties, ReactNode, useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { ChevronLeft, ChevronRight } from './carousel.styles'
import { TCarouselButtonType, TCarouselControlPlacement, TCarouselMode } from './carousel.types'
import useCarousel from './use-carousel'

const CarouselButton = styled.button<{
    button_type: TCarouselButtonType
    placement: TCarouselControlPlacement
    mode: TCarouselMode
    color?: CSSProperties['backgroundColor']
}>`
    width: 24px;
    height: 24px;
    outline: 0;
    cursor: pointer;
    background-color: transparent;
    touch-action: manipulation;
    position: absolute;
    z-index: 1;
    border: 0;

    :disabled {
        opacity: 0.6;
    }
    path {
        ${({ color }) =>
            color
                ? css`
                      fill: ${color};
                  `
                : css`
                      fill: unset;
                  `}
    }

    ${({ button_type, placement, mode }) => {
        const placement_offset = placement === 'inside' ? 25 : -50
        if (mode === 'horizontal') {
            return button_type === 'next'
                ? css`
                      top: 50%;
                      right: ${placement_offset}px;
                  `
                : css`
                      top: 50%;
                      left: ${placement_offset}px;
                  `
        } else {
            return button_type === 'next'
                ? css`
                      bottom: ${placement_offset}px;
                      left: 50%;
                      transform: rotate(90deg);
                  `
                : css`
                      top: ${placement_offset}px;
                      left: 50%;
                      transform: rotate(90deg);
                  `
        }
    }}
`

export type TRenderButtonProp = (config: { enabled: boolean }) => ReactNode

export type TControlsProps = {
    render_prev_button?: TRenderButtonProp
    render_next_button?: TRenderButtonProp
}

const Controls = ({ render_next_button, render_prev_button }: TControlsProps) => {
    const {
        embla,
        config: { controls_placement, mode, controls_active_color },
    } = useCarousel()

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
        embla.on('reInit', onSelect)

        onSelect()
    }, [embla, onSelect])

    return (
        <>
            <CarouselButton
                placement={controls_placement}
                mode={mode}
                button_type="previous"
                disabled={!prevBtnEnabled}
                color={controls_active_color}
                onClick={scrollPrev}
            >
                {render_prev_button?.({ enabled: prevBtnEnabled }) ?? <ChevronLeft />}
            </CarouselButton>
            <CarouselButton
                mode={mode}
                placement={controls_placement}
                button_type="next"
                disabled={!nextBtnEnabled}
                color={controls_active_color}
                onClick={scrollNext}
            >
                {render_next_button?.({ enabled: nextBtnEnabled }) ?? <ChevronRight />}
            </CarouselButton>
        </>
    )
}

export default Controls
