import styled from 'styled-components'
import { Flex, Box } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const Section = styled(Box)`
    ${Header} {
        color: var(--color-white);
    }
`
const ResponsiveHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: var(--text-size-l);
    }
`

const ImgWrapper = styled(Box)`
    margin-left: 2.4rem;
    width: 100%;
    max-width: 56.5rem;

    @media ${device.tabletS} {
        margin-left: 0;
    }
`

const ResponsiveFlex = styled(Flex)`
    @media (max-width: 1400px) {
        margin-bottom: 2.4rem;
        max-width: 100%;
        margin-right: 0;
    }
`

const FitButton = styled(LinkButton)`
    width: fit-content;
`

const Desktop = styled(Flex)`
    @media ${device.tabletL} {
        display: none;
    }
`
const Mobile = styled(Flex)`
    display: none;

    @media ${device.tabletL} {
        display: flex;
    }
`

export { Section, ResponsiveHeader, ImgWrapper, ResponsiveFlex, FitButton, Desktop, Mobile }
