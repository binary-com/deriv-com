import React from 'react'
import SideTab from 'components/elements/side-tab'
import { localize, WithIntl } from '../../components/localization'
import Layout from 'components/layout/layout'
import SEO from 'components/containers/seo'
import Container from 'components/containers/container'
import styled from 'styled-components'
import {
    General,
    DataFeed,
    SecurityAndPrivacy,
    ConflictsPolicy,
    Copyright,
    ComplaintsAndDisputes,
    RiskDisclaimer,
    OrderExecution,
    PaymentAgents,
} from './_content'

const TncContainer = styled(Container)`
    padding: 6rem 0;
`

const TermsAndConditions = () => (
    <Layout>
        <SEO title={localize('Terms and conditions')} />
        <TncContainer align="left" justify="left">
            <SideTab has_hash_routing>
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

                <PaymentAgents label="payment-agent" text="Payment agents" />
            </SideTab>
        </TncContainer>
    </Layout>
)

export default WithIntl()(TermsAndConditions)
