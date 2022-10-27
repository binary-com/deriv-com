import React from 'react'
import styled, { css } from 'styled-components'
import { TCarouselMode } from './carousel.types'
import useCarousel from './use-carousel'

const Wrapper = styled.div<{ mode: TCarouselMode }>`
    display: flex;
    ${({ mode }) =>
        mode === 'horizontal'
            ? css`
                  flex-direction: row;
              `
            : css`
                  flex-direction: column;
              `}
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    height: 100%;
    width: 100%;
    will-change: auto;
    transform: translateZ(0);
`

const Slides = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
    const {
        config: { mode },
    } = useCarousel()
    return <Wrapper mode={mode}>{children}</Wrapper>
}

export default Slides
