import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import PreviewImage from 'images/common/conference/preview.png'
import device from 'themes/device'

const PreviewWrapper = styled.div`
    padding: 80px 120px;
    flex-direction: column;
    align-items: center;

    @media ${device.laptopM} {
        padding: 40px 80px;
    }
`
const PreviewHeader = styled(Header)`
    text-align: center;
    font-weight: normal;
`
const StyledImage = styled.img`
    max-width: 800px;
    max-height: 540px;
    width: 100%;
    padding: 40px 0 8px;
`

const Preview = () => {
    return (
        <PreviewWrapper>
            <PreviewHeader as="h4" type="subtitle-1">
                O objetivo deste evento é reunir nossos parceiros de alto desempenho e criar um
                espaço de colaboração.
            </PreviewHeader>
            <Flex fd="column" ai="center">
                <StyledImage src={PreviewImage} alt="preview image" />
                <PreviewHeader as="div" type="subtitle-2">
                    Aprenda insights de seus produtos Deriv favoritos.
                </PreviewHeader>
            </Flex>
        </PreviewWrapper>
    )
}

export default Preview
