import React from 'react'
import { StyledSection, StyledOrder, TncListText, StyledTitle } from './_styles'
import { localize } from 'components/localization'

export const Copyright = () => (
    <StyledSection>
        <StyledTitle as="h2" color="black">
            {localize('Copyright')}
        </StyledTitle>
        <StyledOrder type="decimal">
            <li>
                <TncListText>{localize('Deriv is protected by certain copyrights.')}</TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The materials comprising Deriv (including without limitation all articles, text, images, logos, compilation, systems, code, and design) are under Copyright Deriv 2019 of companies with all rights reserved.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Such materials may be copied and distributed on a limited basis for noncommercial purposes only, provided that any material copied remains intact and that all copies include the following notice in a clearly visible position: "Copyright 2019 Deriv. All rights reserved."',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'These materials may not be copied or redistributed for commercial purposes or for compensation of any kind without prior written permission from a Binary Group company.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize('Deriv and Deriv logo are registered trademarks.')}
                </TncListText>
            </li>
        </StyledOrder>
    </StyledSection>
)
