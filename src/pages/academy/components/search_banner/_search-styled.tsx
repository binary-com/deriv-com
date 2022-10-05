import styled, { css } from 'styled-components'
import { Flex } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'

type StyledChevronProps = {
    is_expanded?: boolean
}

const overlay_css = css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(14, 14, 14, 0.8);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 12;
    width: 100%;
    height: 100vh;
`
export const MainWrapper = styled(Flex)<{ hide_box_shadow?: boolean; background?: boolean }>`
    background-color: var(--color-white);
    box-shadow: ${({ hide_box_shadow, background }) =>
        hide_box_shadow && background
            ? 'inset 0 -1px 0 rgba(14, 14, 14, 0.1)'
            : '0 5px 10px rgba(14, 14, 14, 0.1)'};
    position: fixed;
    z-index: 10;
    height: 7.2rem;
    top: ${({ background }) => (background ? '0' : '72px')};

    @media ${device.desktopL} {
        top: ${({ background }) => (background ? '0' : '87px')};
    }

    @media ${device.tabletL} {
        top: ${({ background }) => (background ? '0' : '7.2rem')};
    }
`
export const ParentWrapper = styled(Flex)<{ overlay?: boolean }>`
    ${({ overlay }) => overlay && overlay_css}
`
export const StyledLink = styled(LocalizedLink)`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-black-3);
    text-decoration: none;
    padding: 8px;

    &:hover {
        background-color: var(--color-grey-31);
    }
`
export const SearchResultRows = styled(Flex)<{ is_active?: boolean }>`
    cursor: pointer;
    font-size: 16px;
    margin-top: 4px;
    padding: 8px 16px;
    min-height: 44px;
    height: auto;
    background-color: ${({ is_active }) => (is_active ? 'var(--color-grey-30)' : 'unset')};

    &:hover {
        background-color: var(--color-grey-30);
    }

    @media ${device.tabletL} {
        margin-bottom: 16px;
        margin-top: 0;

        &:hover {
            border-radius: 4px;
        }
    }
`
export const SearchSuggestionWrapper = styled(Flex)`
    width: 640px;
    background: white;
    height: auto;
    z-index: 120;
    position: absolute;
    top: 34px;
    padding: 8px 24px 12px;
    border: 2px solid #ecf1f7;
    border-top: unset;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    @media ${device.tabletL} {
        position: relative;
        top: unset;
        padding: 0;
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        align-items: flex-start;
        border: none;
    }
`
export const IconWrapper = styled.img`
    width: 16px;
    height: 20px;

    @media ${device.tabletL} {
        height: 16px;
    }
`
export const DesktopWrapper = styled(Flex)`
    @media ${device.tabletL} {
        display: none;
    }
`
export const MobileWrapper = styled.div`
    display: none;

    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`

export const StyledChevron = styled.img<StyledChevronProps>`
    height: 16px;
    width: 16px;
    transform: ${({ is_expanded }) => (is_expanded ? 'inherit' : 'rotate(-180deg)')};
    transition: transform 0.25s ease-out;
`
export const HoverChevron = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`
