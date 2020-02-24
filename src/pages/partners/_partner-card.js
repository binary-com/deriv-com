import styled from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'

export const Card = styled.section`
    width: 100%;
    max-width: 38.4rem;
    height: ${props => (props.height ? props.height : '42rem')};
    margin-top: 4rem;
    background-color: var(--color-white);
    border-radius: 0.4rem;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    padding: ${props => (props.padding ? props.padding : '3.2rem')};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const CardWrapper = styled(Flex)`
    justify-content: space-between;

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;
    }
`
