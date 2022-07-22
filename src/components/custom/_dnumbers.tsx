import React, { ReactNode } from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'

type ItemType = {
    title?: string | ReactNode
    subtitle?: string | ReactNode
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
    width: 100%;

    @media ${device.tabletL} {
        flex-direction: column;
    }
`

const DNumbers = ({ items, justify }: DNumbersProps) => {
    return (
        <SectionContainer padding="4rem">
            <StyledContainer justify={justify || 'space-between'}>
                {items.map((item, index) => (
                    <NumberWrapper key={index}>
                        <Header as="p" type="page-title" align="center">
                            {item.title}
                        </Header>
                        <StyledText align="center">{item.subtitle}</StyledText>
                    </NumberWrapper>
                ))}
            </StyledContainer>
        </SectionContainer>
    )
}

export default DNumbers
