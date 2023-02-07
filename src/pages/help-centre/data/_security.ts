import { TQuestionsData } from './_data-types'
import { deriv_api_url } from 'common/constants'
import TelegranDerivGroupImg from 'images/common/help-centre/help-center-telegram-one.png'
import TelegranDerivChatImg from 'images/common/help-centre/help-center-telegram-two.png'

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
        {
            question: '_t_How can I identify Deriv customer support impersonators on Telegram?_t_',
            category: 'Security',
            sub_category: '_t_Verification_t_',
            label: 'identify-cs-impersonators-telegram',
            answer: [
                {
                    img: {
                        src: TelegranDerivGroupImg,
                        alt: 'Get Started',
                        width: '36.4rem',
                        margin: '1rem 0 0 -1.8rem',
                    },
                },
                {
                    translation_text: '_t_Examples of groups impersonating Deriv on Telegram_t_',
                    color: 'grey',
                    size: '14px',
                },
                {
                    margin_top: '1.6rem',
                    translation_text:
                        '_t_An impersonator’s main goal is to steal your sensitive information and funds. Here are some ways to identify impersonators of Deriv client support on Telegram:_t_',
                },
                {
                    list: {
                        list_style: 'disc',
                        margin_top: '1.2rem',
                        padding_left: '2.4rem',
                        size: '16px',
                        items: [
                            {
                                translation_text:
                                    '_t_Impersonators ask for your login details or other sensitive information via Telegram._t_',
                            },
                            {
                                translation_text:
                                    '_t_They provide rewards that sound too good to be true._t_',
                            },
                            {
                                translation_text:
                                    '_t_They demand payments via untraceable channels, for example, via cryptocurrency._t_',
                            },
                            {
                                translation_text:
                                    '_t_They ask you to download an app that isn’t offered on Google Play Store or Apple App Store._t_',
                            },
                            {
                                translation_text:
                                    '_t_They ask you to download software that enables your device to be controlled remotely._t_',
                            },
                            {
                                translation_text:
                                    '_t_They ask you to download files containing malware or virus that can infect your device._t_',
                            },
                        ],
                    },
                },
                {
                    margin_top: '1.6rem',
                    translation_text:
                        '_t_Of course, this list isn’t complete. Every day, impersonators come up with new ways to try to steal your information and money._t_',
                },
            ],
        },
        {
            question: '_t_How can I stay safe from impersonators on Telegram?_t_',
            category: 'Security',
            sub_category: '_t_Verification_t_',
            label: 'identify-impersonators-telegram',
            answer: [
                {
                    margin_top: '1.6rem',
                    translation_text:
                        '_t_Here are some ways to identify email from impersonators_t_',
                },
                {
                    list: {
                        list_style: 'disc',
                        margin_top: '1.2rem',
                        padding_left: '2.4rem',
                        size: '16px',
                        items: [
                            {
                                translation_text:
                                    '_t_Do not share your account information and other personal details with anyone via Telegram._t_',
                            },
                            {
                                translation_text:
                                    '_t_If something sounds too good to be true, don’t trust it._t_',
                            },
                            {
                                translation_text: '_t_Never download apps via Telegram._t_',
                            },
                            {
                                translation_text:
                                    '_t_Run all files through an up-to-date antivirus first before downloading._t_',
                            },
                            {
                                translation_text:
                                    '_t_Please ensure to <0>join the correct Deriv group</0> on Telegram._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: 'https://t.me/derivdotcomofficial',
                                    },
                                    {
                                        key: 1,
                                        type: 'link',
                                        to: '/contact_us/?is_livechat',
                                    },
                                ],
                            },
                            {
                                translation_text:
                                    '_t_If you have been contacted by a potential impersonator or if you have any questions, contact us <0>via live chat</0>._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: 'https://deriv.com/contact_us/?is_livechat_open=true',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    img: {
                        src: TelegranDerivChatImg,
                        alt: 'Get Started',
                        width: '26.4rem',
                        margin: '1rem 0 0 -1.8rem',
                    },
                },
                {
                    translation_text: '_t_Examples of messages from impersonators_t_',
                    color: 'grey',
                    size: '14px',
                },
            ],
        },
        {
            question: '_t_How can I identify emails from impersonators of Deriv client support?_t_',
            category: 'Security',
            sub_category: '_t_Verification_t_',
            label: 'identify-impersonators-client-support',
            answer: [
                {
                    margin_top: '1.6rem',
                    translation_text:
                        '_t_Here are some ways to identify email from impersonators:_t_',
                },
                {
                    list: {
                        list_style: 'disc',
                        margin_top: '1.2rem',
                        padding_left: '2.4rem',
                        size: '16px',
                        items: [
                            {
                                translation_text:
                                    '_t_The email is poorly written, with incorrect grammar and many typos._t_',
                            },
                            {
                                translation_text:
                                    '_t_Impersonators ask you to send confidential information over an insecure platform, for example via SMS, WhatsApp, email, etc._t_',
                            },
                            {
                                translation_text:
                                    '_t_They ask you to fill up a form on an insecure website without an HTTPS (secured) connection._t_',
                            },
                            {
                                translation_text:
                                    '_t_They ask you to download insecure mobile apps in the form of APK files that aren’t offered on Google Play Store or Apple App Store._t_',
                            },
                            {
                                translation_text:
                                    '_t_They ask you to download file attachments or remote access software (such as Teamviewer) to give them remote control of your device. For example, an impersonator may take control and install ransomware on your device and then demand a ransom. If the ransom isn’t paid, you may lose access to your device permanently._t_',
                            },
                            {
                                translation_text:
                                    "_t_Impersonators typically use free email addresses such as @yahoo.com, @gmail.com, or @protonmail.com. Always read the sender's full email address to know who sent the email. <0>Note:</0> Emails from Deriv will always come from @deriv.com._t_",
                                translation_components: [{ key: 0, type: 'strong' }],
                            },
                        ],
                    },
                },
            ],
        },
    ],
}

export default security
