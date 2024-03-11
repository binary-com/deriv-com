import { TQuestionsData } from './_data-types'
import FakeUrl from 'images/common/help-centre/fake-url.png'
import IdentifyPhishing from 'images/common/help-centre/identify-phishing-email.png'
import HelpCentreSocialIcons from 'features/components/templates/help-centre/'

const fraud_prevention: TQuestionsData = {
    section: 'General',
    category: '_t_Fraud prevention_t_',
    questions: [
        {
            question: '_t_What is phishing?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'what-is-phising',
            answer: [
                {
                    translation_text:
                        '_t_Phishing is a cyberattack where scammers try to trick clients into revealing personal information like their passwords or bank details. Scammers pose as real companies and create fake emails, social media profiles, and numbers to get you to take actions that compromise your data and security. Clicking on malicious links or files in phishing emails may download viruses to your device and expose your data._t_',
                },
            ],
        },
        {
            question: '_t_What are some best practices to avoid being phished/scammed?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'how-to-avoid-being-scammed',
            answer: [
                {
                    translation_text: `_t_Remember the 5 Don'ts:_t_`,
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
                                    '_t_Don’t instantly click on links or download files._t_',
                            },
                            {
                                translation_text: '_t_Don’t share your personal information._t_',
                            },
                            {
                                translation_text:
                                    '_t_Don’t act immediately if you’re being pressured to. _t_',
                            },
                            {
                                translation_text:
                                    '_t_Don’t answer suspicious emails, calls, and messages._t_',
                            },
                            {
                                translation_text: `_t_Don't be afraid to contact our Customer Support via <0>live chat</0> if you have doubts or concerns._t_`,
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: 'https://deriv.com/contact-us/?is_livechat_open=true',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_What are the main causes that can compromise my account?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'main-causes-that-compromise-account',
            answer: [
                {
                    translation_text: `_t_Some causes that can compromise your account are if you:_t_`,
                },

                {
                    margin_top: '1rem',
                    translation_components: [{ key: 0, type: 'strong' }],
                    list: {
                        list_style: 'disc',
                        margin_top: '1rem',
                        items: [
                            {
                                translation_text: '_t_Share your personal information._t_',
                            },
                            {
                                translation_text: '_t_Use public wifi._t_',
                            },
                            {
                                translation_text: '_t_Click on unofficial links and files._t_',
                            },
                            {
                                translation_text: '_t_Use a weak password._t_',
                            },
                            {
                                translation_text: '_t_Don’t set up two-factor authentication. _t_',
                            },
                        ],
                    },
                },
                {
                    margin_top: '1rem',
                    translation_text: `_t_Please contact our Customer Support team via <0>live chat</0> if you have doubts or concerns._t_`,
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://deriv.com/contact-us/?is_livechat_open=true',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_How can I recognise phishing websites?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'how-to-recognise-phising-websites',
            answer: [
                {
                    translation_text: `_t_Phishing websites often have URLs that:_t_`,
                },
                {
                    margin_top: '1rem',
                    translation_components: [{ key: 0, type: 'strong' }],
                    list: {
                        list_style: 'disc',
                        margin_top: '1rem',
                        items: [
                            {
                                translation_text: '_t_Are misspelled._t_',
                            },
                            {
                                translation_text:
                                    '_t_Begin with HTTP, which shows it’s not secure (secure URLs start with HTTPS). _t_',
                            },
                            {
                                translation_text:
                                    '_t_Use public domains that do not end in .com, .org, or .net._t_',
                            },
                            {
                                translation_text:
                                    '_t_Lack security indicators, like the padlock symbol._t_',
                                img: {
                                    src: FakeUrl,
                                    alt: '_t_Fake url_t_',
                                    width: '30rem',
                                    margin: '2rem 0 0 -1.8rem',
                                },
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How do I identify a phishing email?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'how-to-identify-phishing-email',
            answer: [
                {
                    translation_text: `_t_Some red flags of a phishing email:_t_`,
                },
                {
                    margin_top: '1rem',
                    translation_components: [{ key: 0, type: 'strong' }],
                    list: {
                        list_style: 'disc',
                        margin_top: '1rem',
                        items: [
                            {
                                translation_text:
                                    '_t_The sender’s email address doesn’t end with @deriv.com._t_',
                            },
                            {
                                translation_text: '_t_Spelling and grammatical errors._t_',
                            },
                            {
                                translation_text:
                                    '_t_They ask you to click suspicious links and attachments._t_',
                            },
                            {
                                translation_text: '_t_Promises of easy money and huge profits._t_',
                            },
                            {
                                translation_text:
                                    '_t_Requests to take immediate action like transferring your money to a bank account._t_',
                                img: {
                                    src: IdentifyPhishing,
                                    alt: '_t_Identify phising email_t_',
                                    width: '60rem',
                                    margin: '2rem 0 0 -1.8rem',
                                },
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_How do I identify a scam social media account?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'how-to-identify-scam-social-media-account',
            answer: [
                {
                    translation_text:
                        '_t_Check the account’s activity: misspelling of the account name, a high following-to-follow ratio, and emoji-loaded offers that sound too good to be true are red flags. We never ask for personal or bank details through social media, or do giveaways or promotions. Verify the account with our official social media accounts listed at the bottom of our <0>website</0>._t_',
                    translation_components: [{ key: 0, type: 'link', to: 'https://deriv.com/' }],
                },
            ],
        },
        {
            question: '_t_What phishing resources does Deriv have?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'what-phishing-resources-does-deriv-have',
            answer: [
                {
                    translation_text:
                        '_t_Please visit our <0>blog</0> and <1>secure and responsible trading page</1> for more tips on protecting yourself online._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://blog.deriv.com/posts/identify-report-phishing-scams/',
                        },
                        { key: 1, type: 'link', to: 'https://deriv.com/responsible/' },
                    ],
                },
            ],
        },
        {
            question:
                '_t_Will Deriv compensate for my loss if my account falls under a scamming/phishing trap?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'will-deriv-compensate',
            answer: [
                {
                    translation_text:
                        '_t_No, your account safety is your sole responsibility. Please visit our <0>blog</0> to learn safety tips on identifying and reporting phishing attempts._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://blog.deriv.com/posts/identify-report-phishing-scams/',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_Do I get rewarded if I report a valid scammer impersonating Deriv?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'do-I-get-rewarded',
            answer: [
                {
                    translation_text:
                        '_t_No, Deriv doesn’t offer rewards for reporting scammers._t_',
                },
            ],
        },
        {
            question:
                '_t_How will Deriv contact me if I need to submit my details or documents?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'how-will-deriv-contact-me',
            answer: [
                {
                    translation_text:
                        '_t_For security reasons, all confidential requests and issues are done via <0>live chat</0> with our Customer Support team._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://deriv.com/contact-us/?is_livechat_open=true',
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_What should I do if I am phished or my credentials are compromised?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'what-to-do-if-phished',
            answer: [
                {
                    translation_text: `_t_If you believe you have been phished or your credentials have been compromised, it's important to take these immediate actions to protect your online accounts and personal data:_t_`,
                },
                {
                    margin_top: '1rem',
                    translation_components: [{ key: 0, type: 'strong' }],
                    list: {
                        list_style: 'disc',
                        margin_top: '1rem',
                        items: [
                            {
                                translation_text:
                                    '_t_<strong>Change your password:</strong> Change the password for your account immediately. Use a strong, unique password, which can be generated with password management tools._t_',
                            },
                            {
                                translation_text:
                                    '_t_<strong>Enable 2FA:</strong> If your account supports two-factor authentication (2FA), enable it. This provides an extra layer of security by requiring a second verification method (e.g., a code sent to your phone) to access your account._t_',
                            },
                            {
                                translation_text: `_t_<strong>Check your accounts:</strong> Review all your other online accounts (email, social media, banking, etc.) to ensure they haven't been compromised as well. If you use the same password for multiple accounts, change those passwords too._t_`,
                            },
                            {
                                translation_text:
                                    '_t_<strong>Scan for viruses:</strong> Run a full system scan on your computer and any devices you used to access your account. Make sure your antivirus and anti-malware software is up to date._t_',
                            },
                            {
                                translation_text:
                                    '_t_<strong>Monitor accounts:</strong> Keep a close eye on your accounts for any suspicious activity. This includes checking for unauthorised transactions, changes to account settings, or new login attempts._t_',
                            },
                            {
                                translation_text:
                                    '_t_<strong>Notify Deriv:</strong> Contact our Customer Support team via <0>live chat</0>. Please have the scammer account’s information and evidence/screenshots ready so we can take appropriate action as soon as possible._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: 'https://deriv.com/contact-us/?is_livechat_open=true',
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
        {
            question:
                '_t_What can I do when I find any unrecognised transactions on my Deriv cashier account?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'what-to-do-if-unrecognised-transactions-are-found',
            answer: [
                {
                    translation_text: `_t_Here are a few steps you can take immediately when you discover unrecognised transactions:_t_`,
                },
                {
                    margin_top: '1rem',
                    translation_components: [{ key: 0, type: 'strong' }],
                    list: {
                        list_style: 'disc',
                        margin_top: '1rem',
                        items: [
                            {
                                translation_text:
                                    '_t_<strong>Notify Deriv:</strong> Contact our Customer Support team via <0>live chat</0>. Please have the scammer account’s information and evidence/screenshots ready so we can take appropriate action as soon as possible. Depending on the severity of the situation, we may temporarily freeze or close your account to prevent further unauthorised transactions._t_',
                                translation_components: [
                                    {
                                        key: 0,
                                        type: 'link',
                                        to: 'https://deriv.com/contact-us/?is_livechat_open=true',
                                    },
                                ],
                            },
                            {
                                translation_text:
                                    '_t_<strong>Change your Deriv password:</strong> Change the password for your account immediately. Use a strong, unique password, which can be generated with password management tools. If you use this same password for other accounts, make sure you change those too._t_',
                            },
                            {
                                translation_text: `_t_<strong>Monitor your accounts:</strong> Keep a close eye on your accounts for any suspicious activity. This includes checking for unauthorised transactions, changes to account settings, or new login attempts._t_`,
                            },
                        ],
                    },
                },
            ],
        },
        {
            question: '_t_What are the official social media accounts of Deriv?_t_',
            category: 'Fraud Prevention',
            sub_category: '_t_Fraud_t_',
            label: 'what-are-official-social-media-accounts',
            renderProp: HelpCentreSocialIcons,
            margin: '2rem 0 0 0',
            flex: true,
            answer: [
                {
                    translation_text: `_t_Our social media profiles are at the bottom of our <0>website</0> and emails. Deriv has only one official account per social media platform:_t_`,
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://deriv.com/',
                        },
                    ],
                },
            ],
        },
    ],
}
export default fraud_prevention
