import styled from 'styled-components'
import Shape from './images/shape.svg'
import { Flex } from 'components/containers'
// import { Text, Tabs } from 'components/elements'
// import { LocalizedLink } from 'components/localization'
// import device from 'themes/device'
import { LinkButton } from 'components/form'

export const CtaContainer = styled(Flex)`
    width: 282px;
    height: 420px;
    border-radius: 8px;
    padding-top: 25px;
    padding-left: 16px;
    background-color: var(--color-grey-41);
    flex-flow:column;
    justify-content:flex-start;
    background-image: url(${Shape});
    background-position: right bottom; 
    background-repeat: no-repeat;
`

export const DownloadPdfIcon = styled.img`
    width:44px;
    height:18px;
    margin-bottom:5px;
`

export const LinkButtonWrapper = styled(Flex)`
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
    justify-content: center;
`

export const ClaimButton = styled(LinkButton)`
    width: fit-content;
    size:14px;

    &:hover {
        cursor: pointer;
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    margin:0 auto;
`

export const BookImage = styled.img`
    height: 212px;
`