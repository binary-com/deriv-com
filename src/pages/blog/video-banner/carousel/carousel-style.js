import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { Header, LocalizedLinkText } from 'components/elements'
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
        } else if (props.custom) {
            return css`
                width: 10px;
                height: 18px;
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
    width: 100%;
    height: 8px;
    bottom: ${(props) => props.bottom_offset ?? '40px'};
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
    background-color: var(${(props) => props.color ?? '--color-grey-21'});
`

export const ChevronRight = styled(StyledChevron)`
    transform: rotate(180deg);
    right: 0;
`
export const ChevronLeft = styled(StyledChevron)`
    left: 0;
`
export const NavigationWrapper = styled(Flex)`
    align-items: center;
    margin: 41.5px 0 31.5px;
    height: auto;
    @media ${device.tabletL} {
        margin: 21px 0 16px;
    }
`
export const Divider = styled(Flex)`
    width: 1120px;
    height: 1px;
    border-top: 1px solid rgba(230, 233, 233, 0.6);
`
export const NavIconWrapper = styled(Flex)`
    width: auto;
`
export const IconWrapper = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid var(--color-white);
    position: relative;

    &:first-child {
        margin-right: 16px;
    }

    @media ${device.tabletL} {
        &:first-child {
            margin-right: 8px;
        }
    }
`
export const LastChildWrapper = styled(LocalizedLinkText)`
    min-width: 139px;
    height: 104px;
    background: var(--color-black-7);
    flex-direction: column;
    padding-top: 16px;
    text-decoration: none;
`
export const PlayerIconWrapper = styled(Flex)`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.32);
    align-items: center;
    cursor: pointer;
    position: ${(props) => (props.absolute ? 'absolute' : 'relative')};
    top: ${(props) => (props.absolute ? '50%' : 'unset')};
    left: 50%;
    transform: ${(props) => (props.absolute ? 'translate(-50%, -50%)' : 'translate(-50%, 0)')};
`
export const StyledHeader = styled(Header)`
    margin-bottom: 4px;
    color: var(--color-white);
    text-decoration: none;
    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 20px;
    }
`
export const PlayerIcon = styled.img`
    width: 20px;
    height: 16px;
`
