import React from 'react'
import { Ol, Ul, Li } from './_list'
import { Text } from 'components/elements/typography'
import { localize } from 'components/localization'

const WhoCanOpenAnAccount = () => (
    <>
        <Text>
            {localize(
                'You may only open an account with us on these conditions:',
            )}
        </Text>
        <Ul>
            <Li>
                {localize(
                    'You have read the Legal Terms and Conditions in full.',
                )}
            </Li>
            <Li>
                {localize(
                    'You understand that you will be buying and selling financial contracts subject to these terms and conditions.',
                )}
            </Li>
            <Li>
                {localize(
                    'You have read our privacy statement and give us your consent to process your personal information.',
                )}
            </Li>
            <Li>
                {localize(
                    'You are over 18 years of age, unless you are an Estonian resident whereby you would have to be over 21.',
                )}
            </Li>
            <Li>
                {localize(
                    'You are not resident in a restricted country such as Canada, Costa Rica, Hong Kong, Israel, Jersey, Malaysia, Malta, Paraguay, United Arab Emirates, USA or any other restricted country which has been identified by the Financial Action Task Force (FATF) as having strategic deficiencies.',
                )}
            </Li>
            <Li>
                {localize(
                    'You have enough experience and knowledge in financial trading to be able to evaluate the merits and risks of acquiring financial contracts via this site. You have not relied on any information contained in this site to make that evaluation.',
                )}
            </Li>
        </Ul>
    </>
)

const OpeningAnAccount = () => (
    <>
        <Text>
            {localize('There are three ways to open an account. You can')}
        </Text>
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
                {localize(
                    'Click on the "Reset your password link" near the bottom of the page.',
                )}
            </Li>
            <Li>
                {localize(
                    'Enter your email address. You’ll receive a verification link in your inbox.',
                )}
            </Li>
            <Li>
                {localize(
                    'Click on the verification link to set your new password.',
                )}
            </Li>
        </Ol>
        <Text>
            {localize(
                'If you have a real money account, you must also check the box labelled "I have a Real Money Account" and verify your date of birth.',
            )}
        </Text>
    </>
)

const AuthenticatingYourAccount = () => (
    <Text>
        {localize('Authenticate your account on the verification page.')}
    </Text>
)

const MakingADeposit = () => (
    <>
        <Text>
            {localize(
                'Click on the Cashier tab and choose your preferred deposit method.',
            )}
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
                'You can deposit or withdraw a minimum of USD/EUR/GBP/AUD 5 using e-wallets. Other payment methods will have different minimum amounts. These amounts are stated on the payment methods page.',
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

export const articles = [
    {
        category: localize('Account'),
        articles: [
            {
                title: localize('Who can open an account?'),
                category: localize('Account'),
                sub_category: localize('Opening an account'),
                label: 'who-can-open-an-account',
                content: <WhoCanOpenAnAccount />,
            },
            {
                title: localize('Opening an account'),
                category: localize('Account'),
                sub_category: localize('Opening an account'),
                label: 'opening-an-account',
                content: <OpeningAnAccount />,
            },
            {
                title: localize('Changing your personal details'),
                category: localize('Account'),
                sub_category: localize('Managing your account'),
                label: 'changing-your-personal-details',
                content: <ChangingPersonalDetails />,
            },
            {
                title: localize('Recovering your password'),
                category: localize('Account'),
                sub_category: localize('Managing your account'),
                label: 'recovering-your-password',
                content: <RecoveringYourPassword />,
            },
            {
                title: localize('Authenticating your account'),
                category: localize('Account'),
                sub_category: localize('Managing your account'),
                label: 'recovering-your-password',
                content: <AuthenticatingYourAccount />,
            },
        ],
    },
    {
        category: localize('Deposits and withdrawals'),
        articles: [
            {
                title: localize('Making a deposit'),
                category: localize('Deposits and withdrawals'),
                sub_category: localize('Deposits'),
                label: 'making-a-deposit',
                content: <MakingADeposit />,
            },
            {
                title: localize('Expired verification link'),
                category: localize('Deposits and withdrawals'),
                sub_category: localize('Deposits'),
                label: 'expired-verification-link',
                content: <ExpiredVerificationLink />,
            },
            {
                title: localize('Withdrawal processing time'),
                category: localize('Deposits and withdrawals'),
                sub_category: localize('Withdrawals'),
                label: 'withdrawal-processing-time',
                content: <WithdrawalProcessingTime />,
            },
        ],
    },
]
