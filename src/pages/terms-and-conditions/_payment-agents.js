import React from 'react'
import { Header } from 'components/elements/typography'
import {
    StyledSection,
    StyledOrder,
    TncListText,
    StyledHeader,
    TncText,
} from './_styles'
import { localize } from 'components/localization'

export const PaymentAgents = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Payment agents’ terms and conditions')}
        </Header>
        <StyledHeader as="h4" weight="500" margin={{ top: '2rem' }}>
            {localize('A. Scope of agreement')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'This agreement between you and Us is supplementary to Our terms and conditions, published on Our website, and all clauses, whether appearing here or elsewhere in Our terms and conditions, are true and binding.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Each party shall do anything reasonably required by the other party to give effect to the provisions of this agreement.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('B. Provision of services')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'You may provide your services to those of Our clients who want to deposit and/or withdraw money through you and want to use payment methods that are different from what We accept, including some e-wallet or e-payment methods (from now on referred to as “e-payments), some local currencies (from now on referred to as “local currencies”), or some local bank wire transfers (from now on referred to as “bank wire transfers”).',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'When a client makes deposits through you, the following process takes place:',
                    )}
                </TncListText>
            </li>
            <StyledOrder type="lower-alpha">
                <li>
                    <TncListText>
                        {localize(
                            'The client makes a deposit to you, using e-payments or bank wire transfers.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'You receive the deposited amount and make an equal deposit into your Deriv account.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'You transfer the deposited amount from your Deriv account to the client’s Deriv account (from now on referred to as the "Deriv Client Account").',
                        )}
                    </TncListText>
                </li>
            </StyledOrder>
            <li>
                <TncListText>
                    {localize(
                        'When a client makes a withdrawal through you, the following process takes place:',
                    )}
                </TncListText>
            </li>
            <StyledOrder type="lower-alpha">
                <li>
                    <TncListText>
                        {localize(
                            'The client requests a withdrawal from Deriv Client Account.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'The requested sum is transferred automatically from the Deriv Client Account into your Deriv account. (If the client has reached their withdrawal limit, the withdrawal request shall not proceed until the required authentication process is completed.',
                        )}
                    </TncListText>
                </li>
                <li>
                    <TncListText>
                        {localize(
                            'Next, you transfer the requested amount to the client.',
                        )}
                    </TncListText>
                </li>
                <TncText>
                    {localize(
                        'These transactions are not within the scope of this agreement, so if any dispute or potential dispute is caused by such transactions or in connection to them, We shall not be liable to you, the client, or any other person.',
                    )}
                </TncText>
                <li>
                    <TncListText>
                        {localize(
                            'This agreement prohibits you from offering your services to clients who live in the restricted countries listed in the General terms and conditions (the list might change from time to time).',
                        )}
                    </TncListText>
                </li>
            </StyledOrder>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('C. Your obligations')}
        </StyledHeader>
    </StyledSection>
)
