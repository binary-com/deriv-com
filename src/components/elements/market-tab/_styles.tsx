import styled from 'styled-components'
import { Flex } from 'components/containers'
import device from 'themes/device'

export const MarketsContainer = styled.div`
    margin: 20px auto;
    overflow-y: hidden;
    overflow-x: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 2rem;
    scrollbar-width: none; /* Firefox */
    ::-webkit-scrollbar {
        display: none;
    }
    @media ${device.tablet} {
        margin: 0;
        justify-content: flex-start;
    }
`
export const ContainerWrapper = styled(Flex)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;
    margin: 0 auto;
    padding: 2rem;
    width: 60%;
    @media ${device.tablet} {
        width: 100vw;
    }
`
export const StyledIcon = styled.img`
    margin-bottom: 10px;
`
