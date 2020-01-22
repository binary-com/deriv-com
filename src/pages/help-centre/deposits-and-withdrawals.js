import React from 'react'
import styled, { css } from 'styled-components'
import { getLanguage } from '../../common/utility'
import { Article } from './_article'
import { Text } from 'components/elements/typography'
import { Localize, localize, WithIntl } from 'components/localization'

const ArticleWrapper = styled.div`
    max-width: 79.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    font-size: var(--text-size-s);
    line-height: 1.5;
    padding-left: 2.4rem;
`
export const StyledLink = css`
    text-decoration: none;
    font-size: var(--text-size-s);
    font-weight: bold;
    color: var(--color-red);
    display: contents;

    :hover {
        text-decoration: underline;
    }
`
const ExternalLink = styled.a`
    ${StyledLink}
`
const Box = styled.div`
    margin: 2.4rem 0;
    padding: 2rem;
    background-color: var(--color-grey-18);
`
const url = getLanguage() === 'en' || getLanguage() == null ? '//' : `/${getLanguage()}//`

const MakingADeposit = () => (
    <ArticleWrapper>
        <Localize
            translate_text="Click on the <1>Cashier</1> tab and choose your preferred deposit method.
            <0 /><0 />Our list of supported <1>payment methods</1> includes bank wire, credit/debit cards, e-wallets, and cryptocurrencies.
            <0 /><0 />You may also manage your funds through a payment agent if the service is available in your country.
            <0 /><0 />You can deposit or withdraw as little as USD/EUR/GBP/AUD 5 using some e-wallets. The minimum amounts for all other payment methods are specified on the payment methods page."
            components={[
                <br key={0} />,
                <ExternalLink
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={1}
                ></ExternalLink>,
            ]}
        />
    </ArticleWrapper>
)

const ExpiredVerificationLink = () => (
    <ArticleWrapper>
        <Localize
            translate_text="We process all your deposits and withdrawals within 24 hours. However, your bank or money transfer service may require additional time to process your request."
            components={[<br key={0} />]}
        />
    </ArticleWrapper>
)

const WithdrawalProcessingTime = () => (
    <ArticleWrapper>
        <Text>
            {localize(
                "If you'd like to change your name, date of birth, country of residence, or email address, please submit a ticket and attach your proof of identity and proof of address.",
            )}
        </Text>
    </ArticleWrapper>
)

const HowDoIWithdrawFundsFromMyDerivAccount = () => (
    <ArticleWrapper>
        <Text>
            {localize(
                'To withdraw funds from your Deriv account, please make sure that you’re currently using the correct real account:',
            )}
        </Text>
        <Box>
            <Localize
                translate_text="1. Go to <0>Cashier > Withdraw.</0>
                <1 /><1 />2. Click on <0>Request authentication email</0> to receive a verification email.
                <1 /><1 />3. Check your email for a message with the link to withdraw your funds. Check your spam or junk folder if you don’t see it.
                <1 /><1 />4. Click on <0>Authorise & withdraw funds.</0> If the button does not work, copy and paste the link from the email into your browser.
                <1 /><1 />5. On the <0>Withdrawal</0> page, follow the instructions on the screen.
                <1 /><1 />6. We will review your withdrawal request and inform you via email once your withdrawal has been successfully processed."
                components={[<strong key={0} />, <br key={1} />]}
            />
        </Box>
    </ArticleWrapper>
)

const DepositsAndWithdrawalArticle = () => {
    return (
        <Article header="Deposits and withdrawals">
            <MakingADeposit
                text={localize('Making a deposit')}
                label="making-a-deposit"
            ></MakingADeposit>
            <ExpiredVerificationLink
                text={localize('Expired verification link ')}
                label="expired-verification-link"
            ></ExpiredVerificationLink>
            <WithdrawalProcessingTime
                text={localize('Withdrawal processing time')}
                label="withdrawal-processing-time"
            ></WithdrawalProcessingTime>
            <HowDoIWithdrawFundsFromMyDerivAccount
                text={localize('How do I withdraw funds from my Deriv account?')}
                label="withdraw-funds-from-Deriv-account"
            ></HowDoIWithdrawFundsFromMyDerivAccount>
        </Article>
    )
}

export default WithIntl()(DepositsAndWithdrawalArticle)
