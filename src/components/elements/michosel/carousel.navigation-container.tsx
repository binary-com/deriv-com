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
        if (mode === 'vertical') {
            if (placement === 'start') {
                return css<{ offset: TOffset }>`
                    height: 100%;
                    left: ${({ offset }) => getOffsetValue(offset)};
                    top: 0;
                    width: 8px;
                    flex-direction: column;
                `
            }
            return css<{ offset: TOffset }>`
                height: 100%;
                right: ${({ offset }) => getOffsetValue(offset)};
                top: 0;
                width: 8px;
                flex-direction: column;
            `
        } else {
            if (placement === 'start') {
                return css<{ offset: TOffset }>`
                    width: 100%;
                    top: ${({ offset }) => getOffsetValue(offset)};
                    height: 8px;
                    flex-direction: row;
                `
            }
            return css<{ offset: TOffset }>`
                width: 100%;
                bottom: ${({ offset }) => getOffsetValue(offset)};
                height: 8px;
                flex-direction: row;
            `
        }
    }}
`

const NavigatonContainer = ({ children, ...rest }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
    const {
        config: { mode, nav_placement, nav_offset },
    } = useCarousel()
    return (
        <NavigationWrapper offset={nav_offset} mode={mode} placement={nav_placement} {...rest}>
            {children}
        </NavigationWrapper>
    )
}

export default NavigatonContainer
