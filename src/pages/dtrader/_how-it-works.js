import React from 'react'
import styled from 'styled-components'
import Container, { SectionContainer } from 'components/containers/container.js'
import { Header, Text } from 'components/elemens/typography.js'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-grey-6);
`

const StyledHeader = styled(Header)`
    margin-top: ${props => (props.as === 'h2' ? '0.8rem' : '0')};
`
const HowItWorks = () => {
    return (
        <StyledSection>
            <Container justify="center" direction="column">
                <StyledHeader as="h4">How it works</StyledHeader>
                <StyledHeader as="h2">
                    Make a trade in 3 easy steps
                </StyledHeader>
            </Container>
        </StyledSection>
    )
}
