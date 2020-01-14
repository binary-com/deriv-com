import React from 'react'
import styled from 'styled-components'
import { IconGrid } from './_icon-grid'
import { SEO, SectionContainer, GridContainer, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { Divider, Header, Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import { LinkButton } from 'components/form'

const Section = styled(SectionContainer)`
    background-color: ${props => props.bgcolor || 'transparent'};
`
const StyledHeader = styled(Header)`
    max-width: ${props => props.maxwidth || '100%'};
    margin: 0 auto;
    padding: ${props => props.padding || '0'};
`
const Column = styled.article`
    max-width: 340px;

    ${Header} {
        margin-bottom: 1rem;
    }
`

const WhyChooseUs = () => {
    return (
        <Layout>
            <SEO
                title={localize('Why Choose Us For Your Online Trading | Deriv.com')}
                description={localize(
                    'Deriv work with the aim of keeping our client’s belief on top that makes us the most reliable online trading platform. Find more reasons to trust us for online trading.',
                )}
            />
            <Section>
                <GridContainer>
                    <StyledHeader as="h1" align="center" lh="7.2rem">
                        {localize('Why choose Deriv')}
                    </StyledHeader>
                    <StyledHeader
                        as="h4"
                        align="center"
                        weight="normal"
                        lh="3rem"
                        padding="1.6rem 0 0"
                    >
                        {localize(
                            'Client trust is our highest priority, and that’s why millions of users choose us. Here are some of the things that make us a leading online trading service provider.',
                        )}
                    </StyledHeader>
                </GridContainer>
            </Section>
            <Divider />
            <Section>
                <IconGrid />
            </Section>
            <Divider />
            <Section>
                <GridContainer>
                    <Header as="h2" font_size="4rem" align="center">
                        {localize('Try Deriv at no risk')}
                    </Header>
                    <Flex mt="4rem" jc="space-around">
                        <Column>
                            <Header as="h3" font_size="var(--text-size-sm)" align="center">
                                {localize('Unlimited virtual funds')}
                            </Header>
                            <Text align="center">
                                {localize(
                                    'Practise trading with Deriv as long as you like. No risk, no hidden fees.',
                                )}
                            </Text>
                        </Column>
                        <Column>
                            <Header as="h3" font_size="var(--text-size-sm)" align="center">
                                {localize('All markets and platforms')}
                            </Header>
                            <Text align="center">
                                {localize('Enjoy full access to all our markets and platforms.')}
                            </Text>
                        </Column>
                        <Column>
                            <Header as="h3" font_size="var(--text-size-sm)" align="center">
                                {localize('No credit card needed')}
                            </Header>
                            <Text align="center">
                                {localize(
                                    'Sign up with just your email. No credit card or minimum deposit required.',
                                )}
                            </Text>
                        </Column>
                    </Flex>
                    <Flex mt="3.2rem">
                        <LinkButton to="/signup" secondary>
                            {localize("Sounds great. Let's get started.")}
                        </LinkButton>
                    </Flex>
                </GridContainer>
            </Section>
        </Layout>
    )
}

export default WithIntl()(WhyChooseUs)
