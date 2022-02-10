import styled from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'

export type CardProps = {
    width?: string
    height?: string
    padding?: string
    tabletHeight?: string
    mobileHeight?: string
    headerHeight?: string
}

export const Card = styled.section<CardProps>`
    margin-top: 1.6rem;
    width: ${(props) => (props.width ? props.width : '38.4rem')};
    min-width: 38.4rem;
    height: ${(props) => (props.height ? props.height : '49rem')};
    background-color: var(--color-white);
    border-radius: 0.4rem;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    padding: ${(props) => (props.padding ? props.padding : '3.2rem')};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.mobileL} {
        width: 300px;
        min-width: 300px;
    }
`
export const CardWrapper = styled(Flex)`
    justify-content: center;
    flex-wrap: wrap;

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.laptopM} {
        flex-wrap: wrap;
    }
`
