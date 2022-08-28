import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, StyledHeader, StyledText } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { derivx_app_url, deriv_app_url } from 'common/constants'
import { Text, LocalizedLinkText } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'

const StyledList = styled.ul<{ listStyle: string; paddingLeft: string }>`
    list-style: ${(props) => props.listStyle};
    padding-left: ${(props) => props.paddingLeft};
`

const StyledListItem = styled.li<{ marginTop: string }>`
    color: var(--color-black-3);
    margin-top: ${(props) => props.marginTop};
`

const ExternalLink = styled.a`
    text-decoration: none;
    color: var(--color-red);
    font-weight: bold;

    :hover {
        text-decoration: underline;
    }
`

const WhatisDerivX = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                '_t_Deriv X is an-easy-to-use trading platform where you can trade CFDs on various assets on a platform layout that you can customise according to your preference._t_',
            )}
        </Text>
    </ArticleWrapper>
)

const DepositDerivX = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                '_t_There is no minimum deposit. You can make a maximum deposit of USD2,500 twelve times a day._t_',
            )}
        </Text>
    </ArticleWrapper>
)

const DerivXMarkets = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                '_t_You can trade CFDs on forex, cryptocurrencies, commodities, and our proprietary synthetic indices on Deriv X._t_',
            )}
        </Text>
    </ArticleWrapper>
)

const DerivXTrade = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                '_t_This depends on the trade type. To find out, right click on the specific asset and select “Instrument info”._t_',
            )}
        </Text>
    </ArticleWrapper>
)

const DifferenceDMT5DTraderDerivX = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                '_t_DTrader allows you to trade more than 50 assets in the form of digital options, multipliers, and lookbacks._t_',
            )}
        </Text>
        <StyledText>
            {localize(
                '_t_Deriv MT5 (DMT5) and Deriv X are both multi-asset trading platforms where you can trade spot forex and CFDs with leverage on multiple asset classes. The major difference between them is platform layout — MT5 has a simple all-in-one view, while on Deriv X you can customise the layout according to your preference._t_',
            )}
        </StyledText>
    </ArticleWrapper>
)

const DifferenceMT5DerivX = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="_t_<0>Deriv MT5</0> offers CFD trading on forex, stocks, stock indices, commodities, cryptocurrencies, and synthetics. <1>Deriv X</1> offers CFD trading on the same markets, except stocks and stock indices._t_"
                components={[
                    <ExternalLink
                        href={'/dmt5/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <ExternalLink
                        href={'/derivx/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const AddDerivXAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('_t_Follow these steps to add a Deriv X account:_t_')}</Text>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="_t_<0>Log in</0> to your Deriv account._t_"
                        components={[
                            <ExternalLink
                                href={'https://oauth.deriv.com/oauth2/authorize?app_id=16929'}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={0}
                            />,
                        ]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="_t_Go to the <0>Deriv X dashboard</0>._t_"
                        components={[
                            <ExternalLink
                                href={'https://app.deriv.com/derivx'}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={0}
                            />,
                        ]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="_t_Select <0>Real account</0> or <0>Demo account</0>._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="_t_Choose between <0>Synthetic</0> or <0>Financial</0> accounts. Then, hit <0>Add real account</0> or <0>Add demo account</0>._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    {localize(
                        '_t_If you’re adding your first Deriv X account, you’ll need to set your Deriv X password. If you’ve already set your Deriv X password before, you’ll need to enter it now._t_',
                    )}
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>{localize('_t_Your new Deriv X account is now ready._t_')}</Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const HowLoginDerivX = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "_t_You'll need to add a Deriv X account first. After that, follow these steps to log in:_t_",
            )}
        </Text>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="_t_Go to your <0>Deriv X dashboard</0>._t_"
                        components={[
                            <ExternalLink
                                href={'https://app.deriv.com/derivx'}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={0}
                            />,
                        ]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="_t_Take note of your <0>username</0> and password._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize
                        translate_text="_t_To log in on your desktop, click <0>Trade on web terminal</0>._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="1rem">
                <Text>
                    <Localize translate_text="_t_To log in on your mobile, you'll need the app. If you haven't got the app, you can download it from your dashboard._t_" />
                </Text>
            </StyledListItem>
        </StyledList>
    </ArticleWrapper>
)

const DifferentAccounts = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                '_t_The Synthetics account allows you to trade on Deriv’s proprietary synthetic indices that are available 24/7 and simulate real-world market movements._t_',
            )}
        </Text>
        <StyledText>
            {localize(
                '_t_The Financial account is where you trade contracts for difference (CFDs) on financial markets such as forex, cryptocurrencies, and commodities._t_',
            )}
        </StyledText>
    </ArticleWrapper>
)

const TradingPassword = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize('_t_It is a password that you use to log in to the Deriv X trading platform._t_')}
        </Text>
    </ArticleWrapper>
)

const DifferentPassword = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                '_t_Your Deriv X password is linked to the standalone Deriv X trading platform while your Deriv password gives you access to platforms hosted on our website such as DTrader and DBot._t_',
            )}
        </Text>
    </ArticleWrapper>
)

const ResetDerivXPassowrd = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="_t_Go to your <0>Account settings</0>. Click the “Security and safety” drop-down menu, and select “Passwords”. Under “Deriv X password”, click “Change password” to reset your password._t_"
                components={[
                    <ExternalLink
                        href={`${deriv_app_url}/account/personal-details`}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
                deriv_x_app_url
            />
        </Text>
    </ArticleWrapper>
)

const AccountInformation = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="_t_You can view your account information (account type and login numbers) on the <0>Deriv X dashboard</0>. _t_"
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
// TOOD: uncomment once deriv x real is ready
const DerivXRealMoneyAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="_t_To deposit funds into your Deriv X account on Deriv, you’ll need to use the funds in your Deriv account. Go to Cashier > <0>Transfer between accounts</0> and follow the instructions on the screen._t_"
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
                '_t_Transfers are instant. Once you’ve completed all the steps, your Deriv X account balance will be updated immediately._t_',
            )}
        </StyledText>
    </ArticleWrapper>
)

const WithdrawDerivX = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                '_t_To withdraw funds from your Deriv X account on Deriv, you’ll first need to transfer the funds to your Deriv account. Go to Cashier > Transfer between accounts and follow the instructions on the screen._t_',
            )}
        </Text>
        <StyledText>
            {localize(
                '_t_To withdraw from your Deriv account into your personal account, go to Cashier -> Withdrawal and follow the instructions on the screen. You’ll need to verify your identity and confirm your withdrawal amount._t_',
            )}
        </StyledText>
        <Text mt="1.7rem">
            <Localize
                translate_text="_t_After the required processing time of your selected payment method, your funds will be deposited into your personal account. You can check processing times on our <0>Payment methods</0> page._t_"
                components={[<LocalizedLinkText to="/payment-methods/" color="red" key={0} />]}
            />
        </Text>
    </ArticleWrapper>
)

const DerivXArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

    return (
        <div>
            <Article
                header="Deriv X"
                title={localize('_t_Help Center | Frequently asked questions | Deriv X | Deriv_t_')}
                description={localize('_t_Frequently asked questions - Deriv X_t_')}
                is_mounted={is_mounted}
            >
                <WhatisDerivX
                    text={localize('_t_What is Deriv X?_t_')}
                    label="what-is-deriv-x"
                    is_mounted={is_mounted}
                />
                <DepositDerivX
                    text={localize(
                        '_t_What is the minimum / maximum I can deposit into my Deriv X account?_t_',
                    )}
                    label="minimum-or-maximum-deposit"
                    is_mounted={is_mounted}
                />
                <DerivXMarkets
                    text={localize('_t_What markets can I trade on Deriv X?_t_')}
                    label="markets-on-deriv-x"
                    is_mounted={is_mounted}
                />
                <DerivXTrade
                    text={localize('_t_What is the minimum and maximum amount to trade on Deriv X?_t_')}
                    label="minimum-and-maximum-amount-to-trade"
                    is_mounted={is_mounted}
                />
                <DifferenceDMT5DTraderDerivX
                    text={localize(
                        '_t_What are the major differences between DTrader, Deriv MT5 (DMT5) and Deriv X?_t_',
                    )}
                    label="differences-of-dtrader-dmt5-deriv-x"
                    is_mounted={is_mounted}
                />
                <DifferenceMT5DerivX
                    text={localize("_t_What's the difference between Deriv MT5 and Deriv X?_t_")}
                    label="differences-of-dmt5-deriv-x"
                    is_mounted={is_mounted}
                />
                <AddDerivXAccount
                    text={localize('_t_How do I add a Deriv X account?_t_')}
                    label="add-account"
                    is_mounted={is_mounted}
                />
                <HowLoginDerivX
                    text={localize('_t_How do I log in to Deriv X?_t_')}
                    label="log-in"
                    is_mounted={is_mounted}
                />
                <DifferentAccounts
                    text={localize(
                        '_t_What are the differences between Synthetics and Financial accounts?_t_',
                    )}
                    label="differences-of-synthetic-and-financial"
                    is_mounted={is_mounted}
                />
                <TradingPassword
                    text={localize('_t_What is a Deriv X password?_t_')}
                    label="trading-password"
                    is_mounted={is_mounted}
                />
                <DifferentPassword
                    text={localize('_t_How is my Deriv X password different from my Deriv password?_t_')}
                    label="differences-of-trading-and-deriv-password"
                    is_mounted={is_mounted}
                />
                <ResetDerivXPassowrd
                    text={localize('_t_How do I reset my Deriv X password?_t_')}
                    label="reset-deriv-x-password"
                    is_mounted={is_mounted}
                />
                <AccountInformation
                    text={localize('_t_Where can I find my Deriv X account information?_t_')}
                    label="deriv-x-account-information"
                    is_mounted={is_mounted}
                />
                {/* TOOD: uncomment once deriv x real is ready */}
                <DerivXRealMoneyAccount
                    text={localize('_t_How can I deposit funds into my Deriv X real money account?_t_')}
                    label="deposit-funds"
                    is_mounted={is_mounted}
                />
                <WithdrawDerivX
                    text={localize('_t_How do I withdraw funds from my Deriv X real money account?_t_')}
                    label="withdraw-funds-from-deriv-x"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DerivXArticle)
