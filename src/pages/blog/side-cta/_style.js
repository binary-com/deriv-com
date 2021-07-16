import styled from 'styled-components'
import Shape from './images/shape.svg'
import { Flex } from 'components/containers'
import device from 'themes/device'
import { LinkButton } from 'components/form'

export const SideContainer = styled(Flex)`
    padding: 20px;
    justify-content: start;

    @media ${device.tablet} {
        justify-content: center;
    }
`
export const CtaContainer = styled(Flex)`
    width: 282px;
    height: 420px;
    border-radius: 8px;
    padding: 25px 0 0 16px;
    background-color: var(--color-grey-41);
    flex-flow: column;
    justify-content: flex-start;
    background-image: url(${Shape});
    background-position: right bottom;
    background-repeat: no-repeat;

    @media ${device.tablet} {
        width: 100%;
        max-width: 328px;
        height: 420px;
        background-position: center bottom;
        padding: 26px 46px 0 39px;
    }
`

export const DownloadPdfIcon = styled.img`
    width: 44px;
    height: 18px;
    margin-bottom: 5px;
`

export const LinkButtonWrapper = styled(Flex)`
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
    justify-content: center;
`

export const ClaimButton = styled(LinkButton)`
    width: fit-content;
    size: 14px;

    &:hover {
        cursor: pointer;
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    margin: 0 auto;
`

export const BookImage = styled.img`
    height: 212px;
    margin-bottom: -2px;
    @media ${device.tablet} {
        margin-right: 30px;
    }
`
