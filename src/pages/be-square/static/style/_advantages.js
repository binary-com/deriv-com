import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

export const Container = styled(Flex)`
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled(Header)`
    max-width: 492px;
    width: fit-content;
    font-size: ${({ font_size }) => font_size ?? '48px'};
    font-weight: 700;
    line-height: ${({ line_height }) => line_height ?? '60px'};
    color: var(--color-black-3);
    text-align: center;
    padding: ${({ padding }) => padding ?? '80px 0 40px'};

    @media ${device.tablet} {
        max-width: 287px;
        font-size: ${({ font_size_m }) => font_size_m ?? '28px'};
        line-height: ${({ line_height_m }) => line_height_m ?? '34px'};
        padding: ${({ padding_m }) => padding_m ?? '40px 0 16px'};
    }
`

export const CardContainer = styled.div`
    min-width: 384px;
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    justify-content: center;
    align-items: center;
    margin: 0 auto 56px;

    @media ${device.laptopM} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.tabletL} {
        min-width: 320px;
        grid-template-columns: repeat(1, 1fr);
        gap: 16px;
        margin-bottom: 0 auto 40px;
    }
`
