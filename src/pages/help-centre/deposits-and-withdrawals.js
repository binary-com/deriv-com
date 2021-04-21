import React from 'react'
import { Article } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader, StyledText } from './_help-centre-style'
import { deriv_app_url } from 'common/constants'
import { Text } from 'components/elements'
import { Localize, localize, WithIntl } from 'components/localization'

const PaymentMethods = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What payment methods do you support?')}</StyledHeader>
        <Text>
            <Localize
                translate_text="Our list of <0>supported payment methods</0> includes bank wire, credit and debit cards, e-wallets, and cryptocurrencies."
                components={[
                    <ExternalLink
                        to="/payment-methods/"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
        <StyledText>
            {localize(
                'You may also manage your funds through a payment agent if the service is available in your country.',
            )}
        </StyledText>
    </ArticleWrapper>
)
const WithdrawalProcessingTime = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('How long does it take to process deposits and withdrawals?')}
        </StyledHeader>
        <Text>
            {localize(
                'Your deposits and withdrawals will be processed within one business day (Monday to Friday, 9:00 am–5:00 pm GMT+8) unless stated otherwise. Please note that your bank or money transfer service may require additional time to process your request.',
            )}
        </Text>
    </ArticleWrapper>
)
const MinimumDepositWithdrawal = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('What is the minimum deposit or withdrawal amount?')}
        </StyledHeader>
        <Text>
            {localize(
                'You can deposit or withdraw a minimum of USD/EUR/GBP/AUD 5 using e-wallets. Other payment methods will have different minimum amounts.',
            )}
        </Text>
        <StyledText>
            {localize('There is no minimum amount for cryptocurrency deposits.')}
        </StyledText>
    </ArticleWrapper>
)
const ExpiredVerificationLink = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('My withdrawal verification link expired. What should I do?')}
        </StyledHeader>
        <Text>
            {localize(
                'This problem might be a result of clicking on the ‘Withdraw’ button multiple times. Try to withdraw once again, and then click on the latest verification link sent to your email. Please make sure that you use the link within one hour.',
            )}
        </Text>
    </ArticleWrapper>
)
const LiftWithdrawalLimits = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('How can I lift my withdrawal limits?')}</StyledHeader>
        <Text>
            <Localize
                translate_text="You can lift your withdrawal limits by verifying your identity and address. To see your current withdrawal limits, please go to <0>Settings > Security and safety ></0> <1>Account limits</1>."
                components={[
                    <strong key={0} />,
                    <ExternalLink
                        to={`${deriv_app_url}/account/account-limits`}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)
const CreditCardDepositDeclined = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('Why does my credit card deposit keep getting declined?')}
        </StyledHeader>
        <Text>
            {localize(
                "This usually happens to clients who are depositing with us for the first time using their credit card. Please ask your bank to authorise transactions with 'Deriv'.",
            )}
        </Text>
    </ArticleWrapper>
)
const WithdrawDepositBonus = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('Can I withdraw my deposit bonus?')}</StyledHeader>
        <Text>
            {localize(
                'You may withdraw the free bonus amount once you have exceeded an account turnover of 25 times the bonus amount value.',
            )}
        </Text>
    </ArticleWrapper>
)
const WithdrawMaestroMastercard = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize("Why can't I withdraw funds to my Maestro/Mastercard?")}
        </StyledHeader>
        <Text>
            {localize(
                'Mastercard and Maestro card withdrawals are only available for UK clients. If you are not from the UK, please withdraw using an e-wallet or cryptocurrency instead.',
            )}
        </Text>
    </ArticleWrapper>
)

const DepositsAndWithdrawalArticle = () => {
    return (
        <div>
            <Article
                header={localize('Deposits and withdrawals')}
                title={localize(
                    'Help centre | Frequently asked questions | Deposits and withdrawals | Deriv',
                )}
                description={localize('Frequently asked questions - Deposits and withdrawals')}
            >
                <PaymentMethods
                    text={localize('What payment methods do you support?')}
                    label="payment-methods"
                />
                <WithdrawalProcessingTime
                    text={localize('How long does it take to process deposits and withdrawals?')}
                    label="deposit-withdrawal-processing-time"
                />
                <MinimumDepositWithdrawal
                    text={localize('What is the minimum deposit or withdrawal amount?')}
                    label="minimum-deposit-or-withdrawal"
                />
                <ExpiredVerificationLink
                    text={localize('My withdrawal verification link expired. What should I do?')}
                    label="expired-verification-link"
                />
                <LiftWithdrawalLimits
                    text={localize('How can I lift my withdrawal limits?')}
                    label="lift-withdrawal-limits"
                />
                <CreditCardDepositDeclined
                    text={localize('Why does my credit card deposit keep getting declined?')}
                    label="credit-card-deposit-declined"
                />
                <WithdrawDepositBonus
                    text={localize('Can I withdraw my deposit bonus?')}
                    label="withdraw-deposit-bonus"
                />
                <WithdrawMaestroMastercard
                    text={localize("Why can't I withdraw funds to my Maestro/Mastercard?")}
                    label="withdraw-to-maestro-mastercard"
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DepositsAndWithdrawalArticle)
