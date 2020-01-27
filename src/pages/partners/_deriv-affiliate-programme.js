import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container } from 'components/containers'
import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-grey-8);
`
const TitleWrapper = styled.section`
    h1:first-child {
        margin-bottom: 1.6rem
    }
`
const DerivAffiliateProgramme = () => {
    return (
        <StyledSection>
            <Container>
                <TitleWrapper>
                    <Header font_size='3.6rem' align='center'>{localize('Deriv Affiliate Programme')}</Header>
                    <Header as='h4' align='center' weight='500'>{localize('Partner with us as an affiliate. Earn commission from the total net revenue of your referred clients’ trades on DTrader, DBot and DMT5.')}</Header>
                </TitleWrapper>
            </Container>
        </StyledSection>
    )
}

export default DerivAffiliateProgramme