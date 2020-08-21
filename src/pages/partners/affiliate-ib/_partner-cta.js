import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import { affiliate_signup_url } from 'common/utility'

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

const LightButton = styled(LinkButton)`
    color: var(--color-white);
    margin-top: 1.6rem;
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
                    <LightButton
                        external="true"
                        to="mailto:partners@deriv.com"
                        tertiary
                        is_mail_link
                    >
                        {localize('Contact us')}
                    </LightButton>
                </Flex>
                <Flex direction="column" ai="center">
                    <Header as="h4" align="center" color="white">
                        {localize(
                            'Enjoy generous commissions and all the other benefits of being a Deriv partner',
                        )}
                    </Header>
                    <LinkButton
                        mt="2rem"
                        to={affiliate_signup_url}
                        external
                        target="_blank"
                        is_affiliate_link
                        secondary
                    >
                        {localize('Sign up')}
                    </LinkButton>
                </Flex>
            </Container>
        </StyledSection>
    )
}

export default CTA
