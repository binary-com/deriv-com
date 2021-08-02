import styled from 'styled-components'
import Shape from './_images/shape.svg'
import BigShape from './_images/big-shape.svg'
import { Header } from 'components/elements'
import { Flex } from 'components/containers'
import device from 'themes/device'

export const SideContainer = styled(Flex)`
    padding: 20px;
    justify-content: start;

    @media ${device.tablet} {
        justify-content: center;
    }
`

export const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        max-width: 250px;
    }
`
export const CtaContainer = styled(Flex)`
    width: 282px;
    border-radius: 8px;
    padding: 24px 0 0 16px;
    background-color: var(--color-grey-41);
    flex-flow: column;
    justify-content: flex-start;
    background-image: url(${Shape});
    background-position: right bottom;
    background-repeat: no-repeat;

    @media ${device.mobileL} {
        background-image: url(${BigShape});
        width: 100%;
        max-width: 328px;
        padding: 24px 39px 0;
    }
`

export const DownloadPdfIcon = styled.img`
    width: 44px;
    margin-bottom: 8px;
`

export const LinkButtonWrapper = styled(Flex)`
    margin-top: 16px;
    margin-bottom: 24px;
    text-align: center;
    justify-content: center;
`

export const ImageWrapper = styled.div`
    position: relative;
    margin: 0 auto;

    @media ${device.mobileS} {
        display: none;
    }
`

export const BookImage = styled.img`
    margin-bottom: -2px;
    @media ${device.mobileL} {
        margin-right: 30px;
    }
`
