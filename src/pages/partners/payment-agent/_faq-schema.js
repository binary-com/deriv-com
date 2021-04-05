import { localize } from 'components/localization'
export const faq_schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('What is the Deriv Payment Agent Programme?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    localize('It is a partnership arrangement where a payment agent is authorised to process deposits and withdrawals for our clients.'),
            },
        },
        {
            '@type': 'Question',
            name: localize("Why do clients need a payment agent?"),
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    localize("Many of our clients are looking for ways to fund their accounts using payment methods that are not directly available on Deriv. As a payment agent, you'll be able to help them fund their accounts while charging a fixed commission per transaction."),
            },
        },
        {
            '@type': 'Question',
            name: localize('Are there any fees I need to pay to become a payment agent on Deriv?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    localize("Not at all. Joining our payment agent programme is completely free."),
            },
        },
        {
            '@type': 'Question',
            name: localize('Who sets the commission rate per transaction?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    localize('As a payment agent, you determine your commission per transaction, subject to our established thresholds.'),
            },
        },
        {
            '@type': 'Question',
            name:
                localize('What happens if a payment agent charges more than the set commission threshold?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    localize('If we receive justified complaints, the payment agents involved will be banned immediately from our platform.'),
            },
        },
        {
            '@type': 'Question',
            name: localize('Are payment agents employees or affiliates of Deriv?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    localize('No. Payment agents operate as independent exchangers and are not affiliates of Deriv.'),
            },
        },
        {
            '@type': 'Question',
            name: localize('How can I add, remove or change my accepted payment methods?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    localize('To change your payment method, please contact us via livechat.'),
            },
        },
        {
            '@type': 'Question',
            name: localize('As a payment agent, will I receive commissions from Deriv?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    localize('We do not pay commissions to payment agents. You set your own commission rate per transaction and our clients will bear the necessary fees.'),
            },
        },
        {
            '@type': 'Question',
            name: localize('Can I advertise my services to Deriv clients?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    localize("Yes, provided that you follow all the relevant terms and conditions (see the tab entitled 'For business partners' on our Terms and conditions page)."),
            },
        },
        {
            '@type': 'Question',
            name: localize('Will I still be able to trade with my account after registering as a payment agent?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    localize("Yes. As a payment agent, you will still be able to trade with your account."),
            },
        },
    ],
}
