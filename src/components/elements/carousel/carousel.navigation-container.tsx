import styled, { css } from 'styled-components'
import React from 'react'
import useCarousel from './use-carousel'
import { TCarouselMode, TNavPlacement, TOffset } from './carousel.types'
import { getOffsetValue } from './utils'

type TNavigationWrapperProps = {
    placement: TNavPlacement
    mode: TCarouselMode
    offset: TOffset
}

const NavigationWrapper = styled.div<TNavigationWrapperProps>`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    gap: 8px;
    ${({ placement, mode }) => {
        const is_vertical = mode === 'vertical'
        const is_placement_start = placement === 'start'
        const vertical_direction = is_placement_start ? 'left' : 'right'
        const horizontal_direction = is_placement_start ? 'top' : 'bottom'
        const height = is_vertical ? '100%' : '8px'
        const width = is_vertical ? '8px' : '100%'
        const flex_direction = is_vertical ? 'column' : 'row'
        return css<{ offset: TOffset }>`
            ${is_vertical ? vertical_direction : horizontal_direction}: ${({ offset }) =>
                getOffsetValue(offset)};
            ${is_vertical ? 'top: 0' : ''};
            flex-direction: ${flex_direction};
            height: ${height};
            width: ${width};
        `
    }}
`

const NavigationContainer = ({ children, ...rest }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
    const {
        config: { mode, nav_placement, nav_offset },
    } = useCarousel()
    return (
        <NavigationWrapper offset={nav_offset} mode={mode} placement={nav_placement} {...rest}>
            {children}
        </NavigationWrapper>
    )
}

export default NavigationContainer
