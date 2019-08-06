import React from 'react'
import { StyledSection, TncText } from './_styles'
import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'

export const Copyright = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Copyright')}
        </Header>
        <TncText>
            {localize('Deriv is protected by certain copyrights.')}
        </TncText>
        <TncText>
            {localize(
                'The materials comprising Deriv (including without limitation all articles, text, images, logos, compilation, systems, code, and design) are under Copyright Deriv 2019 of companies with all rights reserved.',
            )}
        </TncText>
        <TncText>
            {localize(
                'Such materials may be copied and distributed on a limited basis for noncommercial purposes only, provided that any material copied remains intact and that all copies include the following notice in a clearly visible position: "Copyright 1999-2019 Binary Ltd. All rights reserved."',
            )}
        </TncText>
        <TncText>
            {localize(
                'These materials may not be copied or redistributed for commercial purposes or for compensation of any kind without prior written permission from a Binary Group company.',
            )}
        </TncText>
        <TncText>
            {localize('Deriv and Deriv logo are registered trademarks.')}
        </TncText>
    </StyledSection>
)
