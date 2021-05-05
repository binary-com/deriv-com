import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'

const StyledSectionContainer = styled(SectionContainer)`
    border-bottom: 3px solid var(--color-grey-25);
`

const WhatIsDeriv = () => {
    return (
        <StyledSectionContainer>
            <Container>
                <Flex width="792px" fd="column" ai="center" jc="center">
                    <Header type="page-title" align="center">
                        <Localize translate_text="What is Deriv X" />
                    </Header>
                    <Text size="16px" align="center" mt="12px">
                        <Localize translate_text="Deriv X, developed by Devexperts, is a flexible, easy-to-use multi-asset trading platform. Offering CFDs on forex, commodities, cryptocurrencies, and synthetics, Deriv X gives you a versatile trading experience that’s fully customisable." />
                    </Text>
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}

export default WhatIsDeriv