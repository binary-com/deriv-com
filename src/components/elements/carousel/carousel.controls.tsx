import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { ChevronLeft, ChevronRight } from './carousel.styles'
import { TCarouselButtonType, TCarouselMode, TOffset } from './carousel.types'
import useCarousel from './use-carousel'
import { getOffsetValue } from './utils'
import { TColor } from 'themes/theme.types'

const CarouselButton = styled.button<{
    button_type: TCarouselButtonType
    mode: TCarouselMode
    color?: TColor
    offset: TOffset
}>`
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

    ${({ button_type, mode }) => {
        if (mode === 'horizontal') {
            return button_type === 'next'
                ? css<{ offset: TOffset }>`
                      top: 50%;
                      right: ${({ offset }) => getOffsetValue(offset)};
                  `
                : css<{ offset: TOffset }>`
                      top: 50%;
                      left: ${({ offset }) => getOffsetValue(offset)};
                  `
        } else {
            return button_type === 'next'
                ? css<{ offset: TOffset }>`
                      bottom: ${({ offset }) => getOffsetValue(offset)};
                      left: 50%;
                      transform: rotate(90deg);
                  `
                : css<{ offset: TOffset }>`
                      top: ${({ offset }) => getOffsetValue(offset)};
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
        config: { mode, controls_active_color, controls_offset },
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
                mode={mode}
                button_type="previous"
                disabled={!prevBtnEnabled}
                color={controls_active_color}
                offset={controls_offset}
                onClick={scrollPrev}
            >
                {render_prev_button?.({ enabled: prevBtnEnabled }) ?? <ChevronLeft />}
            </CarouselButton>
            <CarouselButton
                mode={mode}
                button_type="next"
                disabled={!nextBtnEnabled}
                color={controls_active_color}
                offset={controls_offset}
                onClick={scrollNext}
            >
                {render_next_button?.({ enabled: nextBtnEnabled }) ?? <ChevronRight />}
            </CarouselButton>
        </>
    )
}

export default Controls
