import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import { TString } from 'types/generics'

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
const what_is_derivez_title: TString = '_t_What is Deriv EZ_t_'
const what_is_derivez_subtitle: TString =
    '_t_Deriv EZ is a user-friendly CFDs trading platform that offers instant access to all your favourite assets. There is no additional account ID or password to remember, so you can fully focus on your trading. Trade on Deriv EZ and access a wide variety of assets in forex, stocks and indices, commodities, cryptocurrencies, and derived indices._t_'

const WhatIsDeriv = () => {
    return (
        <StyledSectionContainer>
            <Container>
                <Flex width="792px" fd="column" ai="center" jc="center">
                    <StyledHeader type="page-title" align="center" as="h2">
                        <Localize translate_text={what_is_derivez_title} />
                    </StyledHeader>
                    <Header size="16px" align="center" mt="16px" weight="normal">
                        <Localize translate_text={what_is_derivez_subtitle} />
                    </Header>
                </Flex>
            </Container>
        </StyledSectionContainer>
    )
}

export default WhatIsDeriv
