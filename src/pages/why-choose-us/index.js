import React from 'react'
import styled from 'styled-components'
import { IconGrid } from './_icon-grid'
import { SEO, SectionContainer, GridContainer, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { Divider, Header, Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import { LinkButton } from 'components/form'
import device from 'themes/device'

const ResponsiveLinkButton = styled(LinkButton)`
    @media ${device.mobileL} {
        font-size: 1.75rem;
    }
`

const Section = styled(SectionContainer)`
    background-color: ${(props) => props.bgcolor || 'transparent'};
`
const StyledHeader = styled(Header)`
    max-width: ${(props) => props.maxwidth || '100%'};
    margin: 0 auto;
`
const Column = styled.article`
    max-width: 340px;

    ${Header} {
        margin-bottom: 1rem;
    }

    @media ${device.tabletL} {
        max-width: 100%;

        ${Text} {
            font-size: 2rem;
        }
    }
`

const ColumnContainer = styled(Flex)`
    @media ${device.tablet} {
        flex-direction: column;
        align-items: center;

        article:nth-child(2) {
            margin: 3rem 0;
        }
    }
`

const ResponsiveHeader = styled(StyledHeader)`
    @media ${device.mobileL} {
        font-size: 5rem;
    }
`

const WhyChooseUs = () => {
    return (
        <Layout>
            <SEO
                title={localize('Why choose Deriv for your online trading | Deriv')}
                description={localize(
                    'We’re steadfast in our commitment to high ethical standards. Find more reasons to know why Deriv is the choice of online traders.',
                )}
            />
            <Section>
                <GridContainer>
                    <ResponsiveHeader as="h1" type="display-title" align="center">
                        {localize('Why choose Deriv')}
                    </ResponsiveHeader>
                    <StyledHeader
                        as="h4"
                        type="sub-section-title"
                        align="center"
                        weight="normal"
                        lh="3rem"
                        pt="1.6rem"
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
                    <Header as="h2" type="page-title" size="4rem" align="center">
                        {localize('Try Deriv at no risk')}
                    </Header>
                    <ColumnContainer mt="4rem" jc="space-around">
                        <Column>
                            <Header as="h4" type="sub-section-title" align="center">
                                {localize('Unlimited virtual funds')}
                            </Header>
                            <Text align="center">
                                {localize(
                                    'Practise trading with Deriv as long as you like. No risk, no hidden fees.',
                                )}
                            </Text>
                        </Column>
                        <Column>
                            <Header as="h4" type="sub-section-title" align="center">
                                {localize('All markets and platforms')}
                            </Header>
                            <Text align="center">
                                {localize('Enjoy full access to all our markets and platforms.')}
                            </Text>
                        </Column>
                        <Column>
                            <Header as="h4" type="sub-section-title" align="center">
                                {localize('No credit card needed')}
                            </Header>
                            <Text align="center">
                                {localize(
                                    'Sign up with just your email. No credit card or minimum deposit required.',
                                )}
                            </Text>
                        </Column>
                    </ColumnContainer>
                    <Flex mt="3.2rem">
                        <ResponsiveLinkButton to="/signup" secondary="true">
                            {localize("Sounds great. Let's get started.")}
                        </ResponsiveLinkButton>
                    </Flex>
                </GridContainer>
            </Section>
        </Layout>
    )
}

export default WithIntl()(WhyChooseUs)
