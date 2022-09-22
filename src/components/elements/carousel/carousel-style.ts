import React from 'react'
import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { ReactComponent as Chevron } from 'images/svg/careers/carousel-chevron.svg'

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

type StyledButtonWrapperProps = {
    disabled?: boolean
    is_reviews?: boolean
    left?: boolean
}

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

export const StyledChevron = styled(Chevron)`
    height: 24px;
    width: 24px;
    ${(props) => {
        if (props.color == 'red') {
            return css`
                width: 16px;
                height: 16px;
            `
        }
    }}

    path {
        ${(props) => {
            const selected_color = `fill: var(--color-${props.color});`
            const default_color = 'fill: var(--color-white);'

            return props.color == 'custom' ? default_color : selected_color
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
