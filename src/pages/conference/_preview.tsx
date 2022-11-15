import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import PreviewImage from 'images/common/conference/preview.png'

const PreviewWrapper = styled.div`
    padding: 80px 120px;
    flex-direction: column;
    align-items: center;
`
const PreviewHeader = styled(Header)`
    text-align: center;
    font-weight: normal;
`
const StyledImage = styled.img`
    max-width: 800px;
    max-height: 540px;
    padding: 40px 0 8px;
`

const Preview = () => {
    return (
        <PreviewWrapper>
            <PreviewHeader as="h4" type="subtitle-1">
                O objevito deste evento e reunir nossos parceiros de alto desempenho e criar um
                espaco de colaboracio
            </PreviewHeader>
            <Flex fd="column" ai="center">
                <StyledImage src={PreviewImage} alt="preview image" />
                <PreviewHeader as="div" type="subtitle-2">
                    Aprena insights de seus produtos Deriv facoritos.
                </PreviewHeader>
            </Flex>
        </PreviewWrapper>
    )
}

export default Preview
