import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import device from 'themes/device'
import { Localize } from 'components/localization'
import { SectionContainer } from 'components/containers'

const StyledText = styled(Header)`
    font-size: 16px;
    @media ${device.tabletL} {
        font-size: 18px;
        margin-top: 16px;
        line-height: 28px;
    }
`
type ProductDescriptionProps = {
    description: string
}
const ProductDescription = ({ description }: ProductDescriptionProps) => {
    return (
        <SectionContainer>
            <StyledText>
                <Localize translate_text={description} />
            </StyledText>
        </SectionContainer>
    )
}
export default ProductDescription
