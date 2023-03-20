import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header } from 'components/elements/typography'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 32px;
    }
`
const StyledText = styled(Header)`
    padding-top: 8px;
    font-size: 16px;
    color: var(--color-black-9);
    max-width: 792px;
    text-align @media ${device.tabletL} {
        font-size: 24px;
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    border-bottom: solid 1px var(--color-grey-2);

    @media ${device.tablet} {
        border-bottom: unset;
    }
`

const WhatIsDeriv = () => {
    return (
        <StyledSectionContainer>
            <Container>
                <Flex width="792px" fd="column" ai="center" jc="center">
                    <StyledHeader type="page-title" align="center" as="h2">
                        <Localize translate_text="What is Deriv X" />
                    </StyledHeader>
                    <StyledText weight="100" mt="16px" align="center">
                        <Localize translate_text="Deriv X is a customisable multi-asset trading platform. Offering CFDs on forex, commodities, stocks & indices, cryptocurrencies, and derived, Deriv X gives you a versatile trading experience that lets you customise your trading environment." />
                    </StyledText>
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}

export default WhatIsDeriv
