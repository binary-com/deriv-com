import React from 'react'
import styled from 'styled-components'
import Partner from 'common/partner'
import device from 'themes/device'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { Button } from 'components/form'
import { localize } from 'components/localization'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-black-3);

    ${Container} {
        @media ${device.tabletL} {
            justify-content: center;
            flex-direction: column;
        }

        div {
            width: 100%;
            max-width: 58.8rem;
            text-align: center;
            justify-content: space-between;
            
            h4 {
                color: var(--color-white);
                text-align: center;
            }
            p {
                color: var(--color-white);
                text-align: center;
                margin-top: 0.8rem;
            }
        }
    }
`
const CTA = () => {
    return (
        <StyledSection>
            <Container>
                <div>
                    <Header as='h4'>{localize('Got more questions?')}</Header>
                    <Text>{localize('The Deriv affiliate management team is here to help.')}</Text>
                    <Button style={{ marginTop: '1.6rem', color: 'var(--color-white)' }} tertiary>
                        {localize('Contact us')}
                    </Button>
                </div>
                <div>
                    <Header as='h4'>{localize('Enjoy generous commissions and all the other benefits of being a Deriv partner')}</Header>
                    <Button style={{ marginTop: '2rem' }} onClick={Partner.redirectToSignup} secondary >
                        {localize('Sign up')}
                    </Button>
                </div>
            </Container>
        </StyledSection>
    )
}

export default CTA