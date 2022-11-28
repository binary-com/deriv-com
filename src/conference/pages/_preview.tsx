import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import PreviewImage from 'images/common/conference/preview.png'
import device from 'themes/device'
import { localize } from 'components/localization'

const PreviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 120px;

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
    border-radius: 8px;
`

const Preview = () => {
    return (
        <PreviewWrapper>
            <PreviewHeader as="h4" type="subtitle-1" pb="40px">
                {localize(
                    'The purpose of this event is to bring our high-performing partners together and create a space for collaboration.',
                )}
            </PreviewHeader>
            <StyledImage src={PreviewImage} alt="preview image" />
            <PreviewHeader as="div" type="subtitle-2" pt="8px">
                {localize('Learn insights from your favorite Deriv products.')}
            </PreviewHeader>
        </PreviewWrapper>
    )
}

export default Preview
