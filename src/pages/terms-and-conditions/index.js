import React from 'react'
import styled from 'styled-components'
import CustomerGrid from './_customers-grid'
import BusinessGrid from './_business-grid'
import { SEO, SectionContainer, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { Header, Tabs } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

const Section = styled(SectionContainer)`
    background-color: ${props => props.bgcolor || 'transparent'};
`
const StyledHeader = styled(Header)`
    max-width: 98.4rem;
    margin-top: 1.6rem;
`

const TabWrapper = styled.div``

const TermsAndConditions = () => {
    return (
        <Layout>
            <SEO
                title={localize('Legal')}
                description={localize(
                    'Read our terms and conditions to learn how we manage our data feeds, security, privacy, and more.',
                )}
            />
            <Section>
                <Flex direction="column" ai="center" mb="8rem">
                    <Header as="h1" align="center" lh="7.2rem">
                        {localize('Legal')}
                    </Header>
                    <StyledHeader as="h4" align="center" weight="normal" lh="3rem">
                        {localize(
                            'This is where you’ll find information about our legal policies and how they apply to you. The documents linked below collectively form our standard terms of use (the “Terms”). It’s important that you make yourself aware of these Terms and agree to them before using any our websites, products, or services.',
                        )}
                    </StyledHeader>
                </Flex>
                <TabWrapper>
                    <Tabs tab_break="500px">
                        <Tabs.Panel label={localize('FOR CUSTOMERS')}>
                            <CustomerGrid />
                        </Tabs.Panel>
                        <Tabs.Panel label={localize('FOR BUSINESS PARTNERS')}>
                            <BusinessGrid />
                        </Tabs.Panel>
                    </Tabs>
                </TabWrapper>
            </Section>
        </Layout>
    )
}

export default WithIntl()(TermsAndConditions)
