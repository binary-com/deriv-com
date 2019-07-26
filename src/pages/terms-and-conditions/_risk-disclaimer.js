import React from 'react'
import { Header } from 'components/elements/typography'
import { StyledSection, TncText } from './_styles'
import { localize } from 'components/localization'

export const RiskDisclaimer = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Risk disclaimer')}
        </Header>
        <TncText>
            {localize(
                'This notice provides the client with information about the risks associated with the contracts the client may purchase through services provided by Binary.com services.',
            )}
        </TncText>
        <TncText>
            {localize(
                'Binary Group members are sometimes referred to collectively as "Binary.com" or "the Company".',
            )}
        </TncText>
        <TncText>
            {localize(
                "This notice does not explain all of the risks involved in investments or similar products or how such risks relate to the client's personal circumstances. It is important that the client fully understand the risks involved before making a decision to enter into a trade with the Company.",
            )}
        </TncText>
        <TncText>
            {localize(
                "If the client chooses to enter into a contract with the Company, it is important that the client remains aware of the risks involved, that the client has adequate investment resources to bear such risks, and that the client monitors the client's positions carefully.",
            )}
        </TncText>
    </StyledSection>
)
