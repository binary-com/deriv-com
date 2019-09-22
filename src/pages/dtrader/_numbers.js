import React from 'react'
import styled from 'styled-components'
import Container, { SectionContainer } from 'components/containers/container.js'
import { Header, Text } from 'components/elements/typography.js'

const NumberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
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
                    <Header as="h2" align='center'>50+</Header>
                    <Text align='center'>tradable assets and growing</Text>
                </NumberWrapper>
                <NumberWrapper>
                    <Header as="h2">$0.35</Header>
                    <Text align='center'>low minimum stake</Text>
                </NumberWrapper>
                <NumberWrapper>
                    <Header as="h2">1s - 365d</Header>
                    <Text align='center'>flexible trade duration</Text>
                </NumberWrapper>
                <NumberWrapper>
                    <Header as="h2">>200%</Header>
                    <Text align='center'>potential payout</Text>
                </NumberWrapper>
            </StyledContainer>
        </SectionContainer>
    )
}

export default Numbers
