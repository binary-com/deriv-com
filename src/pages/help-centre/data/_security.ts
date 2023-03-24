import { TQuestionsData } from './_data-types'

const security: TQuestionsData = {
    section: 'General',
    category: '_t_Security_t_',
    questions: [
        {
            question: '_t_Do I need to verify my Deriv account?_t_',
            category: 'Security',
            sub_category: '_t_Verification_t_',
            label: 'verify-account',
            answer: [
                {
                    translation_text:
                        '_t_No, you do not need to verify your Deriv account unless prompted. If your account requires verification, we will contact you via email to initiate the process and provide you with clear instructions on how to submit your documents._t_',
                },
            ],
        },
        {
            question: '_t_How long does verification take?_t_',
            category: 'Security',
            sub_category: '_t_Verification_t_',
            label: 'verification-duration',
            answer: [
                {
                    translation_text:
                        '_t_We’ll typically take 1-3 business days to review your documents and will inform you of the result via email once it’s done._t_',
                },
            ],
        },
        {
            question: '_t_Why were my documents declined?_t_',
            category: 'Security',
            sub_category: '_t_Verification_t_',
            label: 'documents-declined',
            answer: [
                {
                    translation_text:
                        '_t_We may decline your verification documents if they are insufficiently clear, invalid, expired, or have cropped edges._t_',
                },
            ],
        },
        {
            question: '_t_I lost my phone. How can I disable two-factor authentication (2FA)?_t_',
            category: 'Security',
            sub_category: '_t_Verification_t_',
            label: 'disable-two-factor-authentication',
            answer: [
                {
                    translation_text:
                        "_t_Please <0>contact us via live chat</0> immediately, and we'll help to disable 2FA on your account. When you have a new phone, please <1>re-enable 2FA</1>._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: '/contact_us/?is_livechat_open=true' },
                        {
                            key: 1,
                            type: 'link',
                            to: 'https://app.deriv.com/account/two-factor-authentication',
                        },
                    ],
                },
            ],
        },
    ],
}

export default security
