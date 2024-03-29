import { localize } from 'components/localization'

type contentType = 'FAQPage' | 'Question' | 'Answer'

type AcceptedAnswerType = {
    '@type': contentType
    text: string
}

type MainEntityType = {
    '@type': contentType
    name: string
    acceptedAnswer: AcceptedAnswerType
}

type FaqSchemaType = {
    '@context': string
    '@type': contentType
    mainEntity: MainEntityType[]
}
export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_What is the Deriv Payment Agent Programme?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_It is a partnership arrangement where a payment agent is authorised to process deposits and withdrawals for our clients._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Is the Deriv Payment Agent Programme the same as Deriv P2P (DP2P)?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No, it isn’t. DP2P is a peer-to-peer service for our clients to make deposits and withdrawals using their local currency. As our payment agent, you can use the DP2P platform to offer your services to Deriv clients in your country_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Why do clients need a payment agent?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_Many of our clients are looking for ways to fund their accounts using payment methods that are not directly available on Deriv. As a payment agent, you'll be able to help them fund their accounts while charging a fixed commission per transaction._t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Are there any fees I need to pay to become a payment agent on Deriv?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Not at all. Joining our payment agent programme is completely free._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Who sets the commission rate per transaction?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_As a payment agent, you determine your commission per transaction, subject to our established thresholds._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_What happens if a payment agent charges more than the set commission threshold?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_If we receive justified complaints, the payment agents involved will be banned immediately from our platform._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Are payment agents employees or affiliates of Deriv?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No. Payment agents operate as independent exchangers and are not affiliates of Deriv._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How can I add, remove or change my accepted payment methods?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_To change your payment method, please contact us via livechat._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_As a payment agent, will I receive commissions from Deriv?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_We do not pay commissions to payment agents. You set your own commission rate per transaction and our clients will bear the necessary fees._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I advertise my services to Deriv clients?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_Yes, provided that you follow all the relevant terms and conditions (see the tab entitled 'For business partners' on our Terms and conditions page)._t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Will I still be able to trade with my account after registering as a payment agent?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No. You can only use your account as a payment agent to perform clients’ deposits and withdrawal requests. For trading purposes, you will need to open a separate account._t_',
                ),
            },
        },
    ],
}
