import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Container } from 'components/containers'
import { Header } from 'components/elements'

const Background = styled.div`
    background: var(--color-black);
    width: 100%;
    height: 100%;
`

const StyledContainer = styled(Container)`
    padding: 12rem 32.8rem;
`

const Hero = () => (
    <Background>
        <StyledContainer direction="column">
            <Header as="h1" color="white" align="center">
                {localize('About us')}
            </Header>
        </StyledContainer>
    </Background>
)

export default Hero
