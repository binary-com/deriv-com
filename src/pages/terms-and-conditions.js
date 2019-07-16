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

const StyledOrder = styled.ol`
    list-style: decimal;
`

const General = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Terms and Conditions')}
        </Header>
        <Text margin={{ vertical: '2.4rem' }}>
            Version 1. Last modified 01-08-2019.
        </Text>
        <Text margin={{ bottom: '3.2rem' }}>
            It is the responsibility of each Client to read and understand this
            legal notice and the terms and conditions pursuant to which an
            acquisition of financial contracts via this site is governed.
        </Text>
        <Header as="h4">
            {localize('A.  Introduction and scope of the agreement')}
        </Header>
        <StyledOrder>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    By accessing and using Deriv.com, you accept and agree to be
                    bound by these terms and conditions. It is your
                    responsibility to read and understand the following terms
                    and conditions. These terms and conditions may be
                    supplemented from time to time by additional terms and
                    conditions applicable to a particular company or products.
                </Text>
            </li>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    The terms “We”, “Us”, and “Our” shall denote Binary (SVG)
                    Ltd, Binary (Europe) Ltd, Binary (IOM) Ltd, and Binary
                    Investments (Europe) Ltd.
                </Text>
            </li>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    The services offered on Deriv are only suitable for you if
                    you are able to bear the loss of all the money you invest
                    and if you understand and have experienced the risks
                    involved in the acquisition of such contracts. International
                    currency or commodity prices are highly volatile and
                    difficult to predict. Due to such volatility, no contract
                    purchased in Our system (whether or not the payout exceeds
                    the premium amount) can be considered a safe contract.
                </Text>
            </li>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    The terms and conditions are provided in several languages.
                    We attempt, as much as possible, to provide a faithful
                    translation from the English version, reflecting the same
                    principles. In the event of any differences between the
                    English version of the Deriv website and any other language,
                    the English version shall prevail.
                </Text>
            </li>
        </StyledOrder>
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
