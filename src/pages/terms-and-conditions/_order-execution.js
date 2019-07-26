import React from 'react'
import { Header } from 'components/elements/typography'
import { StyledSection, TncText } from './_styles'
import { localize } from 'components/localization'

export const OrderExecution = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Summary of the order execution policy')}
        </Header>
        <TncText>
            {localize(
                "The Company has a general duty to conduct its business with the client honestly, fairly, and professionally and to act in the client's best interests when opening and closing Binary Options trades with the client.",
            )}
        </TncText>
        <TncText>
            {localize(
                "More specifically, when the Company enters into a Binary Option trade with the client (each, a \"Contract\"), the Company has a duty to provide the client with 'best execution'. Best execution means that the Company must take reasonable steps to obtain the best possible result for the client when executing a client order. This document provides a summary of the Company's best execution policy.",
            )}
        </TncText>
        <TncText>
            {localize(
                'This policy applies to clients classified as retail or professional. Clients classified as eligible counterparties are outside the scope of this policy.',
            )}
        </TncText>
    </StyledSection>
)
