import React from 'react'
import styled from 'styled-components'
import { Article } from './_article'
import { Text, Header } from 'components/elements/typography'
import { localize, Localize, WithIntl } from 'components/localization'

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
const ExternalLink = styled.a`
    text-decoration: none;
    font-size: var(--text-size-s);
    font-weight: bold;
    color: var(--color-red);

    :hover {
        text-decoration: underline;
    }
`
const StyledText = styled(Text)`
    margin-top: 1.7rem;
`
const WhatIsDMT5 = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('What is DMT5?')}
        </Header>
        <Text>
            {localize(
                'DMT5 is the MT5 platform on Deriv. It is a multi-asset online platform designed to give new and experienced traders access to a wide range of financial markets.',
            )}
        </Text>
    </ArticleWrapper>
)
const LoginCredentials = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('Why are my DMT5 login details different from my Deriv login details?')}
        </Header>
        <Text>
            {localize(
                'MT5 on Deriv is a standalone trading platform that isn’t hosted on our website. Your DMT5 login details give you access to the MT5 platform while your Deriv login details give you access to the platforms hosted on our website, such as DTrader and DBot.',
            )}
        </Text>
    </ArticleWrapper>
)
const DifferenceDMT5DTrader = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('What are the major differences between DTrader and DMT5?')}
        </Header>
        <Text>
            {localize(
                'DTrader allows you to trade more than 50 assets in the form of binary, multiplier, and lookback options.',
            )}
        </Text>
        <StyledText>
            {localize(
                'DMT5 is a multi-asset trading platform that you can use to trade spot forex and contracts for difference (CFDs) with leverage.',
            )}
        </StyledText>
    </ArticleWrapper>
)
const DifferentAccounts = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize(
                'What are the differences between the DMT5 Standard, Advanced, and Synthetic Indices accounts?',
            )}
        </Header>
        <Text>
            {localize(
                'The DMT5 Standard account offers new and experienced traders high leverage and variable spreads for maximum flexibility.',
            )}
        </Text>
        <StyledText>
            {localize(
                'The DMT5 Advanced account is a 100% A Book account where your trades are passed straight through to the market, giving you direct access to forex liquidity providers.',
            )}
        </StyledText>
        <StyledText>
            {localize(
                'The DMT5 Synthetic Indices account allows you to trade contracts for difference (CFDs) on synthetic indices that mimic real-world movements. It is available for trading 24/7 and audited for fairness by an independent third party.',
            )}
        </StyledText>
    </ArticleWrapper>
)
const DepositDMT5 = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How can I deposit funds into my DMT5 real money account?')}
        </Header>
        <Text>
            <Localize
                translate_text="To deposit funds into your MT5 account on Deriv, you’ll need to use the funds in your Deriv account. Go to <0>Cashier ></0> <1>Transfer between accounts</1> and follow the instructions on the screen."
                components={[
                    <strong key={0} />,
                    <ExternalLink
                        href="https://deriv.app/cashier/account-transfer"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </Text>
        <StyledText>
            {localize(
                'Transfers are instant. Once you’ve completed all the steps, your DMT5 account balance will be updated immediately.',
            )}
        </StyledText>
    </ArticleWrapper>
)
const ResetDMT5Password = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('How can I reset my DMT5 account password?')}
        </Header>
        <Text>
            <Localize
                translate_text="Please go to the <0>DMT5 dashboard</0> and click on the <1>Password</1> button of that DMT5 account."
                components={[
                    <ExternalLink
                        href="https://deriv.app/mt5"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                    <strong key={0} />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const DMT5Article = () => {
    return (
        <Article header="DMT5">
            <WhatIsDMT5 text={localize('What is DMT5?')} label="what-is-dmt5" />
            <LoginCredentials
                text={localize(
                    'Why are my DMT5 login details different from my Deriv login details?',
                )}
                label="login-credentials"
            />
            <DifferenceDMT5DTrader
                text={localize('What are the major differences between DTrader and DMT5?')}
                label="differences-of-dtrader-and-dmt5"
            />
            <DifferentAccounts
                text={localize(
                    'What are the differences between the DMT5 Standard, Advanced, and Synthetic Indices accounts?',
                )}
                label="differences-of-dmt5-accounts"
            />
            <DepositDMT5
                text={localize('How can I deposit funds into my DMT5 real money account?')}
                label="deposit-to-dmt5"
            />
            <ResetDMT5Password
                text={localize('How can I reset my DMT5 account password?')}
                label="reset-dmt5-password"
            />
        </Article>
    )
}

export default WithIntl()(DMT5Article)
