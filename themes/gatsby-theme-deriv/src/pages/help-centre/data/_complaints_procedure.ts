import { TQuestionsData } from './_data-types'

const complaints_procedure: TQuestionsData = {
    section: 'General',
    category: '_t_Complaints procedure_t_',
    questions: [
        {
            question: '_t_What is a complaint?_t_',
            category: 'Complaints procedure',
            sub_category: '_t_Complaints_t_',
            label: 'what-is-complaint',
            answer: [
                {
                    translation_text:
                        '_t_A complaint is defined as a spoken or written expression of your dissatisfaction with the products or services that the Company offers. If you believe these have led to, or may lead to, monetary loss, considerable distress, or significant inconvenience, then your voiced dissatisfaction is considered a complaint._t_',
                },
            ],
        },
        {
            question: '_t_How can I submit a complaint?_t_',
            category: 'Complaints procedure',
            sub_category: '_t_Complaints_t_',
            label: 'how-to-submit-compliant',
            answer: [
                {
                    translation_text:
                        '_t_To register a complaint about our Services, follow these easy steps:_t_',
                },

                {
                    margin_top: '1rem',
                    translation_components: [{ key: 0, type: 'strong' }],
                    list: {
                        list_style: 'decimal',
                        margin_top: '1rem',
                        items: [
                            {
                                translation_text:
                                    '_t_Compose an email detailing your complaint and attach any supporting evidence._t_',
                            },
                            {
                                translation_text: '_t_Send the email to <0>complaints@deriv.com</0>._t_',
                                translation_components: [
                                    { key: 0, type: 'strong' },
                                ],
                            },
                            {
                                translation_text:
                                    '_t_We will acknowledge receipt of your complaint via email and aim to provide a final response within fifteen (15) business days._t_',
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_What information should I include when making a complaint?_t_',
            category: 'Complaints procedure',
            sub_category: '_t_Complaints_t_',
            label: 'what-information-to-include',
            answer: [
                {
                    translation_text:
                        '_t_When making a complaint, make sure to include your full name, account number, a clear description of the problem, important dates, and any proof or documents that support your complaint. The more specific and detailed your complaint, the better our team can help you._t_',
                },
            ],
        },
        {
            question: '_t_What happens after I submit a complaint through live chat?_t_',
            category: 'Complaints procedure',
            sub_category: '_t_Complaints_t_',
            label: 'what-happens-after-submiting-compliant',
            answer: [
                {
                    translation_text:
                        "_t_After you send your complaint through live chat, our team will review the information you provided. You'll get a response to your complaint or updates on its status via email._t_",
                },
            ],
        },
        {
            question:
                "_t_What should I do if I'm not happy with the response from your customer support team?_t_",
            category: 'Complaints procedure',
            sub_category: '_t_Complaints_t_',
            label: 'what-to-do-if-not-happy-with-response',
            answer: [
                {
                    translation_text:
                        "_t_If you're not satisfied with the answer you get from our customer support team, you can make a formal complaint by contacting our compliance team at <0>complaints@deriv.com</0>. They will review your complaint independently to see if we treated you fairly within our rights and our contractual obligations to you. For more details, log in to your account and check our <1>complaints policy.</1> It explains the steps you can take for further help._t_",
                    translation_components: [
                        { key: 0, type: 'strong' },
                        { key: 1, type: 'deriv_app_link', to: '/complaints-policy' },
                    ],
                },
            ],
        },
        {
            question: '_t_Can I go to the regulator directly instead of contacting you first?_t_',
            category: 'Complaints procedure',
            sub_category: '_t_Complaints_t_',
            label: 'can-i-go-to-regulator-directly',
            answer: [
                {
                    translation_text:
                        '_t_No. Regulators will not accept your complaint unless you first give us a chance to investigate your complaint and give you a response within the timeframes specified in our <0>complaints policy.</0>_t_',
                    translation_components: [
                        { key: 0, type: 'deriv_app_link', to: '/complaints-policy' },
                    ],
                },
            ],
        },
        {
            question: '_t_What if I am unhappy with the outcome of my complaint?_t_',
            category: 'Complaints procedure',
            sub_category: '_t_Complaints_t_',
            label: 'what-if-unhappy-with-outcome',
            answer: [
                {
                    translation_text:
                        '_t_If you are not satisfied with the outcome, you can escalate your complaint, provided that the <0>complaints policy</0> associated with your account states that escalation is possible._t_',
                    translation_components: [
                        { key: 0, type: 'deriv_app_link', to: '/complaints-policy' },
                    ],
                },
            ],
        },
    ],
}
export default complaints_procedure
