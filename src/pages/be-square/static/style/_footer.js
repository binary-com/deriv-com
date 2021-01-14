import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'

export const Container = styled.div`
    background-color: ${({ color }) => `var(--color-${color})`};
`

export const ContentContainer = styled(Flex)`
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;

    @media ${device.laptop} {
        flex-direction: column;
    }
`

export const ImageWrapper = styled.img`
    max-height: 402px;
    max-width: 588px;
    width: 100%;
    overflow: hidden;
    position: relative;
    bottom: 60px;

    @media ${device.tablet} {
        max-width: 326px;
        max-height: 224px;
        margin: 0 auto;
        bottom: 40px;
    }
`

export const TextContainer = styled(Flex)`
    display: grid;
    justify-content: flex-start;
    padding: 80px 0 72px 120px;
    grid-row-gap: 24px;

    @media ${device.laptop} {
        padding: 0 0 44px 0;
        justify-content: center;
    }
`

export const Title = styled(Header)`
    max-width: 508px;
    width: fit-content;
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    color: var(--color-white);

    @media ${device.tablet} {
        max-width: 328px;
        font-size: 28px;
        line-height: 34px;
    }
`

export const TextWrapper = styled(Text)`
    max-width: ${({ max_width }) => (max_width ? max_width[0] : 'unset')};
    width: fit-content;
    font-size: ${({ font_size }) => font_size[0] ?? 'unset'};
    font-weight: 400;
    line-height: ${({ line_height }) => line_height[0] ?? 'unset'};
    color: var(--color-white);
    padding: ${({ padding }) => (padding ? padding[0] : 0)};

    @media ${device.tablet} {
        max-width: ${({ max_width }) => (max_width ? max_width[1] ?? max_width[0] : 'unset')};
        font-size: ${({ font_size }) => font_size[1] ?? font_size[0] ?? 'unset'};
        line-height: ${({ line_height }) => line_height[1] ?? line_height[0] ?? 'unset'};
        padding: ${({ padding }) => (padding ? padding[1] ?? padding[0] : 0)};
    }
`

export const FollowUsContainer = styled.div`
    display: grid;
    grid-template-columns: 68px repeat(4, 26.67px);
    grid-column-gap: 21px;
`

export const Link = styled(TextWrapper).attrs({ as: 'a' })`
    color: var(--color-red);
`

export const ButtonWrapper = styled(LinkButton)`
    max-width: 102px;
    height: auto;
    white-space: nowrap;
`
