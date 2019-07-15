import React, { Component } from 'react'
import SideTab from 'components/elements/side-tab'
import { localize, WithIntl } from '../components/localization'
import Layout from '../components/layout/layout'
import SEO from '../components/containers/seo'
import Container from 'components/containers/container'
import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 0;
`

const General = () => <div>General</div>

const DataFeed = () => <div>DataFeed</div>

const SecurityAndPrivacy = () => <div>SecurityAndPrivacy</div>

const ConflictsPolicy = () => <div>ConflictsPolicy</div>

const Copyright = () => <div>Copyright</div>

const ComplaintsAndDisputes = () => <div>ComplaintsAndDisputes</div>

const RiskDisclaimer = () => <div>RiskDisclaimer</div>

const OrderExecution = () => <div>OrderExecution</div>

const PaymentAgents = () => <div>PaymentAgents</div>
class TermsAndConditions extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <SEO title={localize('Terms and conditions')} />
                <Container align="left">
                    <SideTab>
                        <StyledSection
                            label="tnc"
                            text={localize('Terms and conditions')}
                        >
                            <General />
                        </StyledSection>
                        <StyledSection
                            label="data-feed"
                            text={localize('Data feed')}
                        >
                            <DataFeed />
                        </StyledSection>
                        <StyledSection
                            label="security-privacy"
                            text={localize('Security and privacy')}
                        >
                            <SecurityAndPrivacy />
                        </StyledSection>
                        <StyledSection
                            label="conflict-policy"
                            text={localize('Conflicts policy')}
                        >
                            <ConflictsPolicy />
                        </StyledSection>
                        <StyledSection
                            label="copyright"
                            text={localize('Copyright')}
                        >
                            <Copyright />
                        </StyledSection>
                        <StyledSection
                            label="complaint-dispute"
                            text={localize('Complaints and disputes')}
                        >
                            <ComplaintsAndDisputes />
                        </StyledSection>
                        <StyledSection
                            label="risk-disclaimer"
                            text={localize('Risk disclaimer')}
                        >
                            <RiskDisclaimer />
                        </StyledSection>
                        <StyledSection
                            label="order-execution"
                            text={localize('Order execution')}
                        >
                            <OrderExecution />
                        </StyledSection>
                        <StyledSection
                            label="payment-agent"
                            text={localize('Payment agents')}
                        >
                            <PaymentAgents />
                        </StyledSection>
                    </SideTab>
                </Container>
            </Layout>
        )
    }
}

export default WithIntl()(TermsAndConditions)
