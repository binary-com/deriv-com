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
import { Container, SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import SideTab from 'components/elements/side-tab'
import device from 'themes/device'

const TncContainer = styled(Container)`
    padding: 6rem 0;

    @media ${device.tabletL} {
        padding-top: 9rem;
    }
`

const TermsAndConditions = () => (
    <Layout>
        <SEO
            title={localize('Terms and conditions')}
            description={localize(
                'Read our terms and conditions to learn how we manage our data feeds, security, privacy, and more.',
            )}
        />
        <TncContainer align="left" justify="left">
            <SideTab has_hash_routing is_sticky>
                <General
                    label="general"
                    text={localize('Terms and conditions')}
                />
                <DataFeed label="data-feed" text={localize('Data feed')} />
                <SecurityAndPrivacy
                    label="security-privacy"
                    text={localize('Security and privacy')}
                />

                <ConflictsPolicy
                    label="conflict-policy"
                    text={localize('Conflicts policy')}
                />

                <Copyright label="copyright" text={localize('Copyright')} />

                <ComplaintsAndDisputes
                    label="complaint-dispute"
                    text={localize('Complaints and disputes')}
                />

                <RiskDisclaimer
                    label="risk-disclaimer"
                    text={localize('Risk disclaimer')}
                />

                <OrderExecution
                    label="order-execution"
                    text={localize('Order execution')}
                />

                <PaymentAgents
                    label="payment-agent"
                    text={localize('Payment agents')}
                />
                <Bonuses label="bonuses" text={localize('Bonuses')} />
            </SideTab>
        </TncContainer>
    </Layout>
)

export default WithIntl()(TermsAndConditions)
