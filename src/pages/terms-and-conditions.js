import React, { Component } from 'react'
import SideTab from 'components/elements/side-tab'
import { localize, WithIntl } from '../components/localization'
import Layout from 'components/layout/layout'
import SEO from 'components/containers/seo'
import Container from 'components/containers/container'
import styled from 'styled-components'
import { Header, Text } from 'components/elements/typography'

const TncContainer = styled(Container)`
    padding: 6rem 0;
`

const StyledSection = styled.section`
    padding-left: 8rem;
`

const TncText = styled(Text)`
    margin: 2rem 0;
`

const TncListText = styled(Text)`
    margin: 0.8rem 0;
`

const StyledHeader = styled(Header)`
    margin-top: 3.2rem;
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
        <TncText>{localize('Version 1. Last modified 01-08-2019.')}</TncText>
        <TncText>
            {localize(
                'It is the responsibility of each Client to read and understand this legal notice and the terms and conditions pursuant to which an acquisition of financial contracts via this site is governed.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('A.  Introduction and scope of the agreement')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'By accessing and using Deriv.com, you accept and agree to be bound by these terms and conditions. It is your responsibility to read and understand the following terms and conditions. These terms and conditions may be supplemented from time to time by additional terms and conditions applicable to a particular company or products.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The terms “We”, “Us”, and “Our” shall denote Binary (SVG) Ltd, Binary (Europe) Ltd, Binary (IOM) Ltd, and Binary Investments (Europe) Ltd.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The services offered on Deriv are only suitable for you if you are able to bear the loss of all the money you invest and if you understand and have experienced the risks involved in the acquisition of such contracts. International currency or commodity prices are highly volatile and difficult to predict. Due to such volatility, no contract purchased in Our system (whether or not the payout exceeds the premium amount) can be considered a safe contract.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The terms and conditions are provided in several languages. We attempt, as much as possible, to provide a faithful translation from the English version, reflecting the same principles. In the event of any differences between the English version of the Deriv website and any other language, the English version shall prevail.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('B. Governing laws and jurisdiction')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'It is your responsibility as you access Deriv to make sure that you understand and fully comply with the relevant laws or regulations of your own country. Deriv does not constitute and may not be used for the purposes of an offer or solicitation to anyone in any jurisdiction in which such offer or solicitation is not authorised or to any person to whom it is unlawful to make such an offer or solicitation. Access to Deriv and the offering of contracts via Deriv in certain jurisdictions may be restricted; therefore, as you access Deriv, you are required to know about such restrictions and observe them.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The transactions performed on Deriv and the relationship between you and Us are governed by, and construed in accordance with, the laws of the country where We are incorporated (the "Jurisdiction"). You agree to submit to and bring any claim you may have before the Jurisdiction courts, and these courts will have sole authority to settle any disputes that may arise in relation thereto.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'You agree that in any legal, arbitration, mediation, regulatory, administration, or any other proceedings initiated by you or by Us, Our records of your dealings shall constitute evidence. You shall cooperate fully with any investigation by any regulatory authority.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'If any provision of this agreement shall be held invalid or unenforceable by a court or regulatory body of competent jurisdiction, the remainder of this agreement shall remain in full force and effect.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'For Binary (SVG) Ltd, the applicable Jurisdiction shall be St. Vincent and the Grenadines. For Binary (Europe) Ltd and Binary Investments (Europe) Ltd, the applicable Jurisdiction shall be Malta. For Binary (IOM) Ltd, the applicable jurisdiction is the Isle of Man.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('C. Communication')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'You may communicate with Us via Our website, email, phone, or exceptionally by post. Details can be found on the Contact us page of the website.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Generally, We will communicate with you via Our website or send an email to the email address that you have provided upon account opening. We will communicate with you in English or, when possible, in your preferred language as selected at account opening. If you utilise anti-spam filtering that requires a fee to receive emails from Us, you must make sure that the communication We send you will get through to you.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('D. Account Management')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>{localize('Account opening')}</TncListText>
                <StyledOrder type="lower-alpha">
                    <li>
                        <TncListText>
                            {localize(
                                'You may only open an account on Deriv upon meeting the following conditions:',
                            )}
                        </TncListText>
                        <StyledOrder type="lower-roman">
                            <li>
                                <TncListText>
                                    {localize(
                                        'You have read the terms and conditions in full and have understood that you will be buying and selling contracts subject to these terms and conditions.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'You have read Our privacy statement and are aware of how We process information.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'You are acting for your sole benefit and not for or on behalf of any other person.',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize('You are over 18 years of age.')}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'You are not resident in a restricted country such as Canada, Hong Kong, Israel, Jersey, Malaysia, Malta, Paraguay, the United Arab Emirates, the USA, or any other restricted country that has been identified by the FATF as having strategic deficiencies. ',
                                    )}
                                </TncListText>
                            </li>
                            <li>
                                <TncListText>
                                    {localize(
                                        'You have sufficient experience and knowledge in matters of such trading to be capable of evaluating the merits and risks of acquiring contracts via Deriv and has done so without relying on any information offered on Deriv.',
                                    )}
                                </TncListText>
                            </li>
                        </StyledOrder>
                    </li>
                </StyledOrder>
            </li>
            <li>
                <TncListText>{localize('Account closure')}</TncListText>
                <StyledOrder type="lower-alpha">
                    <li>
                        <TncListText>
                            {localize(
                                'You may choose to close your account yourself or by contacting Us. You can only close your account and withdraw any pending funds if you do not have any open trade positions and have complied with the requested "Know Your Client" procedures.',
                            )}
                        </TncListText>
                    </li>
                    <li>
                        <TncListText>
                            {localize(
                                'If you do not comply with the conditions of using Deriv, We may cancel your account and withhold any funds accumulated in it.',
                            )}
                        </TncListText>
                    </li>
                </StyledOrder>
            </li>
        </StyledOrder>
    </StyledSection>
)

const DataFeed = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Data feed')}
        </Header>
        <TncText>
            {localize(
                'Here is some information about the data feeds used by the Company.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Differences with other data feeds')}
        </StyledHeader>
        <TncText>
            {localize(
                "The Company's data feed may at times differ slightly from other data feeds found on the Internet (who may themselves differ from each other). Reasons for differences in feed providers include:",
            )}
        </TncText>
        <TncText>
            {localize(
                "For forex: The forex market is an OTC (over the counter) market, where banks and other major financial institutions trade currencies amongst themselves without there being any central clearing house. Accordingly, there is no 'official' price source for forex quotes. Different data feeds will contain quotes from a different sub-set of international banks. Accordingly, prices may differ among providers, depending on which bank(s) they obtain prices from.",
            )}
        </TncText>
        <TncText>
            {localize(
                "Market-closing times: The client is asked to refer to Trading times page for the exact time of settlement for all contracts. Other websites may adopt a different convention (for example, some websites choose 4 o'clock NY time or 5 o'clock London time). As a result, the open, high, low, and closing prices displayed on the Company's website may differ from those on other websites, due to the market-closing time convention.",
            )}
        </TncText>
        <TncText>
            {localize(
                "Use of bid/ask prices: When the market is illiquid, the data feed may contain many bid and ask prices, without there actually being any traded price for quite a while. By taking an average of the bid/ask price (i.e. bid + ask, divided by 2), a market quote is generated that reflects the current market, without it actually being a traded price. The Company's system will generate prices from these bid and ask prices, whereas other websites might not. As a result, the Company's website might display ticks that do not appear in the data feeds of other websites.",
            )}
        </TncText>
        <TncText>
            {localize(
                "The Company's data feed is designed to be one of the best and most robust available for a trading environment.",
            )}
        </TncText>
    </StyledSection>
)

const SecurityAndPrivacy = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Security and privacy')}
        </Header>
        <TncText>
            {localize(
                "The Company recognises the importance of protecting the client's personal and financial information.",
            )}
        </TncText>
        <TncText>
            {localize(
                "All the information that the Company obtains about the client assists the Company in servicing the client and the client's account. The Company knows that the client may be concerned about what the Company does with this information.",
            )}
        </TncText>
        <TncText>
            {localize(
                "The Company has outlined the Company's privacy practices for the client as follows:",
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('Use of information')}
        </StyledHeader>
        <TncText>
            {localize(
                'The Company operates in full compliance with the General Data Protection Regulation (GDPR) and other applicable Data Protection laws. These regulatory measures place obligations on users of personal data like the Company. They also lay down the principles for fair and lawful processing of all the information that the Company acquires.',
            )}
        </TncText>
        <TncText>
            {localize(
                "It is the Company's commitment to safeguard the client's privacy online at all times. The Company only uses the client's personal information to help the Company service the client's account, to improve the Company's services to the client, and to provide the client with products that the client has requested. The Company does not sell the client's personal information to third parties, but the Company may provide it to payment providers to facilitate transactions on the client's account.",
            )}
        </TncText>
        <TncText>
            {localize(
                "The client's personal information is used primarily as a way of validating the client as the legitimate account owner and proper recipient of withdrawal payments. The Company also uses this information to process the client's trades. The Company collects from the client all personal and financial data directly relating to the client when the client fills in the Company's account opening form. In all instances, the client has either a legal or a contractual obligation to provide the Company with the information. If such information is not provided, the Company will be unable to provide the client with its services.",
            )}
        </TncText>
        <TncText>
            {localize(
                "The Company reserves the right to request further information from the client whenever deemed appropriate under the circumstances. For example, the Company may ask the client to send the Company additional acceptable documents to confirm the authenticity of the client's account details or of any withdrawal request.",
            )}
        </TncText>
    </StyledSection>
)

const ConflictsPolicy = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Summary of the Conflicts policy')}
        </Header>
        <TncText>
            {localize(
                'The Company provides here a summary of the policy that the Company maintains in order to manage conflicts of interest in respect of the duties that the Company owes to clients.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize('General')}
        </StyledHeader>
        <TncText>
            {localize(
                "Due to the nature of the Company's business as a trading counterparty, the Company's profits are tied to the net revenue generated by clients through trading. However, the Company aims to establish, maintain, and operate effective organisational and administrative arrangements with a view to taking all reasonable steps to prevent conflicts of interest from constituting or giving rise to a material risk of damage to the interests of clients.",
            )}
        </TncText>
        <TncText>
            {localize(
                'Due to the high degree of risk involved, which could result in the loss of the entire investment, the Company has adequate internal procedures in place to ensure that the client is in all cases treated fairly and that the risk of damage to client interests will be mitigated.',
            )}
        </TncText>
        <StyledHeader as="h4" weight="500">
            {localize("The Company's policy")}
        </StyledHeader>
        <TncText>
            {localize(
                "The Company aims to keep a record of the kinds of activity that the Company carries on in which a material conflict could arise or has arisen. The Company also maintains procedures to manage actual or potential conflicts. This includes procedures to maintain appropriate independence among members of the Company's staff who are involved in potentially conflicting activities. Such independence-upholding procedures can be followed, for example, through the operation of information barriers, physical separation of staff, the segregation of duties and responsibilities, and the maintenance of a policy of independence, which requires the Company's staff, when providing services to a client, to act in the best interests of the client and to disregard any conflicts of interest, or in some circumstances, to decline to act for a client or potential client in order to avoid conflicts of interest.",
            )}
        </TncText>
    </StyledSection>
)

const Copyright = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Copyright')}
        </Header>
        <TncText>
            {localize(
                'The Deriv.com website is protected by certain copyrights.',
            )}
        </TncText>
        <TncText>
            {localize(
                'The materials comprising the Deriv.com website (including without limitation all articles, text, images, logos, compilation, systems, code, and design) are under Copyright 1999-2019 Binary Group of companies with all rights reserved.',
            )}
        </TncText>
        <TncText>
            {localize(
                'Such materials may be copied and distributed on a limited basis for noncommercial purposes only, provided that any material copied remains intact and that all copies include the following notice in a clearly visible position: “Copyright 1999-2019 Binary Ltd. All rights reserved.”',
            )}
        </TncText>
        <TncText>
            {localize(
                'These materials may not be copied or redistributed for commercial purposes or for compensation of any kind without prior written permission from a Binary Group company.',
            )}
        </TncText>
        <TncText>
            {localize(
                'Deriv.com and the bull/bear logo are registered trademarks.',
            )}
        </TncText>
    </StyledSection>
)

const ComplaintsAndDisputes = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Complaints and disputes')}
        </Header>
        <TncText>
            {localize(
                "If the client would like to file a complaint with regards to the Company's service, the client can contact the Company at complaints@deriv.com, providing any relevant details relating to the client's complaint. The Company will investigate the client's enquiry and a response will be given. The Company usually provides a final response within 15 working days from receipt of all relevant details.",
            )}
        </TncText>
    </StyledSection>
)

const RiskDisclaimer = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Risk disclaimer')}
        </Header>
        <TncText>
            {localize(
                'This notice provides the client with information about the risks associated with the contracts the client may purchase through services provided by Binary.com services.',
            )}
        </TncText>
        <TncText>
            {localize(
                'Binary Group members are sometimes referred to collectively as "Binary.com" or "the Company".',
            )}
        </TncText>
        <TncText>
            {localize(
                "This notice does not explain all of the risks involved in investments or similar products or how such risks relate to the client's personal circumstances. It is important that the client fully understand the risks involved before making a decision to enter into a trade with the Company.",
            )}
        </TncText>
        <TncText>
            {localize(
                "If the client chooses to enter into a contract with the Company, it is important that the client remains aware of the risks involved, that the client has adequate investment resources to bear such risks, and that the client monitors the client's positions carefully.",
            )}
        </TncText>
    </StyledSection>
)

const OrderExecution = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Summary of the order execution policy')}
        </Header>
        <TncText>
            {localize(
                "The Company has a general duty to conduct its business with the client honestly, fairly, and professionally and to act in the client's best interests when opening and closing Binary Options trades with the client.",
            )}
        </TncText>
        <TncText>
            {localize(
                "More specifically, when the Company enters into a Binary Option trade with the client (each, a \"Contract\"), the Company has a duty to provide the client with 'best execution'. Best execution means that the Company must take reasonable steps to obtain the best possible result for the client when executing a client order. This document provides a summary of the Company's best execution policy.",
            )}
        </TncText>
        <TncText>
            {localize(
                'This policy applies to clients classified as retail or professional. Clients classified as eligible counterparties are outside the scope of this policy.',
            )}
        </TncText>
    </StyledSection>
)

const PaymentAgents = () => (
    <StyledSection>
        <Header as="h2" color="black">
            {localize('Payment agents terms and conditions')}
        </Header>
        <StyledHeader as="h4" weight="500" margin={{ top: '2rem' }}>
            {localize('A. Scope of agreement')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'This agreement is between Deriv (SVG) Ltd (hereinafter referred to as "the Company" or "Deriv.com") and Payment Agent (hereinafter referred to as "the Agent"), both of whom agree to be bound by this agreement.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'The Company and the Agent (hereinafter referred to as "the Parties") desire to enter into this agreement whereby the Company will offer to its clients local payment processing services through the Agent within a territory as specified in Section D of this agreement.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
        <StyledHeader as="h4" weight="500" margin={{ top: '3.2rem' }}>
            {localize('B. General')}
        </StyledHeader>
        <StyledOrder type="decimal">
            <li>
                <TncListText>
                    {localize(
                        'This agreement constitutes the entire agreement between the Parties and no earlier representation, arrangement, or agreement, whether written or oral, relating to any matter dealt with in this agreement between the Parties, shall have any force or effect before the Commencement Date.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'This agreement is supplied to the Agent in English. In the event that there is a difference between the English version and any translated versions of this document, the English version shall prevail. The Company shall not be liable for any loss or damage whatsoever caused by an error, inaccuracy, or misspelling and, as a result, by misunderstanding or misinterpretation of any of the terms or conditions or clauses or provisions of any translated versions of this agreement.',
                    )}
                </TncListText>
            </li>
            <li>
                <TncListText>
                    {localize(
                        'Each Party shall do anything reasonably required by the other Party to give effect to the provisions of this agreement.',
                    )}
                </TncListText>
            </li>
        </StyledOrder>
    </StyledSection>
)

class TermsAndConditions extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <SEO title={localize('Terms and conditions')} />
                <TncContainer align="left" justify="left">
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
                </TncContainer>
            </Layout>
        )
    }
}

export default WithIntl()(TermsAndConditions)
