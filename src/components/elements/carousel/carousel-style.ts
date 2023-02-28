import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { ReactComponent as Chevron } from 'images/svg/careers/carousel-chevron.svg'

type StyledButtonWrapperProps = {
    disabled?: boolean
    is_reviews?: boolean
    left?: boolean
}

type NavigationContainerType = {
    navigation_css?: FlattenSimpleInterpolation
    bottom_offset?: string | number
    height?: string
}

type StyledChevronType = {
    color?: string // 'red' | 'custom' | 'black' | color
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

export const EmblaSlideInner = styled.div<{ width?: string }>`
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
    ${(props) => {
        if (props.left)
            return css<StyledButtonWrapperProps>`
                left: 0;

                @media ${device.tabletL} {
                    ${(props) => {
                        if (props.is_reviews) {
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
        return css<StyledButtonWrapperProps>`
            right: 0;

            @media ${device.tabletL} {
                ${(props) => {
                    if (props.is_reviews) {
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

export const StyledChevron = styled(Chevron)<StyledChevronType>`
    height: 24px;
    width: 24px;
    ${({ color }) => {
        if (color == 'red' || color == 'black-9') {
            return css`
                width: 16px;
                height: 16px;
            `
        }
    }}

    path {
        ${({ color }) => {
            const selected_color = `fill: var(--color-${color});`
            const default_color = 'fill: var(--color-white);'

            return color == 'custom' ? default_color : selected_color
        }}
    }
`

export const NavigationContainer = styled(Flex)<NavigationContainerType>`
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

export const ChevronRight = styled(StyledChevron)`
    transform: rotate(180deg);
    right: 0;
`
export const ChevronLeft = styled(StyledChevron)`
    left: 0;
`
