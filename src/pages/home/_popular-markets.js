import React from 'react'
import styled from 'styled-components'
import { Header, HorizontalTab } from 'components/elements'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
import device from 'themes/device'
// Images
const StyledSection = styled(SectionContainer)`
    box-shadow: inset 0 1px 0 0 var(--color-grey-8);
    padding: 8rem 0 6rem;

    @media ${device.tabletL} {
        padding: 5rem 0;
    }
`

const PopularMarkets = () => {
    return (
        <StyledSection>
            <Container direction="column">
                <Header align="center" as="h3" type="section-title">
                    {localize('Popular markets')}
                </Header>
                <HorizontalTab />
            </Container>
        </StyledSection>
    )
}

export default PopularMarkets
