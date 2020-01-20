import React from 'react'
import { Ol, Ul, Li } from './_list'
import { Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { WhoCanOpenAnAccount } from './account'

// const WhoCanOpenAnAccount = () => (
//     <>
//         <Ul>
//             <Li>{localize('You have read the Legal Terms and Conditions in full.')}</Li>
//             <Li>
//                 {localize(
//                     'You understand that you will be buying and selling financial contracts subject to these terms and conditions.',
//                 )}
//             </Li>
//             <Li>
//                 {localize(
//                     'You have read our privacy statement and give us your consent to process your personal information.',
//                 )}
//             </Li>
//             <Li>
//                 {localize(
//                     'You are over 18 years of age, unless you are an Estonian resident whereby you would have to be over 21.',
//                 )}
//             </Li>
//             <Li>
//                 {localize(
//                     'You are not resident in a restricted country such as Canada, Costa Rica, Hong Kong, Israel, Jersey, Malaysia, Malta, Paraguay, United Arab Emirates, USA or any other restricted country which has been identified by the Financial Action Task Force (FATF) as having strategic deficiencies.',
//                 )}
//             </Li>
//             <Li>
//                 {localize(
//                     'You have enough experience and knowledge in financial trading to be able to evaluate the merits and risks of acquiring financial contracts via this site. You have not relied on any information contained in this site to make that evaluation.',
//                 )}
//             </Li>
//         </Ul>
//     </>
// )

const OpeningAnAccount = () => (
    <>
        <Text>{localize('There are three ways to open an account. You can')}</Text>
        <Ol>
            <Li>
                {localize(
                    'Enter your email address on the homepage and click “Create free account”',
                )}
            </Li>
            <Li>{localize('Create an account with your Google login')}</Li>
            <Li>{localize('Create an account with your Facebook login')}</Li>
        </Ol>
        <Text>
            {localize(
                'You will have a practice account to start with. You can upgrade to a real money account after opening a practice account.',
            )}
        </Text>
    </>
)

const ChangingPersonalDetails = () => (
    <Text>
        {localize(
            'If you’d like to change your name, date of birth, country of residence, or email address, please submit a ticket and attach your proof of identity and proof of address.',
        )}
    </Text>
)

const RecoveringYourPassword = () => (
    <>
        <Text>
            {localize(
                'If you can’t remember your password, you can reset it by following these steps:',
            )}
        </Text>
        <Ol>
            <Li>{localize('Go to the login page.')}</Li>
            <Li>
                {localize('Click on the "Reset your password link" near the bottom of the page.')}
            </Li>
            <Li>
                {localize(
                    'Enter your email address. You’ll receive a verification link in your inbox.',
                )}
            </Li>
            <Li>{localize('Click on the verification link to set your new password.')}</Li>
        </Ol>
        <Text>
            {localize(
                'If you have a real money account, you must also check the box labelled "I have a Real Money Account" and verify your date of birth.',
            )}
        </Text>
    </>
)

const AuthenticatingYourAccount = () => (
    <Text>{localize('Authenticate your account on the verification page.')}</Text>
)

const HowDoIChangeOrResetMyDerivPassword = () => (
    <>
        <Text>
            {localize(
                'To change your Deriv password if you’re already logged in and know your password:',
            )}
        </Text>
        <Ol>
            <Li>
                <Localize
                    translate_text="Go to <0>Settings > Security and safety > Deriv password.</0>"
                    components={[<strong key={0} />]}
                />
            </Li>
            <Li>{localize('Enter your current password and new password.')}</Li>
            <Li>
                <Localize
                    translate_text="Click <0>Change password</0> to confirm."
                    components={[<strong key={0} />]}
                />
            </Li>
        </Ol>
        <Text>
            <br />
            <Localize
                translate_text="<0>If you’re logged in and can’t remember your password:</0>"
                components={[<strong key={0} />]}
            />
        </Text>
        <Ol>
            <Li>
                <Localize
                    translate_text="Go to <0>Settings > Security and safety > Deriv password.</0>"
                    components={[<strong key={0} />]}
                />
            </Li>
            <Li>
                <Localize
                    translate_text="Click on <0>Forgot your password?</0>"
                    components={[<strong key={0} />]}
                />
            </Li>
            <Li>
                {localize(
                    'Check your email for a message with the link to reset your password. Check your spam ' +
                        ' or junk folder if you don’t see it.',
                )}
            </Li>
            <Li>
                <Localize
                    translate_text="Click on <0>Reset my password</0> to go to the <0>Choose a new password</0> page. If the button does not work, copy and paste the link from the email into your browser."
                    components={[<strong key={0} />]}
                />
            </Li>
            <Li>{localize('Enter your new password.')}</Li>
            <Li>
                <Localize
                    translate_text="Click <0>Save new password</0> to confirm."
                    components={[<strong key={0} />]}
                />
            </Li>
        </Ol>

        <Text>
            <br />
            <Localize
                translate_text="<0>If you’re not logged in and can’t remember your password:</0>"
                components={[<strong key={0} />]}
            />
        </Text>
        <Ol>
            <Li>
                <Localize
                    translate_text="Go to <0>Deriv.com > Log in.</0>"
                    components={[<strong key={0} />]}
                />
            </Li>
            <Li>
                <Localize
                    translate_text="Click on <0>Forgot password?</0>"
                    components={[<strong key={0} />]}
                />
            </Li>
            <Li>
                {localize(
                    'Check your email for a message with the link to reset your password. Check your spam or junk folder if you don’t see it.',
                )}
            </Li>
            <Li>
                <Localize
                    translate_text="Click on <0>Reset my password</0> to go to the <0>Choose a new password</0> page. If the button does not work, copy and paste the link from the email into your browser."
                    components={[<strong key={0} />]}
                />
            </Li>
            <Li>{localize('Enter your new password.')}</Li>
            <Li>
                <Localize
                    translate_text="Click <0>Save new password</0> to confirm."
                    components={[<strong key={0} />]}
                />
            </Li>
        </Ol>
    </>
)

const MakingADeposit = () => (
    <>
        <Text>
            {localize('Click on the Cashier tab and choose your preferred deposit method.')}
        </Text>
        <Text>
            {localize(
                'Our list of supported payment methods includes bank wire, credit/debit cards, e-wallets, and cryptocurrencies.',
            )}
        </Text>
        <Text>
            {localize(
                'You may also manage your funds through a payment agent if the service is available in your country.',
            )}
        </Text>
        <Text>
            {localize(
                'You can deposit or withdraw as little as USD/EUR/GBP/AUD 5 using some e-wallets. The minimum amounts for all other payment methods are specified on the payment methods page.',
            )}
        </Text>
    </>
)

const ExpiredVerificationLink = () => (
    <>
        <Text>
            {localize(
                'We will occasionally prompt you to verify your account by sending you a verification link. This is to make sure it’s you and that your account hasn’t been compromised.',
            )}
        </Text>
        <Text>
            {localize(
                'If your verification link has expired, try withdrawing or logging in again.',
            )}
        </Text>
    </>
)

const WithdrawalProcessingTime = () => (
    <Text>
        {localize(
            'We process all your deposits and withdrawals within 24 hours. However, your bank or money transfer service may require additional time to process your request.',
        )}
    </Text>
)

const HowDoIWithdrawFundsFromMyDerivAccount = () => (
    <>
        <Text>
            {localize(
                'To withdraw funds from your Deriv account, please make sure that you’re currently using the correct real account:',
            )}
        </Text>
        <Ol>
            <Li>
                <Localize
                    translate_text="Go to <0>Cashier > Withdraw.</0>"
                    components={[<strong key={0} />]}
                />
            </Li>
            <Li>
                <Localize
                    translate_text="Click on <0>Request authentication email</0> to receive a verification email."
                    components={[<strong key={0} />]}
                />
            </Li>
            <Li>
                {localize(
                    'Check your email for a message with the link to withdraw your funds. Check your spam or junk folder if you don’t see it.',
                )}
            </Li>
            <Li>
                <Localize
                    translate_text="Click on <0>Yes, It's me</0>. If the button does not work, copy and paste the verification code from the email into your browser."
                    components={[<strong key={0} />]}
                />
            </Li>
            <Li>
                <Localize
                    translate_text="On the <0>Withdrawal</0> page, follow the instructions on the screen."
                    components={[<strong key={0} />]}
                />
            </Li>

            <Li>
                {localize(
                    'We will review your withdrawal request and inform you via email once your withdrawal has been successfully processed.',
                )}
            </Li>
        </Ol>
    </>
)

const SafeguardChangePassword = () => (
    <>
        <Text>
            {localize(
                'To keep your account safe from an unauthorised party, we always require you to confirm your identity before we allow you to change or reset your password.',
            )}
        </Text>
        <Text>{localize('This is how we do it:')}</Text>
        <Ul>
            <Li>
                {localize(
                    'If you’re logged in, you’ll need to enter your current password. This means that if someone else has access to your account while you’re away from your screen, they will not be able to change your password without your permission.',
                )}
            </Li>
            <Li>
                {localize(
                    'If you’ve forgotten your current password, we’ll send you an email with the link to reset your password. Ideally, you should be the only person with access to your email and this will help us to confirm your identity. The link will expire after one hour. Please request a new link if you’re using the link after this period.',
                )}
            </Li>
        </Ul>
        <Text>
            <Localize
                translate_text="To learn more about security best practices, please go to the <0>Keep safe</0> page."
                components={[<LocalizedLink key={0} target="_blank" to="/keep-safe/" />]}
            />
        </Text>
    </>
)

const SafeguardWithdrawFunds = () => (
    <>
        <Text>
            {localize(
                'To keep your funds safe from an unauthorised party, we always require you to confirm your identity before you can submit a withdrawal request.',
            )}
        </Text>
        <Text>
            <Localize
                translate_text="We do this by sending you an email with a link to <0>withdraw</0> your funds. You can also copy and paste the verification code from the email to the Withdraw page. Ideally, you should be the only person with access to your email and this will help us to confirm your identity. The link will expire after one hour. Please request a new link if you’re using the link after this period."
                components={[<strong key={0} />]}
            />
        </Text>
    </>
)

export const articles = [
    {
        category: <Localize translate_text="Account" />,
        articles: [
            {
                title: <Localize translate_text="Who can open an account?" />,
                sub_category: <Localize translate_text="Opening an account" />,
                label: 'who-can-open-an-account',
            },
            {
                title: <Localize translate_text="Opening an account" />,
                sub_category: <Localize translate_text="Opening an account" />,
                label: 'opening-an-account',
            },
            {
                title: <Localize translate_text="Changing your personal details" />,
                sub_category: <Localize translate_text="Opening an account" />,
                label: 'changing-your-personal-details',
                content: <ChangingPersonalDetails />,
            },
            {
                title: <Localize translate_text="Recovering your password" />,
                category: <Localize translate_text="Account" />,
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'recovering-your-password',
                content: <RecoveringYourPassword />,
            },
            {
                title: <Localize translate_text="Authenticating your account" />,
                category: <Localize translate_text="Account" />,
                sub_category: <Localize translate_text="Opening an account" />,
                label: 'recovering-your-password',
                content: <AuthenticatingYourAccount />,
            },
            {
                title: <Localize translate_text="How do I change or reset my Deriv password?" />,
                category: <Localize translate_text="Account" />,
                sub_category: <Localize translate_text="Managing your account" />,
                label: 'How-do-I-change-or-reset-my-Deriv-password',
                content: <HowDoIChangeOrResetMyDerivPassword />,
            },
        ],
    },
    {
        category: <Localize translate_text="Deposits and withdrawals" />,
        categoryCode: 'deposit',
        articles: [
            {
                title: <Localize translate_text="Making a deposit" />,
                category: <Localize translate_text="Deposits and withdrawals" />,
                sub_category: <Localize translate_text="Deposits" />,
                label: 'making-a-deposit',
                content: <MakingADeposit />,
            },
            {
                title: <Localize translate_text="Expired verification link" />,
                category: <Localize translate_text="Deposits and withdrawals" />,
                sub_category: <Localize translate_text="Deposits" />,
                label: 'expired-verification-link',
                content: <ExpiredVerificationLink />,
            },
            {
                title: <Localize translate_text="Withdrawal processing time" />,
                category: <Localize translate_text="Deposits and withdrawals" />,
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'withdrawal-processing-time',
                content: <WithdrawalProcessingTime />,
            },
            {
                title: <Localize translate_text="How do I withdraw funds from my Deriv account?" />,
                category: <Localize translate_text="Deposits and withdrawals" />,
                sub_category: <Localize translate_text="Withdrawals" />,
                label: 'How-do-I-withdraw-funds-from-my-Deriv-account',
                content: <HowDoIWithdrawFundsFromMyDerivAccount />,
            },
        ],
    },
    {
        category: <Localize translate_text="Privacy and security" />,
        categoryCode: 'privacy',
        articles: [
            {
                title: (
                    <Localize translate_text="Safeguarding your account when you change your password" />
                ),
                category: <Localize translate_text="Privacy and security" />,
                sub_category: <Localize translate_text="Safeguard" />,
                label: 'Safeguarding-account-when-Change-password',
                content: <SafeguardChangePassword />,
            },
            {
                title: (
                    <Localize translate_text="Safeguarding your account when you withdraw funds" />
                ),
                category: <Localize translate_text="Privacy and security" />,
                sub_category: <Localize translate_text="Safeguard" />,
                label: 'Safeguarding-account-when-withdraw-funds',
                content: <SafeguardWithdrawFunds />,
            },
        ],
    },
]
