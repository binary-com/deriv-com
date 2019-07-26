import React from 'react'
import { Header } from 'components/elements/typography'
import { StyledSection, TncText } from './_styles'
import { localize } from 'components/localization'

export const ComplaintsAndDisputes = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Complaints and disputes')}
        </Header>
        <TncText>
            {localize(
                "If the client would like to file a complaint with regards to the Company's service, the client can contact the Company at complaints@deriv.com, providing any relevant details relating to the client's complaint. The Company will investigate the client's enquiry and a response will be given. The Company usually provides a final response within 15 working days from receipt of all relevant details.",
            )}
        </TncText>
    </StyledSection>
)
