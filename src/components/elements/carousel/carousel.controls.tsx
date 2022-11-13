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
    background-color: transparent;
    touch-action: manipulation;
    position: absolute;
    z-index: 1;
    border: 0;

    :not([disabled]) {
        cursor: pointer;
    }
    :disabled {
        opacity: 0.3;
    }
    path {
        ${({ color }) =>
            css`
                fill: ${color ?? 'unset'};
            `}
    }

    ${({ button_type, mode }) => {
        const is_horizontal = mode === 'horizontal'
        const is_next_button = button_type === 'next'
        const horizontal_direction = is_next_button ? 'right' : 'left'
        const vertical_direction = is_next_button ? 'bottom' : 'top'
        return css<{ offset: TOffset }>`
            ${is_horizontal ? 'top' : 'left'}: 50%;
            ${!is_horizontal ? 'transform: rotate(90deg)' : ''};
            ${is_horizontal ? horizontal_direction : vertical_direction}: ${({ offset }) =>
                getOffsetValue(offset)};
        `
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
