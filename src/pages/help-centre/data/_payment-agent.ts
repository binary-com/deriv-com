import { TQuestionsData } from './_data-types'

const payment_agent: TQuestionsData = {
    section: 'General',
    category: '_t_Payment Agent_t_',
    hide_for_eu: true,
    questions: [
        {
            question: '_t_What is the Deriv Payment Agent Programme?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'what-is-payment-agent',
            answer: [
                {
                    translation_text:
                        '_t_It’s a partnership programme where we authorise third-party payment agents to process deposits and withdrawals for Deriv clients._t_',
                },
            ],
        },
        {
            question: '_t_Is the Deriv Payment Agent Programme the same as Deriv P2P?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'is-payment-agent-same-as-p2p',
            answer: [
                {
                    translation_text:
                        '_t_No, it isn’t. <0>Deriv P2P</0> is a peer-to-peer service for our clients to make deposits and withdrawals using their local currency. As our payment agent, you can use Deriv P2P to offer your services to Deriv clients in your country._t_',
                    translation_components: [{ key: 0, type: 'link', to: '/p2p' }],
                },
            ],
        },
        {
            question: '_t_Why do clients need a payment agent?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'why-payment-agent',
            answer: [
                {
                    translation_text: `_t_Many of our clients are looking for ways to fund their accounts using payment methods that are not directly available on Deriv. As a payment agent, you'll be able to help them fund their accounts while charging a fixed commission per transaction._t_`,
                },
            ],
        },
        {
            question: '_t_Do I need a Deriv account to become a payment agent?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'need-account-to-become-agent',
            answer: [
                {
                    translation_text:
                        '_t_Yes, you’ll need a Deriv real account to process deposits and withdrawals for our clients._t_',
                },
            ],
        },
        {
            question: '_t_Do I have to pay any fees to become a payment agent for Deriv?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'pay-fee-to-become-agent',
            answer: [
                {
                    translation_text:
                        '_t_Not at all. Our payment agent programme is completely free. You’ll just need to have a minimum balance in your Deriv account when signing up. The minimum amount depends on your country of residence._t_',
                },
            ],
        },
        {
            question: '_t_Do I get commission as a payment agent?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'get-commission-as-agent',
            answer: [
                {
                    translation_text:
                        '_t_We don’t pay commission, but you can set your own commission rate per transaction within reasonable thresholds. When you sign up, our team will be in touch to work out the details with you._t_',
                },
            ],
        },
        {
            question:
                '_t_What happens if a payment agent charges more than the set commission threshold?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'payment-agent-charges-more',
            answer: [
                {
                    translation_text:
                        '_t_If we receive justified complaints, the payment agents involved will be banned immediately from our platform._t_',
                },
            ],
        },
        {
            question: '_t_Are payment agents employees or affiliates of Deriv?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'payment-agent-employee-or-affiliate',
            answer: [
                {
                    translation_text:
                        '_t_No. Payment agents operate as independent exchangers and are not affiliates of Deriv._t_',
                },
            ],
        },
        {
            question:
                '_t_What is the difference between a payment agent and a premium payment agent?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'difference-agent-premium',
            answer: [
                {
                    translation_text:
                        '_t_Payment agents (PA) and premium payment agents (PPA) help clients with their transactions. However, a premium payment agent (PPA) can conduct transactions with both clients and other payment agents, whereas a payment agent can only conduct transactions with clients._t_',
                },
            ],
        },
        {
            question: '_t_Who can become a premium payment agent?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'who-can-be-premium-agent',
            answer: [
                {
                    translation_text: `_t_An approved payment agent can become a premium payment agent upon meeting our Compliance team's criteria._t_`,
                },
            ],
        },
        {
            question: '_t_Will I be required to pay a fee to become a premium payment agent?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'fee-for-premium-agent',
            answer: [
                {
                    translation_text: `_t_No, you don't need to pay a fee to become a premium payment agent._t_`,
                },
            ],
        },
        {
            question: '_t_What is the cost of using the premium payment agent’s services?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'cost-of-using-premium-agent',
            answer: [
                {
                    translation_text:
                        '_t_Clients or payment agents can discuss and negotiate fees with the premium payment agent._t_',
                },
            ],
        },
        {
            question:
                '_t_Can a premium payment agent provide their services to another premium payment agent?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'provide-service-to-another-agent',
            answer: [
                {
                    translation_text:
                        '_t_Yes, a premium payment agent can conduct transactions with other premium payment agents._t_',
                },
            ],
        },
        {
            question: '_t_Can payment agent offer their services to a premium payment agent?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'offer-service-to-premium',
            answer: [
                {
                    translation_text:
                        '_t_No, payment agents can only perform transactions with clients._t_',
                },
            ],
        },
        {
            question: '_t_Can a payment agent offer their service to other payment agents?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'offer-service-to-agent',
            answer: [
                {
                    translation_text: `_t_No, payment agents cannot conduct transactions with other payment agents. They can only accept clients' transaction requests._t_`,
                },
            ],
        },
        {
            question:
                '_t_Can all Deriv clients use premium payment agents to process transactions?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'all-clients-use-premium',
            answer: [
                {
                    translation_text:
                        '_t_Yes, any Deriv client can use transaction services from a premium payment agent._t_',
                },
            ],
        },
        {
            question: '_t_How can I add, remove or change my accepted payment methods?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'modify-payment-methods',
            answer: [
                {
                    translation_text:
                        '_t_To change your payment method, please contact us via <0>live chat</0>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/contact_us/?is_livechat_open=true' },
                    ],
                },
            ],
        },
        {
            question: '_t_Can I advertise my services to Deriv clients?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'advertise-to-clients',
            answer: [
                {
                    translation_text: `_t_Yes, provided that you follow all the relevant terms and conditions (see the tab entitled 'For business partners' on our <0>Terms and conditions</0> page)._t_`,
                    translation_components: [
                        { key: 0, type: 'link', to: '/terms-and-conditions/#clients' },
                    ],
                },
            ],
        },
        {
            question:
                '_t_Will I still be able to trade with my account after registering as a payment agent?_t_',
            category: 'Payment Agent',
            sub_category: '_t_Partners_t_',
            label: 'trade-as-agent',
            answer: [
                {
                    translation_text:
                        '_t_No. You can only use your account as a payment agent to perform clients’ deposits and withdrawal requests. For trading purposes, you will need to open a separate account._t_',
                },
            ],
        },
    ],
}

export default payment_agent
