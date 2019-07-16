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
    list-style: ${props => props.type || ''};
    font-size: var(--text-size-s);
    padding-left: 1.8rem;

    & > li {
        padding-left: 0.5rem;
    }
`

const General = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Terms and Conditions')}
        </Header>
        <Text margin={{ vertical: '2.4rem' }}>
            {localize('Version 1. Last modified 01-08-2019.')}
        </Text>
        <Text>
            {localize(
                'It is the responsibility of each Client to read and understand this legal notice and the terms and conditions pursuant to which an acquisition of financial contracts via this site is governed.',
            )}
        </Text>
        <Header as="h4" margin={{ top: '3.2rem' }}>
            {localize('A.  Introduction and scope of the agreement')}
        </Header>
        <StyledOrder type="decimal">
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize(
                        'By accessing and using Deriv.com, you accept and agree to be bound by these terms and conditions. It is your responsibility to read and understand the following terms and conditions. These terms and conditions may be supplemented from time to time by additional terms and conditions applicable to a particular company or products.',
                    )}
                </Text>
            </li>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize(
                        'The terms “We”, “Us”, and “Our” shall denote Binary (SVG) Ltd, Binary (Europe) Ltd, Binary (IOM) Ltd, and Binary Investments (Europe) Ltd.',
                    )}
                </Text>
            </li>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize(
                        'The services offered on Deriv are only suitable for you if you are able to bear the loss of all the money you invest and if you understand and have experienced the risks involved in the acquisition of such contracts. International currency or commodity prices are highly volatile and difficult to predict. Due to such volatility, no contract purchased in Our system (whether or not the payout exceeds the premium amount) can be considered a safe contract.',
                    )}
                </Text>
            </li>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize(
                        'The terms and conditions are provided in several languages. We attempt, as much as possible, to provide a faithful translation from the English version, reflecting the same principles. In the event of any differences between the English version of the Deriv website and any other language, the English version shall prevail.',
                    )}
                </Text>
            </li>
        </StyledOrder>
        <Header as="h4" margin={{ top: '3.2rem' }}>
            {localize('B. Governing laws and jurisdiction')}
        </Header>
        <StyledOrder type="decimal">
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize(
                        'It is your responsibility as you access Deriv to make sure that you understand and fully comply with the relevant laws or regulations of your own country. Deriv does not constitute and may not be used for the purposes of an offer or solicitation to anyone in any jurisdiction in which such offer or solicitation is not authorised or to any person to whom it is unlawful to make such an offer or solicitation. Access to Deriv and the offering of contracts via Deriv in certain jurisdictions may be restricted; therefore, as you access Deriv, you are required to know about such restrictions and observe them.',
                    )}
                </Text>
            </li>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize(
                        'The transactions performed on Deriv and the relationship between you and Us are governed by, and construed in accordance with, the laws of the country where We are incorporated (the "Jurisdiction"). You agree to submit to and bring any claim you may have before the Jurisdiction courts, and these courts will have sole authority to settle any disputes that may arise in relation thereto.',
                    )}
                </Text>
            </li>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize(
                        'You agree that in any legal, arbitration, mediation, regulatory, administration, or any other proceedings initiated by you or by Us, Our records of your dealings shall constitute evidence. You shall cooperate fully with any investigation by any regulatory authority.',
                    )}
                </Text>
            </li>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize(
                        'If any provision of this agreement shall be held invalid or unenforceable by a court or regulatory body of competent jurisdiction, the remainder of this agreement shall remain in full force and effect.',
                    )}
                </Text>
            </li>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize(
                        'For Binary (SVG) Ltd, the applicable Jurisdiction shall be St. Vincent and the Grenadines. For Binary (Europe) Ltd and Binary Investments (Europe) Ltd, the applicable Jurisdiction shall be Malta. For Binary (IOM) Ltd, the applicable jurisdiction is the Isle of Man.',
                    )}
                </Text>
            </li>
        </StyledOrder>
        <Header as="h4" margin={{ top: '3.2rem' }}>
            {localize('C. Communication')}
        </Header>
        <StyledOrder type="decimal">
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize(
                        'You may communicate with Us via Our website, email, phone, or exceptionally by post. Details can be found on the Contact us page of the website.',
                    )}
                </Text>
            </li>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize(
                        'Generally, We will communicate with you via Our website or send an email to the email address that you have provided upon account opening. We will communicate with you in English or, when possible, in your preferred language as selected at account opening. If you utilise anti-spam filtering that requires a fee to receive emails from Us, you must make sure that the communication We send you will get through to you.',
                    )}
                </Text>
            </li>
        </StyledOrder>
        <Header as="h4" margin={{ top: '3.2rem' }}>
            {localize('D. Account Management')}
        </Header>
        <StyledOrder type="decimal">
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize('Account opening')}
                </Text>
                <StyledOrder type="lower-alpha">
                    <li>
                        <Text margin={{ vertical: '0.8rem' }}>
                            {localize(
                                'You may only open an account on Deriv upon meeting the following conditions:',
                            )}
                        </Text>
                        <StyledOrder type="lower-roman">
                            <li>
                                <Text margin={{ vertical: '0.8rem' }}>
                                    {localize(
                                        'You have read the terms and conditions in full and have understood that you will be buying and selling contracts subject to these terms and conditions.',
                                    )}
                                </Text>
                            </li>
                            <li>
                                <Text margin={{ vertical: '0.8rem' }}>
                                    {localize(
                                        'You have read Our privacy statement and are aware of how We process information.',
                                    )}
                                </Text>
                            </li>
                            <li>
                                <Text margin={{ vertical: '0.8rem' }}>
                                    {localize(
                                        'You are acting for your sole benefit and not for or on behalf of any other person.',
                                    )}
                                </Text>
                            </li>
                            <li>
                                <Text margin={{ vertical: '0.8rem' }}>
                                    {localize('You are over 18 years of age.')}
                                </Text>
                            </li>
                            <li>
                                <Text margin={{ vertical: '0.8rem' }}>
                                    {localize(
                                        'You are not resident in a restricted country such as Canada, Hong Kong, Israel, Jersey, Malaysia, Malta, Paraguay, the United Arab Emirates, the USA, or any other restricted country that has been identified by the FATF as having strategic deficiencies. ',
                                    )}
                                </Text>
                            </li>
                            <li>
                                <Text margin={{ vertical: '0.8rem' }}>
                                    {localize(
                                        'You have sufficient experience and knowledge in matters of such trading to be capable of evaluating the merits and risks of acquiring contracts via Deriv and has done so without relying on any information offered on Deriv.',
                                    )}
                                </Text>
                            </li>
                        </StyledOrder>
                    </li>
                </StyledOrder>
            </li>
            <li>
                <Text margin={{ vertical: '0.8rem' }}>
                    {localize('Account closure')}
                </Text>
                <StyledOrder type="lower-alpha">
                    <li>
                        <Text margin={{ vertical: '0.8rem' }}>
                            {localize(
                                'You may choose to close your account yourself or by contacting Us. You can only close your account and withdraw any pending funds if you do not have any open trade positions and have complied with the requested "Know Your Client" procedures.',
                            )}
                        </Text>
                    </li>
                    <li>
                        <Text margin={{ vertical: '0.8rem' }}>
                            {localize(
                                'If you do not comply with the conditions of using Deriv, We may cancel your account and withhold any funds accumulated in it.',
                            )}
                        </Text>
                    </li>
                </StyledOrder>
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
