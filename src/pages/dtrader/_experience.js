import React from 'react'
import styled from 'styled-components'
import Container, { SectionContainer } from 'components/containers/container.js'
import { Header, Text } from 'components/elements/typography.js'
import Button from 'components/form/button'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-grey-1);
`
const Content = styled.div`
    width: 50.2rem;
    text-align: center;

    ${Text} {
        margin-top: 2rem;
    }
`
const StyledButton = styled(Button)`
    margin-top: 2rem;
    ${props =>
        props.demo
            ? `    background-color: var(--color-grey-1);
    border-color: var(--color-grey-5);`
            : ''}
`
const Experience = () => {
    return (
        <StyledSection padding="4rem 0">
            <Container justify="space-between">
                <Content>
                    <Header as="h2" align="center">
                        20 years of experience and trust
                    </Header>
                    <Text align="center">
                        Join over a million traders worldwide
                    </Text>
                    <StyledButton secondary>Try for free</StyledButton>
                </Content>
                <Content>
                    <Header as="h2" align="center">
                        New to trading?
                    </Header>
                    <Text align="center">Check out our live demo</Text>
                    <StyledButton demo>Go to live demo</StyledButton>
                </Content>
            </Container>
        </StyledSection>
    )
}

export default Experience
