import React from 'react'
import { Header } from 'components/elements/typography'
import {
    StyledSection,
    StyledOrder,
    TncListText,
    StyledHeader,
} from './_styles'
import { localize } from 'components/localization'

export const PaymentAgents = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Payment agents terms and conditions')}
        </Header>
        <StyledHeader as="h4" weight="500" margin={{ top: '2rem' }}>
            {localize('A. Scope of agreement')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'This agreement is between Deriv (SVG) Ltd (hereinafter referred to as "the Company" or "Deriv.com") and Payment Agent (hereinafter referred to as "the Agent"), both of whom agree to be bound by this agreement.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The Company and the Agent (hereinafter referred to as "the Parties") desire to enter into this agreement whereby the Company will offer to its clients local payment processing services through the Agent within a territory as specified in Section D of this agreement.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('B. General')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'This agreement constitutes the entire agreement between the Parties and no earlier representation, arrangement, or agreement, whether written or oral, relating to any matter dealt with in this agreement between the Parties, shall have any force or effect before the Commencement Date.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'This agreement is supplied to the Agent in English. In the event that there is a difference between the English version and any translated versions of this document, the English version shall prevail. The Company shall not be liable for any loss or damage whatsoever caused by an error, inaccuracy, or misspelling and, as a result, by misunderstanding or misinterpretation of any of the terms or conditions or clauses or provisions of any translated versions of this agreement.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Each Party shall do anything reasonably required by the other Party to give effect to the provisions of this agreement.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
    </StyledSection>
)
