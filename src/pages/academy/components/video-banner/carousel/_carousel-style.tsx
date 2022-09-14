import React from 'react'
import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { LocalizedLinkText } from 'components/elements'
import { ReactComponent as Chevron } from 'images/svg/careers/carousel-chevron.svg'

type StyledButtonWrapperProps = {
    disabled?: boolean
    is_reviews?: boolean
    left?: boolean
}

type StyledChevronProps = {
    red?: boolean
    black?: boolean
    custom?: boolean
}

type IconWrapperProps = {
    disabled: boolean
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

export const EmblaSlideInner = styled.div`
    position: relative;
    padding-left: 0;
    margin: 0 auto;
    height: 100%;
`

export const StyledButtonWrapper = styled.div<StyledButtonWrapperProps>`
    position: absolute;
    bottom: 50%;
    opacity: ${(props) => (props.disabled ? '0.92' : '1')};
    ${(props) => {
        const is_reviews = props.is_reviews
        const left_tablet_styles = `@media ${device.tabletL} {left: 22%;}@media ${device.tabletS} {left: 2px;}`
        const right_tablet_styles = `@media ${device.tabletL} {right: 22%;}@media ${device.tabletS} {right: 2px;}`
        const display_none = 'display:none;'

        if (props.left) {
            const styles = is_reviews ? left_tablet_styles : display_none
            return css`
                left: 0;
                ${styles}
            `
        } else {
            const styles = is_reviews ? right_tablet_styles : display_none
            return css`
                right: 0;
                ${styles}
            `
        }
    }}

    &:hover {
        cursor: pointer;
    }
`

export const StyledChevron = styled((props) => <Chevron {...props} />)<StyledChevronProps>`
    height: 24px;
    width: 24px;
    ${(props) => {
        const red_box = 'width: 16px;height: 16px;'
        const custom_box = 'width: 10px;height: 18px;'

        if (props.red) {
            return css`
                ${red_box}
            `
        } else if (props.custom) {
            return css`
                ${custom_box}
            `
        }
    }}

    path {
        ${(props) => {
            const black_color = 'fill: var(--color-black);'
            const red_color = 'fill: var(--color-red);'
            const default_color = 'fill: var(--color-white);'

            return (props.black && black_color) || (props.red && red_color) || default_color
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
    background-color: ${({ color }) => (color ? `var(--color-${color})` : 'var(--color-grey-21)')};
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
    margin: 34px 0 16px;
    height: auto;
    @media ${device.tabletL} {
        margin: 17px 0 16px;
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
    cursor: pointer;
    opacity: ${(props) => (props.disabled ? '0.32' : '1')};

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
    min-width: 174px;
    height: 105px;
    background: var(--color-black-7);
    flex-direction: column;
    padding-top: 16px;
    text-decoration: none;
    border-radius: 4px;
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
export const PlayerIcon = styled.img`
    width: 16px;
    height: 16px;
    @media ${device.tabletL} {
        width: 10px;
        height: 10px;
    }
`
