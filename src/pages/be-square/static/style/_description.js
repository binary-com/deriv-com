import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Text } from 'components/elements'
import device from 'themes/device'

export const Container = styled(Flex)`
    max-height: 340;
    width: 100%;
    background-color: var(--color-white);
    align-items: center;
    justify-content: center;
`

export const TextWrapper = styled(Text)`
    max-width: 1440;
    width: fit-content;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
    text-align: center;
    padding: 173px 17% 80px;

    @media ${device.mobileL} {
        max-width: 360px;
        padding: 80px 3% 40px;
        width: 100%;
        font-size: 18px;
        line-height: 22px;
    }
`
