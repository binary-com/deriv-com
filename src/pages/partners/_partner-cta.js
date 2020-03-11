import React from 'react'
import styled from 'styled-components'
import Partner from 'common/partner'
import device from 'themes/device'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { Button, LinkButton } from 'components/form'
import { localize } from 'components/localization'

const StyledSection = styled(SectionContainer)`
    background-color: var(--color-black-3);

    ${Container} {
        @media ${device.tabletL} {
            justify-content: center;
            flex-direction: column;

            div:last-child {
                margin-top: 3.2rem;
            }
        }

        ${Flex} {
            max-width: 58.8rem;
        }
    }
`

const CTA = () => {
    return (
        <StyledSection padding="4rem 0">
            <Container>
                <Flex direction="column" ai="center" jc="space-between">
                    <Header as="h4" align="center" color="white">
                        {localize('Got more questions?')}
                    </Header>
                    <Text align="center" color="white" mt="0.8rem">
                        {localize('The Deriv affiliate management team is here to help.')}
                    </Text>
                    <LinkButton external to="mailto:affiliates@deriv.com" mt="1.6rem" tertiary>
                        {localize('Contact us')}
                    </LinkButton>
                </Flex>
                <Flex direction="column" ai="center">
                    <Header as="h4" align="center" color="white">
                        {localize(
                            'Enjoy generous commissions and all the other benefits of being a Deriv partner',
                        )}
                    </Header>
                    <Button mt="2rem" onClick={Partner.redirectToSignup} secondary>
                        {localize('Sign up')}
                    </Button>
                </Flex>
            </Container>
        </StyledSection>
    )
}

export default CTA
