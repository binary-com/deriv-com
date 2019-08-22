import React from 'react'
import {
    StyledSection,
    StyledHeader,
    StyledOrder,
    TncListText,
    StyledTitle,
} from './_styles'
import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'

export const ConflictsPolicy = () => (
    <StyledSection>
        <StyledTitle as="h2" color="black">
            {localize('Conflicts policy')}
        </StyledTitle>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'We provide here a summary of the policy that We maintain in order to manage conflicts of interest in respect of the duties that We owe you.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('A. General')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'Due to the nature of Our business as a trading counterparty, Our profits are tied to the net revenue that you generate through trading. However, We aim to establish, maintain, and operate effective organisational and administrative arrangements with a view to taking all reasonable steps to prevent conflicts of interest from constituting or giving rise to a material risk of damage to your interests.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Due to the high degree of risk involved, which could result in the loss of the entire investment, We have adequate internal procedures in place to ensure that you are in all cases treated fairly and that the risk of damage to your interests is mitigated.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500">
            {localize('B. Our policy')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'We aim to keep a record of the kinds of activity that We carry on in which a material conflict could arise or has arisen. We also maintain procedures to manage actual or potential conflicts. This includes procedures to maintain appropriate independence among members of Our staff who are involved in potentially conflicting activities. Such independence-upholding procedures can be followed, for example, through the operation of information barriers, physical separation of staff, the segregation of duties and responsibilities, and the maintenance of a policy of independence, which requires Our staff to act in your best interests and disregard any conflicts of interest when providing you with Our services, or in some circumstances to decline to act for you or a potential client in order to avoid conflicts of interest.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
    </StyledSection>
)
