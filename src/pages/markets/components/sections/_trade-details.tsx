import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex } from 'components/containers'
import { Text } from 'components/elements'
import device from 'themes/device'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'

type TradeDetailsProps = {
    children?: ReactElement[]
    description?: TString
}

const StyledText = styled(Text)`
    margin-bottom: 80px;
    text-align: center;
    @media ${device.tabletL} {
        width: 88vw;
        font-size: 16px;
        margin: 30px 0;
    }
    @media ${device.mobileM} {
        width: 88vw;
        font-size: 14px;
    }
`
const StyledSection = styled(SectionContainer)`
    padding: 6rem 0;
    @media ${device.tabletL} {
        padding: 0 16px;
    }
`

export const TradeDetails = ({ description }: TradeDetailsProps) => {
    return (
        <StyledSection>
            <Flex direction="column" max_width="99.6rem" m="0 auto" jc="space-between" ai="center">
                <StyledText>{description && <Localize translate_text={description} />}</StyledText>
            </Flex>
        </StyledSection>
    )
}
