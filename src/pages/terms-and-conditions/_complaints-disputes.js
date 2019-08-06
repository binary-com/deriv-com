import React from 'react'
import { StyledSection, TncText } from './_styles'

import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'

export const ComplaintsAndDisputes = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Complaints and disputes')}
        </Header>
        <TncText>
            {localize(
                'If you would like to file a complaint with regards to Our services, you can contact Us at complaints@deriv.com. You need to provide any relevant details relating to your complaint. We will investigate your enquiry and respond to you. We usually provide a final response within 15 working days from the day that We receive all relevant details.',
            )}
        </TncText>
    </StyledSection>
)
