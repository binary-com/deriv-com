import React from 'react'
import { Article } from './_article'
import { ArticleWrapper, StyledHeader } from './_help-centre-style'
import { Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

const WhatisDerivX = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What is Deriv X')}</StyledHeader>
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
            {localize('What is  the minimum/maximum I can deposit into my account?')}
        </StyledHeader>
        <Text> {/* TODO: replace text here */} </Text>
    </ArticleWrapper>
)

const DerivXMarkets = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What markets can I trade on Deriv X?')}</StyledHeader>
        <Text>{/* TODO: add text here */} </Text>
    </ArticleWrapper>
)

const DerivXTrade = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('What is the minimum and maximum amount to trade on Deriv X?')}
        </StyledHeader>
        <Text> {/* TODO: add trade text */} </Text>
    </ArticleWrapper>
)

const DifferenceDMT5DTraderDerivX = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('What is the major difference between DTrader, Deriv MT5(DMT5) and Deriv X?')}
        </StyledHeader>
        <Text> {/* TODO: add differences text */} </Text>
    </ArticleWrapper>
)

const DerivXAccount = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('How do I create a deriv x account?')}</StyledHeader>
        <Text> {/* TODO: add deriv x account text */} </Text>
    </ArticleWrapper>
)

const DifferentAccounts = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('What are the differences between Synthetics and Financial accounts?')}
        </StyledHeader>
        <Text> {/* TODO: add account differences text */} </Text>
    </ArticleWrapper>
)

const TradingPassword = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What is trading password?')}</StyledHeader>
        <Text> {/* TODO: add trading password text */} </Text>
    </ArticleWrapper>
)

const DifferentPassword = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('Why is my tarding password different from my Deriv password?')}
        </StyledHeader>
        <Text> {/* TODO: add password differences text */} </Text>
    </ArticleWrapper>
)

const ResetDerivXPassowrd = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('How do I rest my Deriv X Password?')}</StyledHeader>
        <Text> {/* TODO: add password reset text */} </Text>
    </ArticleWrapper>
)

const AccountInformation = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('Where can I find my deriv x account information?')}
        </StyledHeader>
        <Text> {/* TODO: add account information text */} </Text>
    </ArticleWrapper>
)

const DerivXRealMoneyAccount = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('How can I deposit funds into my Deriv X real money account?')}
        </StyledHeader>
        <Text> {/* TODO: add funds deposit text */} </Text>
    </ArticleWrapper>
)

const WithdrawDerivX = () => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('How do I withdraw funds from my Deriv X real money account?')}
        </StyledHeader>
        <Text> {/* TODO: add withdraw funds text */} </Text>
    </ArticleWrapper>
)

const DerivXArticle = () => {
    return (
        <div>
            <Article
                header="Deriv X"
                title={localize('Help Center | Frequently asked questions | Deriv X | Deriv')}
                description={localize('Frequently asked questions - Deriv x')}
            >
                <WhatisDerivX text={localize('What is Deriv X?')} label="what-is-deriv-x" />
                <DepositDerivX
                    text={localize('What is  the minimum/maximum I can deposit into my account?')}
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
                        'What is the major difference between DTrader, Deriv MT5(DMT5) and Deriv X?',
                    )}
                    label="differences-of-dtrader-dmt5-deriv-x"
                />
                <DerivXAccount
                    text={localize('How do I create a deriv x account?')}
                    label="create-account"
                />
                <DifferentAccounts
                    text={localize(
                        'What are the differences between Synthetics and Financial accounts?',
                    )}
                    label="differences-of-deriv-x-account"
                />
                <TradingPassword
                    text={localize('What is trading password')}
                    label="trading-password"
                />
                <DifferentPassword
                    text={localize('Why is my tarding password different from my Deriv password?')}
                    label="differences-of-trading-and-deriv-password"
                />
                <ResetDerivXPassowrd
                    text={localize('How do I reset my Deriv X password?')}
                    label="reset-deriv-x-password"
                />
                <AccountInformation
                    text={localize('Where can I find my deriv X account information?')}
                    label="deriv-x-account-information"
                />
                <DerivXRealMoneyAccount
                    text={localize('How can I deposit funds into my Deriv X real money account?')}
                    label="deposit-funds"
                />
                <WithdrawDerivX
                    text={localize('How do I withdraw funds from my Deriv X real money account?')}
                    label="withdraw-fund-from-deriv-x"
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DerivXArticle)
