import React from 'react'
import { Header } from 'components/elements/typography'
import { StyledSection, TncText } from './_styles'
import { localize } from 'components/localization'

export const Bonuses = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Bonuses')}
        </Header>
        <TncText>{localize('Bonuses bonuses')}</TncText>
    </StyledSection>
)
