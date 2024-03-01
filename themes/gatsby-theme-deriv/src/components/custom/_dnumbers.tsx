import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Container } from 'components/containers'
import { Header, Text } from 'components/elements'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'

export type TDNumbersItem = {
    title: string | TString
    subtitle: TString
}

type DNumbersProps = {
    items?: TDNumbersItem[]
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-evenly'
}

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32.8rem;
`
const StyledText = styled(Text)`
    padding-top: 8px;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        padding-top: 0;
        margin: 12px 0;
    }
`
const StyledContainer = styled(Container)`
    direction: ltr;
    width: 100%;
    margin-top: 3rem;
    align-items: flex-start;
    @media ${device.tabletL} {
        flex-direction: column;
        margin-top: 0;
        padding: 3rem 0;
        align-items: center;
    }
`
const Title = styled(Header)`
    font-family: Ubuntu, sans-serif;
    color: var(--color-black-9);
`

const DNumbers = ({ items, justify }: DNumbersProps) => {
    return (
        <StyledContainer justify={justify || 'space-between'}>
            {items.map(({ subtitle, title }) => (
                <NumberWrapper key={title}>
                    <Title as="p" type="page-title" align="center">
                        {title.includes('_t_') ? (
                            <Localize translate_text={title as TString} />
                        ) : (
                            title
                        )}
                    </Title>
                    <StyledText align="center">
                        <Localize translate_text={subtitle} />
                    </StyledText>
                </NumberWrapper>
            ))}
        </StyledContainer>
    )
}

export default DNumbers
