import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    @media ${device.tablet} {
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
                        <Localize translate_text="_t_What is Deriv X_t_" />
                    </StyledHeader>
                    <Text size="16px" align="center" mt="12px">
                        <Localize translate_text="_t_Deriv X is a customisable multi-asset trading platform. Offering CFDs on forex, commodities, cryptocurrencies, and synthetics, Deriv X gives you a versatile trading experience that lets you customise your trading environment._t_" />
                    </Text>
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}

export default WhatIsDeriv
