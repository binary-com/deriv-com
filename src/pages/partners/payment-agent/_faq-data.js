import React from 'react'
import styled from 'styled-components'
import {
    HeaderPrimary,
    TextPrimary,
    StyledLink,
    LocalizedLinkText,
} from '../affiliate-ib/_faq-data'
import { localize, Localize } from 'components/localization'
import { Header } from 'components/elements'

const HeaderFaq = styled(HeaderPrimary)`
    font-size: var(--text-size-s);
`

const General = () => (
    <>
        <Header as="h5">{localize('What is the Deriv Payment Agent Programme?')}</Header>
        <TextPrimary>
            {localize(
                'It is a partnership arrangement where a payment agent is authorised to process deposits and withdrawals for our clients.',
            )}
        </TextPrimary>
        <HeaderFaq>{localize('Why do clients need a payment agent?')}</HeaderFaq>
        <TextPrimary>
            {localize(
                "Many of our clients are looking for ways to fund their accounts using payment methods that are not directly available on Deriv. As a payment agent, you'll be able to help them fund their accounts while charging a fixed commission per transaction.",
            )}
        </TextPrimary>
        <HeaderFaq>
            {localize('Are there any fees I need to pay to become a payment agent on Deriv?')}
        </HeaderFaq>
        <TextPrimary>
            {localize('Not at all. Joining our payment agent programme is completely free.')}
        </TextPrimary>
        <HeaderFaq>{localize('Who sets the commission rate per transaction?')}</HeaderFaq>
        <TextPrimary>
            {localize(
                'As a payment agent, you determine your commission per transaction, subject to our established thresholds.',
            )}
        </TextPrimary>
        <HeaderFaq>
            {localize(
                'What happens if a payment agent charges more than the set commission threshold?',
            )}
        </HeaderFaq>
        <TextPrimary>
            {localize(
                'If we receive justified complaints, the payment agents involved will be banned immediately from our platform.',
            )}
        </TextPrimary>
        <HeaderFaq>{localize('Are payment agents employees or affiliates of Deriv?')}</HeaderFaq>
        <TextPrimary>
            {localize(
                'No. Payment agents operate as independent exchangers and are not affiliates of Deriv.',
            )}
        </TextPrimary>
    </>
)
const AccountManagement = () => (
    <>
        <Header as="h5">
            {localize('How can I add, remove or change my accepted payment methods?')}
        </Header>
        <TextPrimary>
            <Localize
                translate_text="To change your payment, please send an email to <0>support@deriv.com</0> for assistance."
                components={[<StyledLink href="mailto:support@deriv.com" key={0} />]}
            />
        </TextPrimary>
        <HeaderFaq>
            {localize('As a payment agent, will I receive commissions from Deriv?')}
        </HeaderFaq>
        <TextPrimary>
            {localize(
                'We do not pay commissions to payment agents. You set your own commission rate per transaction and our clients will bear the necessary fees.',
            )}
        </TextPrimary>
        <HeaderFaq>{localize('Can I advertise my services to Deriv clients?')}</HeaderFaq>
        <TextPrimary>
            <Localize
                translate_text="Yes, provided that you follow all the relevant terms and conditions (see the tab entitled 'For business partners' on our <0>Terms and conditions</0> page)."
                components={[<LocalizedLinkText to="/terms-and-conditions/" key={0} />]}
            />
        </TextPrimary>
        <HeaderFaq>
            {localize(
                'Will I still be able to trade with my account after registering as a payment agent?',
            )}
        </HeaderFaq>
        <TextPrimary>
            {localize(
                'Yes. As a payment agent, you will still be able to trade with your account.',
            )}
        </TextPrimary>
    </>
)

export { General, AccountManagement }
