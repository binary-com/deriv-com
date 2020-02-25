import React from 'react'
import styled from 'styled-components'
import CustomerGrid from './_customers-grid'
import BusinessGrid from './_business-grid'
import { SEO, SectionContainer, GridContainer } from 'components/containers'
import Layout from 'components/layout/layout'
import { Divider, Header, Tabs } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

const Section = styled(SectionContainer)`
    background-color: ${props => props.bgcolor || 'transparent'};
`
const StyledHeader = styled(Header)`
    max-width: ${props => props.maxwidth || '100%'};
    margin: 0 auto;
    padding: ${props => props.padding || '0'};
`

const TabWrapper = styled.div``

const TermsAndConditions = () => {
    return (
        <Layout>
            <SEO
                title={localize('Terms and conditions')}
                description={localize(
                    'Read our terms and conditions to learn how we manage our data feeds, security, privacy, and more.',
                )}
            />
            <Section>
                <GridContainer>
                    <StyledHeader as="h1" align="center" lh="7.2rem">
                        {localize('Terms and conditions')}
                    </StyledHeader>
                    <StyledHeader
                        as="h4"
                        align="center"
                        weight="normal"
                        lh="3rem"
                        padding="1.6rem 0 0"
                    >
                        {localize(
                            'Details of our agreement with you, how we protect your funds and security, and more',
                        )}
                    </StyledHeader>
                </GridContainer>
            </Section>
            <Divider />
            <Section>
                <TabWrapper>
                    <Tabs>
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
