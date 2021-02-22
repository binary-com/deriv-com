import React from 'react'
import styled from 'styled-components'
import { HeaderPrimary, TextPrimary, LocalizedLinkText } from '../affiliate-ib/_faq-data'
import { Header, LinkText } from 'components/elements'
import { localize, Localize } from 'components/localization'

const TextLink = styled(LinkText).attrs({ as: 'span' })``

const General = () => (
    <>
        <Header as="h5" type="main-paragraph">
            {localize('What is the Deriv Payment Agent Programme?')}
        </Header>
        <TextPrimary>
            {localize(
                'It is a partnership arrangement where a payment agent is authorised to process deposits and withdrawals for our clients.',
            )}
        </TextPrimary>
        <HeaderPrimary as="h5" type="main-paragraph">
            {localize('Why do clients need a payment agent?')}
        </HeaderPrimary>
        <TextPrimary>
            {localize(
                "Many of our clients are looking for ways to fund their accounts using payment methods that are not directly available on Deriv. As a payment agent, you'll be able to help them fund their accounts while charging a fixed commission per transaction.",
            )}
        </TextPrimary>
        <HeaderPrimary as="h5" type="main-paragraph">
            {localize('Are there any fees I need to pay to become a payment agent on Deriv?')}
        </HeaderPrimary>
        <TextPrimary>
            {localize('Not at all. Joining our payment agent programme is completely free.')}
        </TextPrimary>
        <HeaderPrimary as="h5" type="main-paragraph">
            {localize('Who sets the commission rate per transaction?')}
        </HeaderPrimary>
        <TextPrimary>
            {localize(
                'As a payment agent, you determine your commission per transaction, subject to our established thresholds.',
            )}
        </TextPrimary>
        <HeaderPrimary as="h5" type="main-paragraph">
            {localize(
                'What happens if a payment agent charges more than the set commission threshold?',
            )}
        </HeaderPrimary>
        <TextPrimary>
            {localize(
                'If we receive justified complaints, the payment agents involved will be banned immediately from our platform.',
            )}
        </TextPrimary>
        <HeaderPrimary as="h5" type="main-paragraph">
            {localize('Are payment agents employees or affiliates of Deriv?')}
        </HeaderPrimary>
        <TextPrimary>
            {localize(
                'No. Payment agents operate as independent exchangers and are not affiliates of Deriv.',
            )}
        </TextPrimary>
    </>
)
const AccountManagement = () => (
    <>
        <Header as="h5" type="main-paragraph">
            {localize('How can I add, remove or change my accepted payment methods?')}
        </Header>
        <TextPrimary>
            <Localize
                translate_text="To change your payment method, please contact us via <0>livechat</0>."
                components={[
                    <TextLink
                        key={0}
                        color="red"
                        onClick={() => {
                            // eslint-disable-next-line no-undef
                            LC_API.open_chat_window()
                        }}
                    />,
                ]}
            />
        </TextPrimary>
        <HeaderPrimary as="h5" type="main-paragraph">
            {localize('As a payment agent, will I receive commissions from Deriv?')}
        </HeaderPrimary>
        <TextPrimary>
            {localize(
                'We do not pay commissions to payment agents. You set your own commission rate per transaction and our clients will bear the necessary fees.',
            )}
        </TextPrimary>
        <HeaderPrimary as="h5" type="main-paragraph">
            {localize('Can I advertise my services to Deriv clients?')}
        </HeaderPrimary>
        <TextPrimary>
            <Localize
                translate_text="Yes, provided that you follow all the relevant terms and conditions (see the tab entitled 'For business partners' on our <0>Terms and conditions</0> page)."
                components={[<LocalizedLinkText to="/terms-and-conditions/" key={0} />]}
            />
        </TextPrimary>
        <HeaderPrimary as="h5" type="main-paragraph">
            {localize(
                'Will I still be able to trade with my account after registering as a payment agent?',
            )}
        </HeaderPrimary>
        <TextPrimary>
            {localize(
                'Yes. As a payment agent, you will still be able to trade with your account.',
            )}
        </TextPrimary>
    </>
)
export { General, AccountManagement }
