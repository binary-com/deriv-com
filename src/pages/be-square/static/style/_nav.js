import styled from 'styled-components'
import { Flex } from 'components/containers'
import { LinkButton } from 'components/form'
import device from 'themes/device'

export const Container = styled.div`
    background-color: var(--color-black);
    width: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
`

export const ContentContainer = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    padding: 16px 120px;

    @media ${device.tablet} {
        padding: 16px;
    }
`

export const LogoWrapper = styled.img`
    width: 286px;
    height: 27px;

    @media ${device.tablet} {
        width: 168px;
        height: 16px;
    }
`

export const ButtonWrapper = styled(LinkButton)`
    max-width: 102px;
    height: auto;
    white-space: nowrap;
`
