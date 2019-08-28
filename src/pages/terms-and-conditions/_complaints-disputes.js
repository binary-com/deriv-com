import React from 'react'
import { StyledSection, StyledOrder, TncListText, StyledTitle } from './_styles'
import { localize, Localize } from 'components/localization'

export const ComplaintsAndDisputes = () => (
    <StyledSection>
        <StyledTitle as="h2" color="black">
            {localize('Complaints and disputes')}
        </StyledTitle>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    <Localize
                        translate_text="If you would like to file a complaint with regards to Our services, you can contact Us at <0>complaints@deriv.com</0>. You need to provide any relevant details relating to your complaint. We will investigate your enquiry and respond to you. We usually provide a final response within 15 working days from the day that We receive all relevant details."
                        component={[
                            <a
                                key={0}
                                href="mailto:complaints@deriv.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            />,
                        ]}
                    />
                </TncListText>
            </li>
        </StyledOrder>
    </StyledSection>
)
