import React from 'react'
import styled from 'styled-components'
import { Card, CardWrapper } from './_partner-card.js'
import { SectionContainer, Container } from 'components/containers'
import { Header } from 'components/elements/typography'
import { localize } from 'components/localization'
import device from 'themes/device'

const TitleWrapper = styled.div`
    max-width: 104.5rem;
    margin: 0 auto;
`
const StyledSection = styled(SectionContainer)`
    padding-bottom: 0;
`
const StyledHeader = styled(Header)`
    margin-bottom: 1.6rem;

    @media ${device.tabletL} {
        text-align: center;
    }
`
const DerivIBProgramme = () => {
    return (
        <StyledSection>
            <Container direction='column'>
                <TitleWrapper>
                    <Header font_size='3.6rem' align='center'>{localize('Deriv IB Programme')}</Header>
                    <Header as='h4' align='center' weight='500'>{localize('Our IB programme is available to all Deriv affiliates. Earn commission from your clients’ trades on DMT5.')}</Header>
                </TitleWrapper>
                <SectionContainer>
                    <StyledHeader as='h4'>{localize('Choose a commission plan:')}</StyledHeader>
                    <CardWrapper mt='-2rem' wrap='wrap'>
                        <Card height='42rem'>
                            test
                        </Card>
                    </CardWrapper>
                </SectionContainer>
            </Container>
        </StyledSection>
    )
}

export default DerivIBProgramme