import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Container } from 'components/containers'
import { Header, Text } from 'components/elements'

type ItemType = {
    title?: string | ReactNode
    subtitle?: string | ReactElement
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
    font-family: Ubuntu, sans-serif;

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
const Title = styled(Header)`
    font-family: Ubuntu, sans-serif;
`

const DNumbers = ({ items, justify }: DNumbersProps) => {
    return (
        <StyledContainer justify={justify || 'space-between'}>
            {items.map((item) => (
                <NumberWrapper
                    key={
                        typeof item.subtitle === 'string'
                            ? item.subtitle
                            : item.subtitle.props.translate_text
                    }
                >
                    <Title as="p" type="page-title" align="center">
                        {item.title}
                    </Title>
                    <StyledText align="center">{item.subtitle}</StyledText>
                </NumberWrapper>
            ))}
        </StyledContainer>
    )
}

export default DNumbers
