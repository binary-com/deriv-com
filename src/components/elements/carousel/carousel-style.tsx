import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { ReactComponent as Chevron } from 'images/svg/careers/carousel-chevron.svg'

type StyledButtonWrapperProps = {
    width?: number | string
    last_slide_no_spacing?: boolean
    left?: boolean
    disabled?: boolean
    is_reviews: boolean
}

export const Embla = styled.div`
    position: relative;
    overflow: hidden;
`

export const ViewPort = styled.div`
    overflow: hidden;
    width: 100%;

    &.is-draggable {
        cursor: move;
        cursor: grab;
    }
    &.is-dragging {
        cursor: grabbing;
    }
`

export const EmblaContainer = styled.div`
    height: 100%;
    display: flex;
    will-change: transform;
`

type EmblaSlideInnerProps = {
    width?: number
}

export const EmblaSlideInner = styled.div<EmblaSlideInnerProps>`
    position: relative;
    padding-left: 0;
    margin: 0 auto;
    height: 100%;
    ${(props) => {
        if (props.width)
            return css`
                width: ${props.width};
            `
    }}
`

export const StyledButtonWrapper = styled.div<StyledButtonWrapperProps>`
    position: absolute;
    bottom: 50%;
    opacity: ${(props) => (props.disabled ? '0.32' : '1')};
    ${(left) => {
        if (left)
            return css`
                left: 0;

                @media ${device.tabletL} {
                    ${(is_reviews) => {
                        if (is_reviews) {
                            return css`
                                @media ${device.tabletL} {
                                    left: 22%;
                                }
                                @media ${device.tabletS} {
                                    left: 2px;
                                }
                            `
                        }
                        return css`
                            display: none;
                        `
                    }}
                }
            `
        return css`
            right: 0;

            @media ${device.tabletL} {
                ${(is_reviews) => {
                    if (is_reviews) {
                        return css`
                            @media ${device.tabletL} {
                                right: 22%;
                            }
                            @media ${device.tabletS} {
                                right: 2px;
                            }
                        `
                    }
                    return css`
                        display: none;
                    `
                }}
            }
        `
    }}

    &:hover {
        cursor: pointer;
    }
`

export const StyledChevron = styled(Chevron)`
    height: 24px;
    width: 24px;
    ${(red) => {
        if (red) {
            return css`
                width: 16px;
                height: 16px;
                fill: var(--color-red);
            `
        }
    }}

    path {
        ${(black) => {
            if (black) {
                return css`
                    fill: var(--color-black);
                `
            }
            return css`
                fill: var(--color-white);
            `
        }}
    }
`

export const NavigationContainer = styled(Flex)`
    ${({ navigation_css, bottom_offset, height }) => {
        if (navigation_css) return navigation_css
        else
            return css`
                position: relative;
                width: 100%;
                height: ${height ?? '8px'};
                bottom: ${bottom_offset ?? '40px'};
            `
    }}
`

export const StyledDot = styled.div`
    cursor: pointer;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    padding: 0;
    outline: 0;
    border: 0;
    margin-right: 8px;
    background-color: ${({ color }) => (color ? `var(--color-${color})` : 'var(--color-grey-21)')};
`

type ChevronRightAndLeftProps = {
    black?: string | boolean
    red?: string | boolean
}
export const ChevronRight = styled(StyledChevron)<ChevronRightAndLeftProps>`
    transform: rotate(180deg);
    right: 0;
`
export const ChevronLeft = styled(StyledChevron)<ChevronRightAndLeftProps>`
    left: 0;
`
