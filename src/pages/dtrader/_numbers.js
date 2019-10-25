import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 24.1rem;
`
const StyledContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`
const Numbers = () => {
    return (
        <SectionContainer padding="4.3rem">
            <StyledContainer>
                <NumberWrapper>
                    <Header as="h2" align="center">
                        {localize('50+')}
                    </Header>
                    <Text align="center">
                        {localize('tradable assets and growing')}
                    </Text>
                </NumberWrapper>
                <NumberWrapper>
                    <Header as="h2">{localize('$0.35')}</Header>
                    <Text align="center">{localize('low minimum stake')}</Text>
                </NumberWrapper>
                <NumberWrapper>
                    <Header as="h2">{localize('1s - 365d')}</Header>
                    <Text align="center">
                        {localize('flexible trade duration')}
                    </Text>
                </NumberWrapper>
                <NumberWrapper>
                    <Header as="h2">&gt;{localize('200%')}</Header>
                    <Text align="center">{localize('potential payout')}</Text>
                </NumberWrapper>
            </StyledContainer>
        </SectionContainer>
    )
}

export default Numbers
