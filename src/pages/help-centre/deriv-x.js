import React from 'react'
import styled from 'styled-components'
import { Article } from './_article'
import { ArticleWrapper, StyledHeader, StyledText } from './_help-centre-style'
import { derivx_app_url, deriv_app_url } from 'common/constants'
import { Text, LocalizedLinkText } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'

const ExternalLink = styled.a`
    text-decoration: none;
    color: var(--color-red);

    :hover {
        text-decoration: underline;
    }

`

const WhatisDerivX = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What is Deriv X?')}</StyledHeader>
        <Text>
            {localize(
                'Deriv X is an-easy-to-use trading platform where you can trade CFDs on various assets on a platform layout that you can customise according to your preference.',
            )}
        </Text>
    </ArticleWrapper>
)

const DepositDerivX = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {
                <Localize
                    translate_text="What is  the minimum / maximum I can deposit into my <0/>Deriv X account?<0/>"
                    components={[<br key={0} />]}
                />
            }
        </StyledHeader>
        <Text>
            {localize(
                'There is no minimum deposit. You can make a maximum deposit of USD2,500 twelve times a day.',
            )}
        </Text>
    </ArticleWrapper>
)

const DerivXMarkets = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What markets can I trade on Deriv X?')}</StyledHeader>
        <Text>
            {localize(
                'You can trade CFDs on forex, cryptocurrencies, commodities, and our proprietary synthetic indices on Deriv X.',
            )}
        </Text>
    </ArticleWrapper>
)

const DerivXTrade = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('What is the minimum and maximum amount to trade on Deriv X?')}
        </StyledHeader>
        <Text>
            {localize(
                'This depends on the trade type. To find out, right click on the specific asset and select “Instrument info”.',
            )}
        </Text>
    </ArticleWrapper>
)

const DifferenceDMT5DTraderDerivX = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize(
                'What are the major differences between DTrader, Deriv MT5 (DMT5) and Deriv X?',
            )}
        </StyledHeader>
        <Text>
            {localize(
                'DTrader allows you to trade more than 50 assets in the form of digital options, multipliers, and lookbacks.',
            )}
        </Text>
        <StyledText>
            {localize(
                'Deriv MT5 (DMT5) and Deriv X are both multi-asset trading platforms where you can trade spot forex and CFDs with leverage on multiple asset classes. The major difference between them is platform layout — MT5 has a simple all-in-one view, while on Deriv X you can customise the layout according to your preference.',
            )}
        </StyledText>
    </ArticleWrapper>
)

const DerivXAccount = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('How do I create a Deriv X account?')}</StyledHeader>
        <Text>
            <Localize
                translate_text="On the <0>Deriv X dashboard</0>, select the account type you want to open (Demo) and click “Add account”. Follow the instructions on the screen to create a new Deriv X account."
                components={[
                    <ExternalLink
                        href={derivx_app_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const DifferentAccounts = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('What are the differences between Synthetics and Financial accounts?')}
        </StyledHeader>
        <Text>
            {localize(
                'The Synthetics account allows you to trade on Deriv’s proprietary synthetic indices that are available 24/7 and simulate real-world market movements.',
            )}
        </Text>
        <StyledText>
            {localize(
                'The Financial account is where you trade contracts for difference (CFDs) on financial markets such as forex, cryptocurrencies, and commodities.',
            )}
        </StyledText>
    </ArticleWrapper>
)

const TradingPassword = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What is a trading password?')}</StyledHeader>
        <Text>
            {localize(
                'It is a password that gives you access to the standalone trading platforms Deriv MT5 (DMT5) and Deriv X.',
            )}
        </Text>
    </ArticleWrapper>
)

const DifferentPassword = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('Why is my trading password different from my Deriv password?')}
        </StyledHeader>
        <Text>
            {localize(
                'Your trading password is linked to the standalone trading platforms Deriv MT5 (DMT5) and Deriv X, while your Deriv password gives you access to platforms hosted on our website such as DTrader and DBot.',
            )}
        </Text>
    </ArticleWrapper>
)

const ResetDerivXPassowrd = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('How do I reset my Deriv X Password?')}</StyledHeader>
        <Text>
            <Localize
                translate_text="Go to your <0>Account settings</0>. Under “Security and safety”, select “Passwords”. You can reset your Deriv X password under “Trading password”."
                components={[
                    <ExternalLink
                        href={`${deriv_app_url}/account/personal-details`}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}deriv_x_app_url
            />
        </Text>
        <StyledText>
            {localize(
                'Note: Remember that your trading password is also linked to your Deriv MT5 (DMT5) account.',
            )}
        </StyledText>
    </ArticleWrapper>
)

const AccountInformation = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('Where can I find my Deriv X account information?')}
        </StyledHeader>
        <Text>
            <Localize
                translate_text="You can view your account information (account type and login numbers) on the <0>Deriv X dashboard</0>. "
                components={[
                    <ExternalLink
                        href={derivx_app_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const DerivXRealMoneyAccount = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('How can I deposit funds into my Deriv X real money account?')}
        </StyledHeader>
        <Text>
            <Localize
                translate_text="To deposit funds into your Deriv X account on Deriv, you’ll need to use the funds in your Deriv account. Go to Cashier > <0>Transfer between accounts</0> and follow the instructions on the screen."
                components={[
                    <ExternalLink
                        href={`${deriv_app_url}/cashier/account-transfer`}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
        <StyledText>
            {localize(
                'Transfers are instant. Once you’ve completed all the steps, your Deriv X account balance will be updated immediately.',
            )}
        </StyledText>
    </ArticleWrapper>
)

const WithdrawDerivX = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('How do I withdraw funds from my Deriv X real money account?')}
        </StyledHeader>
        <Text>
            {localize(
                'To withdraw funds from your Deriv X account on Deriv, you’ll first need to transfer the funds to your Deriv account. Go to Cashier > Transfer between accounts and follow the instructions on the screen.',
            )}
        </Text>
        <StyledText>
            {localize(
                'To withdraw from your Deriv account into your personal account, go to Cashier -> Withdrawal and follow the instructions on the screen. You’ll need to verify your identity and confirm your withdrawal amount.',
            )}
        </StyledText>
        <Text mt="1.7rem">
            <Localize
                translate_text="After the required processing time of your selected payment method, your funds will be deposited into your personal account. You can check processing times on our <0>Payment methods</0> page."
                components={[
                    <LocalizedLinkText
                        to="/payment-methods"
                        color="red"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const DerivXArticle = () => {
    return (
        <div>
            <Article
                header="Deriv X"
                title={localize('Help Center | Frequently asked questions | Deriv X | Deriv')}
                description={localize('Frequently asked questions - Deriv X')}
            >
                <WhatisDerivX text={localize('What is Deriv X?')} label="what-is-deriv-x" />
                <DepositDerivX
                    text={localize(
                        'What is the minimum / maximum I can deposit into my Deriv X account?',
                    )}
                    label="minimum-or-maximum-deposit"
                />
                <DerivXMarkets
                    text={localize('What markets can I trade on Deriv X?')}
                    label="markets-on-deriv-x"
                />
                <DerivXTrade
                    text={localize('What is the minimum and maximum amount to trade on Deriv X?')}
                    label="minimum-and-maximum-amount-to-trade"
                />
                <DifferenceDMT5DTraderDerivX
                    text={localize(
                        'What are the major differences between DTrader, Deriv MT5 (DMT5) and Deriv X?',
                    )}
                    label="differences-of-dtrader-dmt5-deriv-x"
                />
                <DerivXAccount
                    text={localize('How do I create a Deriv X account?')}
                    label="create-account"
                />
                <DifferentAccounts
                    text={localize(
                        'What are the differences between Synthetics and Financial accounts?',
                    )}
                    label="differences-of-synthetic-and-financial"
                />
                <TradingPassword
                    text={localize('What is a trading password?')}
                    label="trading-password"
                />
                <DifferentPassword
                    text={localize('Why is my trading password different from my Deriv password?')}
                    label="differences-of-trading-and-deriv-password"
                />
                <ResetDerivXPassowrd
                    text={localize('How do I reset my Deriv X password?')}
                    label="reset-deriv-x-password"
                />
                <AccountInformation
                    text={localize('Where can I find my Deriv X account information?')}
                    label="deriv-x-account-information"
                />
                <DerivXRealMoneyAccount
                    text={localize('How can I deposit funds into my Deriv X real money account?')}
                    label="deposit-funds"
                />
                <WithdrawDerivX
                    text={localize('How do I withdraw funds from my Deriv X real money account?')}
                    label="withdraw-funds-from-deriv-x"
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DerivXArticle)
