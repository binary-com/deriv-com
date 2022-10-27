import React from 'react'
import styled, { css } from 'styled-components'

const Shadow = styled.div<{ location: 'start' | 'end' }>`
    position: absolute;
    left: 0;
    right: 0;
    height: calc(50% - 152px / 2);
    z-index: 1;
    pointer-events: none;
    ${({ location }) => {
        if (location === 'start') {
            return css`
                top: -0.5px;
                background: linear-gradient(
                    to top,
                    rgba(249, 251, 255, 0) 0%,
                    rgba(249, 251, 255, 1) 100%
                );
            `
        } else {
            return css`
                bottom: -0.5px;
                background: linear-gradient(rgba(249, 251, 255, 0) 0%, rgba(249, 251, 255, 1) 100%);
            `
        }
    }}
`

const CarouselShadows = () => {
    return (
        <>
            <Shadow location="start" />
            <Shadow location="end" />
        </>
    )
}

export default CarouselShadows
