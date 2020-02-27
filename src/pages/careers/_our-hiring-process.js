import React from 'react'
import styled from 'styled-components'
import { Container, SectionContainer } from 'components/containers'
import { BackgroundImage, Text, Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'

const StyledHeader = styled(Header)`
    margin-bottom: 5.8rem;
`

const ProcessContainer = styled.div`
    position: relative;
    height: 152.7rem;
`

const OurHiringProcess = () => (
    <SectionContainer padding="12rem 0">
        <Container direction="column">
            <StyledHeader as="h3" align="center">
                {localize('Our hiring process')}
            </StyledHeader>
            <ProcessContainer></ProcessContainer>
        </Container>
    </SectionContainer>
)

export default OurHiringProcess
