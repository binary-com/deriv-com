import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 32.8rem;
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
                        {localize('70+')}
                    </Header>
                    <Text align="center">
                        {localize('tradable assets and growing')}
                    </Text>
                </NumberWrapper>
                <NumberWrapper>
                    <Header as="h2" align="center">
                        {localize('1:1,000')}
                    </Header>
                    <Text align="center">{localize('maximum leverage')}</Text>
                </NumberWrapper>
                <NumberWrapper>
                    <Header as="h2" align="center">
                        {localize('30')}
                    </Header>
                    <Text align="center">{localize('maximum lot size')}</Text>
                </NumberWrapper>
            </StyledContainer>
        </SectionContainer>
    )
}

export default Numbers
