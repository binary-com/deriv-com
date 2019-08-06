import React from 'react'
import styled from 'styled-components'
import { General } from './_general'
import { ComplaintsAndDisputes } from './_complaints-disputes'
import { ConflictsPolicy } from './_conflicts-policy'
import { Copyright } from './_copyright.js'
import { DataFeed } from './_data-feed'
import { OrderExecution } from './_order-execution.js'
import { PaymentAgents } from './_payment-agents'
import { RiskDisclaimer } from './_risk-disclaimer'
import { SecurityAndPrivacy } from './_security-privacy.js'
import { Bonuses } from './_bonuses'
import Container from 'components/containers/container'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import SideTab from 'components/elements/side-tab'

const TncContainer = styled(Container)`
    padding: 6rem 0;
`

const TermsAndConditions = () => (
    <Layout>
        <SEO
            title={localize('Terms and conditions')}
            description={localize('Read our terms and conditions to learn how we manage our data feeds, security, privacy, and more.')}
        />
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
                <Bonuses label="bonuses" text="Bonuses" />
            </SideTab>
        </TncContainer>
    </Layout>
)

export default WithIntl()(TermsAndConditions)
