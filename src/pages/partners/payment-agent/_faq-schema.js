import React from "react"
import { Localize } from 'components/localization'
export const faq_schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: <Localize translate_text='What is the Deriv Payment Agent Programme?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text='It is a partnership arrangement where a payment agent is authorised to process deposits and withdrawals for our clients.' />,
            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text="Why do clients need a payment agent?" />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text="Many of our clients are looking for ways to fund their accounts using payment methods that are not directly available on Deriv. As a payment agent, you'll be able to help them fund their accounts while charging a fixed commission per transaction." />,
            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text='Are there any fees I need to pay to become a payment agent on Deriv?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text="Not at all. Joining our payment agent programme is completely free." />,
            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text='Who sets the commission rate per transaction?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text='As a payment agent, you determine your commission per transaction, subject to our established thresholds.' />,
            },
        },
        {
            '@type': 'Question',
            name:
                <Localize translate_text='What happens if a payment agent charges more than the set commission threshold?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text='If we receive justified complaints, the payment agents involved will be banned immediately from our platform.' />,
            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text='Are payment agents employees or affiliates of Deriv?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text='No. Payment agents operate as independent exchangers and are not affiliates of Deriv.' />,
            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text='How can I add, remove or change my accepted payment methods?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text='To change your payment method, please contact us via livechat.' />,
            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text='As a payment agent, will I receive commissions from Deriv?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text='We do not pay commissions to payment agents. You set your own commission rate per transaction and our clients will bear the necessary fees.' />,
            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text='Can I advertise my services to Deriv clients?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text="Yes, provided that you follow all the relevant terms and conditions (see the tab entitled 'For business partners' on our Terms and conditions page)." />,
            },
        },
        {
            '@type': 'Question',
            name: <Localize translate_text='Will I still be able to trade with my account after registering as a payment agent?' />,
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    <Localize translate_text="Yes. As a payment agent, you will still be able to trade with your account." />,
            },
        },
    ],
}
