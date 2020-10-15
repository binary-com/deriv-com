import styled, { css } from 'styled-components'
import device from 'themes/device'
import Chevron from 'images/svg/carousel-chevron.svg'

export const Embla = styled.div`
    position: relative;
    overflow: hidden;
`

export const ViewPort = styled.div`
    overflow: hidden;

    &.is-draggable {
        cursor: move;
        cursor: grab;
    }
    &.is-dragging {
        cursor: grabbing;
    }
`

export const EmblaContainer = styled.div`
    display: flex;
    will-change: transform;
`

export const EmblaSlideInner = styled.div`
    overflow: hidden;
    position: relative;
    padding-left: 10px;
`

export const StyledButtonWrapper = styled.div`
    position: absolute;
    bottom: 50%;
    opacity: ${(props) => (props.disabled ? '0.32' : '1')};
    ${(props) => {
        if (props.left)
            return css`
                left: 0;
            `
        return css`
            right: 0;
        `
    }}

    &:hover {
        cursor: pointer;
    }

    @media ${device.tabletL} {
        display: none;
    }
`

export const StyledChevron = styled(Chevron)`
    height: 24px;
    width: 24px;
    ${(props) => {
        if (props.red) {
            return css`
                width: 16px;
                height: 16px;
            `
        }
    }}

    g {
        g {
            ${(props) => {
                if (props.black) {
                    return css`
                        fill: var(--color-black);
                    `
                } else if (props.red) {
                    return css`
                        fill: var(--color-red);
                    `
                }

                return css`
                    fill: var(--color-white);
                `
            }}
        }
    }
`

export const ChevronRight = styled(StyledChevron)`
    transform: rotate(180deg);
    right: 0;
`
export const ChevronLeft = styled(StyledChevron)`
    left: 0;
`
