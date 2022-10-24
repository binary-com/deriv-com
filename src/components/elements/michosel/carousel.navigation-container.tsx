import styled, { css } from 'styled-components'
import React from 'react'
import useCarousel from './use-carousel'
import { TCarouselMode, TNavPlacement } from './carousel.types'

type TNavigationWrapperProps = {
    placement: TNavPlacement
    mode: TCarouselMode
    offset: number
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
                return css<{ offset: number }>`
                    height: 100%;
                    left: ${({ offset }) => `-${offset}px`};
                    top: 0;
                    width: 8px;
                    flex-direction: column;
                `
            }
            return css<{ offset: number }>`
                height: 100%;
                right: ${({ offset }) => `-${offset}px`};
                top: 0;
                width: 8px;
                flex-direction: column;
            `
        } else {
            if (placement === 'start') {
                return css<{ offset: number }>`
                    width: 100%;
                    top: ${({ offset }) => `-${offset}px`};
                    height: 8px;
                    flex-direction: row;
                `
            }
            return css<{ offset: number }>`
                width: 100%;
                bottom: ${({ offset }) => `-${offset}px`};
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
