import React, { Component } from 'react'
import SideTab from 'components/elements/side-tab'
import { localize, WithIntl } from '../components/localization'
import Layout from 'components/layout/layout'
import SEO from 'components/containers/seo'
import Container from 'components/containers/container'
import styled from 'styled-components'
import { Header, Text } from 'components/elements/typography'

const StyledSection = styled.section`
    padding-left: 8rem;
`

const General = () => (
    <StyledSection>
        <Header as="h2">{localize('Terms and Conditions')}</Header>
        <Text lh="1.5">Version 1. Last modified 01-08-2019.</Text>
        <Text lh="1.5">
            It is the responsibility of each Client to read and understand this
            legal notice and the terms and conditions pursuant to which an
            acquisition of financial contracts via this site is governed.
        </Text>
    </StyledSection>
)

const DataFeed = () => <StyledSection>DataFeed</StyledSection>

const SecurityAndPrivacy = () => (
    <StyledSection>SecurityAndPrivacy</StyledSection>
)

const ConflictsPolicy = () => <StyledSection>ConflictsPolicy</StyledSection>

const Copyright = () => <StyledSection>Copyright</StyledSection>

const ComplaintsAndDisputes = () => (
    <StyledSection>ComplaintsAndDisputes</StyledSection>
)

const RiskDisclaimer = () => <StyledSection>RiskDisclaimer</StyledSection>

const OrderExecution = () => <StyledSection>OrderExecution</StyledSection>

const PaymentAgents = () => <StyledSection>PaymentAgents</StyledSection>

class TermsAndConditions extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <SEO title={localize('Terms and conditions')} />
                <Container
                    align="left"
                    justify="left"
                    padding={{ top: '6rem', bottom: '6rem' }}
                >
                    <SideTab>
                        <General label="general" text="Terms and conditions" />
                        <DataFeed label="data-feed" text="Data feed" />
                        <SecurityAndPrivacy
                            label="security-privacy"
                            text="Security and privacy"
                        />

                        <ConflictsPolicy
                            label="conflict-policy"
                            text="Conflicts policy"
                        />

                        <Copyright label="copyright" text="Copyright" />

                        <ComplaintsAndDisputes
                            label="complain-dispute"
                            text="Complaints and disputes"
                        />

                        <RiskDisclaimer
                            label="risk-disclaimer"
                            text="Risk disclaimer"
                        />

                        <OrderExecution
                            label="order-execution"
                            text="Order execution"
                        />

                        <PaymentAgents
                            label="payment-agent"
                            text="Payment agents"
                        />
                    </SideTab>
                </Container>
            </Layout>
        )
    }
}

export default WithIntl()(TermsAndConditions)
