import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header } from 'components/elements/typography'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 28px;
    }
`
const StyledText = styled(Header)`
    padding-top: 8px;
    font-weight: normal;
    color: var(--color-black-9);
    max-width: 792px;
`

const StyledSectionContainer = styled(SectionContainer)`
    border-bottom: solid 1px var(--color-grey-2);

    @media ${device.tablet} {
        border-bottom: unset;
        padding: 40px 0;
    }
`

const WhatIsDeriv = () => {
    return (
        <StyledSectionContainer>
            <Container>
                <Flex width="792px" fd="column" ai="center" jc="center">
                    <StyledHeader type="page-title" align="center" as="h2">
                        <Localize translate_text="_t_What is Deriv X_t_" />
                    </StyledHeader>
                    <StyledText mt="16px" align="center" as="p" type="paragraph-1">
                        <Localize translate_text="_t_Deriv X is a customisable multi-asset trading platform. Offering CFDs on forex, commodities, exchange-traded funds, stocks & indices, cryptocurrencies, and derived indices, Deriv X gives you a versatile trading experience that lets you customise your trading environment._t_" />
                    </StyledText>
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}

export default WhatIsDeriv
