import React from 'react'
import styled from 'styled-components'
import BusinessGrid from './_business-grid'
import ClientGrid from './_clients-grid'
import { SEO, SectionContainer, Container, Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { Header, Tabs } from 'components/elements'
import { Localize, localize, WithIntl } from 'components/localization'

const Section = styled(SectionContainer)`
    background-color: transparent;
`

const TermsAndConditions = () => {
    return (
        <Layout>
            <SEO
                title={localize('_t_Terms and conditions | Legal policies | Deriv_t_')}
                description={localize(
                    '_t_Read our terms and conditions to know how Deriv manages data feeds, security, privacy, and more._t_',
                )}
            />
            <Section>
                <Container>
                    <Flex direction="column" ai="center" mb="8rem">
                        <Header as="h1" type="display-title" align="center" lh="7.2rem">
                            <Localize translate_text="_t_Terms and conditions_t_" />
                        </Header>

                        <Header
                            as="h4"
                            type="sub-section-title"
                            align="center"
                            weight="normal"
                            lh="3rem"
                            max_width="98.4rem"
                            mt="1.6rem"
                        >
                            <Localize translate_text="_t_This is where you’ll find information about our legal policies and how they apply to you. The documents linked below collectively form our standard terms of use (the “Terms”). It’s important that you make yourself aware of these Terms and agree to them before using any of our websites, products, or services._t_" />
                        </Header>
                    </Flex>
                </Container>
                <div>
                    <Tabs tab_list={['clients', 'business-partners']}>
                        <Tabs.Panel label={localize('_t_FOR CLIENTS_t_')}>
                            <ClientGrid />
                        </Tabs.Panel>
                        <Tabs.Panel label={localize('_t_FOR BUSINESS PARTNERS_t_')}>
                            <BusinessGrid />
                        </Tabs.Panel>
                    </Tabs>
                </div>
            </Section>
        </Layout>
    )
}

export default WithIntl()(TermsAndConditions)
