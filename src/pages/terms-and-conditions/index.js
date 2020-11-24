import React from 'react'
import styled from 'styled-components'
import ClientGrid from './_clients-grid'
import BusinessGrid from './_business-grid'
import { SEO, SectionContainer, Container, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { Header, Tabs } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

const Section = styled(SectionContainer)`
    background-color: ${(props) => props.bgcolor || 'transparent'};
`

const TabWrapper = styled.div``

const TermsAndConditions = () => {
    return (
        <Layout>
            <SEO
                title={localize('Terms and conditions | Legal policies | Deriv')}
                description={localize(
                    'Read our terms and conditions to know Deriv manages data feeds, security, privacy, and more.',
                )}
            />
            <Section>
                <Container>
                    <Flex direction="column" ai="center" mb="8rem">
                        <Header as="h1" align="center" lh="7.2rem">
                            {localize('Terms and conditions')}
                        </Header>

                        <Header
                            as="h4"
                            align="center"
                            weight="normal"
                            lh="3rem"
                            max_width="98.4rem"
                            mt="1.6rem"
                        >
                            {localize(
                                'This is where you’ll find information about our legal policies and how they apply to you. The documents linked below collectively form our standard terms of use (the “Terms”). It’s important that you make yourself aware of these Terms and agree to them before using any of our websites, products, or services.',
                            )}
                        </Header>
                    </Flex>
                </Container>
                <TabWrapper>
                    <Tabs tab_list={['clients', 'business-partners']}>
                        <Tabs.Panel label={localize('FOR CLIENTS')}>
                            <ClientGrid />
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
