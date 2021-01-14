import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import device from 'themes/device'

export const Container = styled.div`
    background-color: var(--color-grey-30);

    @media ${device.tablet} {
        background-color: var(--color-white);
    }
`

export const ContentContainer = styled(Flex)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 0;

    @media ${device.tablet} {
        padding: 40px 0;
    }
`

export const TitleWrapper = styled(Flex)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    @media ${device.tablet} {
        margin-bottom: 17px;
    }
`

export const Title = styled(Header)`
    max-width: 384px;
    width: fit-content;
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
    color: var(--color-black-3);

    @media ${device.tablet} {
        max-width: 328px;
        font-size: 28px;
        line-height: 34px;
    }
`

export const TextWrapper = styled(Text)`
    max-width: ${({ max_width }) => (max_width ? max_width[0] : 'unset')};
    width: fit-content;
    font-size: ${({ font_size }) => (font_size ? font_size[0] : 'unset')};
    font-weight: 400;
    line-height: ${({ line_height }) => (line_height ? line_height[0] : 'unset')};
    text-align: ${({ text_align }) => text_align ?? 'unset'};
    color: var(--color-black-3);

    @media ${device.tablet} {
        max-width: ${({ max_width }) => (max_width ? max_width[1] ?? max_width[0] : 'unset')};
        font-size: ${({ font_size }) => (font_size ? font_size[1] ?? font_size[0] : 'unset')};
        line-height: ${({ line_height }) =>
            line_height ? line_height[1] ?? line_height[0] : 'unset'};
    }
`

export const CardContainer = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
`

export const CardWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 22px;
    background-color: var(--color-grey-30);
    align-items: center;
    box-shadow: inset 0 1px 0 #d6d7d8;

    @media ${device.tablet} {
        grid-template-columns: 32px auto 24px;
    }
`
