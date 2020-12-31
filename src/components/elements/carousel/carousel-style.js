import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { ReactComponent as Chevron } from 'images/svg/carousel-chevron.svg'

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

export const EmblaSlideInner = styled.div`
    position: relative;
    padding-left: 0;
    margin: 0 auto;
    height: 100%;
`

export const StyledButtonWrapper = styled.div`
    position: absolute;
    bottom: 50%;
    opacity: ${(props) => (props.disabled ? '0.32' : '1')};
    ${(props) => {
        if (props.left)
            return css`
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
        return css`
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
        if (props.red) {
            return css`
                width: 16px;
                height: 16px;
            `
        }
    }}

    path {
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
`

export const NavigationContainer = styled(Flex)`
    position: relative;
    bottom: 40px;
    width: 100%;
    height: 8px;
`

export const StyledDot = styled.button`
    cursor: pointer;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    padding: 0;
    outline: 0;
    border: 0;
    margin-right: 8px;
    ${(props) => {
        let color = '--color-grey-21'
        switch (props.color) {
            case 'red':
                color = '--color-red'
                break
            case 'black':
                color = '--color-black'
                break
        }
        return css`
            background-color: var(${color});
        `
    }}
`

export const ChevronRight = styled(StyledChevron)`
    transform: rotate(180deg);
    right: 0;
`
export const ChevronLeft = styled(StyledChevron)`
    left: 0;
`
