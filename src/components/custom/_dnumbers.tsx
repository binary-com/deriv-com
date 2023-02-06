import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Container } from 'components/containers'
import { Header, Text } from 'components/elements'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'

export type ItemType = {
    title?: TString | string
    subtitle?: TString
}

type DNumbersProps = {
    items?: ItemType[]
    justify?: string
}

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32.8rem;
`
const StyledText = styled(Text)`
    padding-top: 8px;

    @media ${device.tabletL} {
        padding-top: 0;
        margin: 12px 0;
    }
`
const StyledContainer = styled(Container)`
    direction: ltr;
    width: 100%;
    margin-top: 3rem;
    @media ${device.tabletL} {
        flex-direction: column;
        background-color: #f2f3f4;
        margin-top: 0;
        padding: 3rem 0;
    }
`

const DNumbers = ({ items, justify }: DNumbersProps) => {
    return (
        <StyledContainer justify={justify || 'space-between'}>
            {items.map(({ subtitle, title }) => (
                <NumberWrapper key={subtitle}>
                    <Header as="p" type="page-title" align="center">
                        {typeof title == 'string' ? title : <Localize translate_text={title} />}
                    </Header>
                    <StyledText align="center">
                        <Localize translate_text={subtitle} />
                    </StyledText>
                </NumberWrapper>
            ))}
        </StyledContainer>
    )
}

export default DNumbers
