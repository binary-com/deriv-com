import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader, StyledText } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { deriv_app_url } from 'common/constants'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'
import { DerivStore } from 'store'

const StyledList = styled.ul<{ listStyle: string; paddingLeft: string }>`
    list-style: ${(props) => props.listStyle};
    padding-left: ${(props) => props.paddingLeft};
`

const StyledListItem = styled.li<{ marginTop: string }>`
    color: var(--color-black-3);
    margin-top: ${(props) => props.marginTop};
`

const WhatIsDMT5 = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="_t_Deriv MT5 is a CFD trading platform that gives you access to forex, stocks, stock indices, commodities, cryptocurrencies, and synthetics. Learn more about Deriv MT5 <0>here</0>._t_"
                components={[
                    <ExternalLink
                        to={'/dmt5/'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const DifferenceDMT5DTrader = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="_t_<0>DTrader</0>, <1>SmartTrader</1>, <2>DBot</2>, and <3>Binary Bot</3> offer digital options trading on a range of underlying assets such as forex, stock indices, commodities, and synthetics. These platforms allow you to set the contract duration before opening positions, and you'll know exactly how much you'll earn if you win. You may find these platforms more intuitive if you're new to the trading world._t_"
                components={[
                    <ExternalLink
                        to={'/dtrader/'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <ExternalLink
                        to={'https://smarttrader.deriv.com/en/trading.html'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                    <ExternalLink
                        to={'/dbot/'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={2}
                    />,
                    <ExternalLink
                        to={'https://bot.deriv.com/'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={3}
                    />,
                ]}
            />
        </Text>
        <StyledText>
            <Localize
                translate_text="_t_<0>Deriv X</0> and <1>Deriv MT5</1> offer CFD trading on a similar range of assets, where you're able to open positions with leverage and your potential profit is only known when you close your positions. It's riskier than digital options trading because while you may potentially gain a lot if you win, you may also lose a lot if you don't. Deriv X and Deriv MT5 are popular among our traders who enjoy the risks as part of the excitement of CFD trading._t_"
                components={[
                    <ExternalLink
                        to={'/derivx/'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <ExternalLink
                        to={'/dmt5/'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const DifferentAccounts = ({ text }: ArticleProps) => {
    return (
        <ArticleWrapper>
            <StyledHeader as="h4">{text}</StyledHeader>
            <>
                <Text>
                    {localize(
                        '_t_The Deriv MT5 Synthetic account offers contracts for difference (CFDs) on synthetic indices. Our proprietary synthetic indices mimic the price movement of real financial markets but are not affected by market events. Trading on synthetic indices is available 24/7, even on weekends and holidays. There are more than 15 indices to choose from, with different levels of volatility and market behaviour._t_',
                    )}
                </Text>
                <StyledText>
                    {localize(
                        '_t_The Deriv MT5 Financial account offers CFDs on forex, commodities, cryptocurrencies, stocks, and stock indices, with high leverage and variable spreads for maximum flexibility. This account offers more than 100 assets, and 24/7 trading is available on cryptocurrencies._t_',
                    )}
                </StyledText>
                <StyledText>
                    {localize(
                        '_t_The Deriv MT5 Financial STP account offers CFDs on forex and cryptocurrencies, with lower leverage than the Financial account. This is a 100% A-book account, so your trades pass straight through to the market, giving you direct access to liquidity providers. This account also offers 24/7 trading on cryptocurrencies._t_',
                    )}
                </StyledText>
            </>
        </ArticleWrapper>
    )
}

const WhatIsCFDsAccount = ({ text }: ArticleProps) => {
    return (
        <ArticleWrapper>
            <StyledHeader as="h4">{text}</StyledHeader>
            {
                <Text>
                    {localize(
                        '_t_The DMT5 Financial account offers you leverage to trade contracts for difference (CFDs) on forex, stocks, stock indices, commodities, synthetic indices, and cryptocurrencies._t_',
                    )}
                </Text>
            }
        </ArticleWrapper>
    )
}

const DepositDMT5 = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="_t_You'll need to transfer funds from your Deriv account to your Deriv MT5 account. You can do this on the <0>Cashier page</0>. Transfers are instant; your funds will be available in your Deriv MT5 account as soon as you complete the transfer._t_"
                components={[
                    <ExternalLink
                        to={`${deriv_app_url}/cashier/account-transfer`}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const WithdrawDMT5 = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">
            <Localize
                translate_text="_t_You'll need to transfer the funds from your Deriv MT5 account to your Deriv account. You can do this on the <0>Cashier page</0>. Your funds will be available in your Deriv account as soon as you complete the transfer._t_"
                components={[
                    <ExternalLink
                        to={`${deriv_app_url}/cashier/account-transfer`}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const LoginCredentials = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                '_t_This difference is because MT5 is a third-party platform that requires its own login credentials. Your Deriv MT5 login gives you access to the MT5 platform, while your Deriv login gives you access to our digital options platforms such as DTrader and DBot._t_',
            )}
        </Text>
    </ArticleWrapper>
)

const ResetDMT5Password = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>{localize('_t_Follow these steps to reset your Deriv MT5 password:_t_')}</Text>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="1.6rem">
                <Text>
                    <Localize
                        translate_text="_t_Go to your <0>Deriv MT5 dashboard</0>._t_"
                        components={[
                            <ExternalLink
                                to={'https://app.deriv.com/mt5'}
                                external="true"
                                target="_blank"
                                rel="noopener noreferrer"
                                key={0}
                            />,
                        ]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="_t_Click <0>Change</0> next to the password field, then click <0>Change Deriv MT5 password</0>._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="_t_Click <0>Confirm</0>._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="_t_We'll send you an email. Click the <0>Change password</0> button in that email._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="_t_You'll be taken to the Change password screen. Enter a new password and click <0>Create</0>._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            {localize('_t_You can now log in to Deriv MT5 with your new password._t_')}
        </StyledText>
    </ArticleWrapper>
)

const LogInToMyDerivMT5Account = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">
            <Localize
                translate_text="_t_You can log in to your Deriv MT5 account via the MT5 desktop app, web terminal, or mobile app. You'll need the login ID and server name from <0>your Deriv MT5 dashboard</0>. Please remember to use your Deriv MT5 password to log in to Deriv MT5._t_"
                components={[
                    <ExternalLink
                        to={'https://app.deriv.com/mt5'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const InvestorPasswordForMyDerivMT5Account = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">
            <Localize
                translate_text="_t_You can set the investor password on your <0>Deriv MT5 dashboard</0>. Click <1>Password</1> on your Deriv MT5 account, and select <1>Investor password</1> to set a new password._t_"
                components={[
                    <ExternalLink
                        to={'https://app.deriv.com/mt5'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <strong key={1} />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const NameOfMyDerivMT5Server = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">
            <Localize
                translate_text="_t_You can find your Deriv MT5 server name on your <0>Deriv MT5 dashboard</0>. Look for <1>server</1> in between the broker name and login ID._t_"
                components={[
                    <ExternalLink
                        to={'https://app.deriv.com/mt5'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <strong key={1} />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const MinimumAmountToOpenaPositionOnDerivMT5 = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">
            <Localize
                translate_text="_t_The minimum amount you’ll need to open a position on Deriv MT5 depends on the margin required for each asset. You can calculate the margin required using our <0>margin calculator</0>._t_"
                components={[
                    <ExternalLink
                        to={'/trader-tools/margin-calculator'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <strong key={1} />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const DerivMT5PositionsAlwaysStartWithaLoss = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">
            {localize(
                '_t_This is due to the spread, which is the difference between the ‘bid’ and ‘ask’ prices. Your positions will start earning a profit when the market moves in your favour._t_',
            )}
        </Text>
    </ArticleWrapper>
)

const SwapFreeDerivMT5Accounts = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">{localize("_t_No, we don't._t_")}</Text>
    </ArticleWrapper>
)

const ReactivateMyDerivMT5Account = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">
            <Localize
                translate_text="_t_You can't reactivate your Deriv MT5 account. Instead, you can create a new one on your Deriv <0>MT5 dashboard</0>._t_"
                components={[
                    <ExternalLink
                        to={'https://app.deriv.com/mt5'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <strong key={1} />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const LeverageonmyDerivMT5Account = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">
            <Localize
                translate_text="_t_No, you can't. There's a fixed default amount for each asset. The leverage applied to your account can be found on your <0>Deriv MT5 dashboard</0>._t_"
                components={[
                    <ExternalLink
                        to={'https://app.deriv.com/mt5'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <strong key={1} />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const WhatTimeisShownintheMT5Terminal = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">{localize('_t_Greenwich Mean Time (GMT)._t_')}</Text>
    </ArticleWrapper>
)

const DownloadmyDerivMT5History = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                '_t_If you need a statement of your trades on Deriv MT5, follow these steps to download a 3-month statement:_t_',
            )}
        </Text>
        <StyledList listStyle="decimal" paddingLeft="5rem">
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('_t_Log in to your MT5 account via the desktop app._t_')}</Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="_t_Go to the <0>History</0> section._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>
                    <Localize
                        translate_text="_t_Right-click on <0>Time</0>, click <0>Report</0>, and select <0>Open XML</0>._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
            </StyledListItem>
            <StyledListItem marginTop="0.3rem">
                <Text>{localize('_t_Your Deriv MT5 history will be downloaded as an XML file._t_')}</Text>
            </StyledListItem>
        </StyledList>
        <StyledText>
            <Localize
                translate_text="_t_If you need a statement for a more extended period, contact us via <0>live chat</0>, and we'll help you with it._t_"
                components={[
                    <ExternalLink
                        to={'/contact_us/?is_livechat_open=true'}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const DeletemyDerivMT5AccountHistory = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">{localize("_t_No, you can't._t_")}</Text>
    </ArticleWrapper>
)

const LongCanIUsemyDerivMT5DemoAccount = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">
            {localize(
                "_t_You can use your Deriv MT5 demo account for as long as you want. However, if your account is inactive for 30 days, we'll deactivate it automatically._t_",
            )}
        </Text>
    </ArticleWrapper>
)

const WillmyinactiveDerivMT5AccountbeDeactivated = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">
            {localize(
                '_t_Yes, we’ll transfer your balance to your Deriv account before your Deriv MT5 account is deactivated._t_',
            )}
        </Text>
    </ArticleWrapper>
)

const CanIChangetheCurrencyofmyDerivMT5Account = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">{localize('_t_No, this isn’t possible on MT5._t_')}</Text>
    </ArticleWrapper>
)

const CanIChangetheServerformyDerivMT5Account = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">
            {localize(
                "_t_No, you can't, but you may have multiple Deriv MT5 Synthetic accounts on different servers._t_",
            )}
        </Text>
    </ArticleWrapper>
)

const MicroForexPairsonDerivMT5 = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">
            {localize('_t_Yes, you can trade micro forex pairs with a Deriv MT5 Financial account._t_')}
        </Text>
    </ArticleWrapper>
)

const MinimumVolumeforMicroForexPairs = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text mb="1.5rem">{localize('_t_The minimum volume for micro forex pairs is 0.1 lot._t_')}</Text>
    </ArticleWrapper>
)

const DMT5Article = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <div>
            <Article
                header="DMT5"
                title={localize('_t_Help centre | Frequently asked questions | DMT5 | Deriv_t_')}
                description={localize('_t_Frequently asked questions - DMT5_t_')}
            >
                <WhatIsDMT5
                    text={localize('_t_What is Deriv MetaTrader 5 (Deriv MT5)?_t_')}
                    label="what-is-dmt5"
                    is_mounted={is_mounted}
                />
                <DifferenceDMT5DTrader
                    text={localize(
                        '_t_What are the main differences between your digital options and CFD platforms?_t_',
                    )}
                    label="differences-of-dtrader-and-dmt5"
                    is_mounted={is_mounted}
                />
                {is_eu_country ? (
                    <WhatIsCFDsAccount
                        text={localize('_t_What is the CFDs account?_t_')}
                        label="what-is-cfds-account"
                        is_mounted={is_mounted}
                    />
                ) : (
                    <DifferentAccounts
                        text={localize(
                            '_t_What are the differences between the Deriv MT5 Synthetic, Financial, and Financial STP accounts?_t_',
                        )}
                        label="differences-of-dmt5-accounts"
                        is_mounted={is_mounted}
                    />
                )}

                <WithdrawDMT5
                    text={localize(
                        '_t_How can I withdraw funds from my Deriv MT5 real money account?_t_',
                    )}
                    label="withdraw-funds-from-DMT5"
                    is_mounted={is_mounted}
                />
                <LoginCredentials
                    text={localize(
                        '_t_Why are my Deriv MT5 login details different from my Deriv login details?_t_',
                    )}
                    label="login-credentials"
                    is_mounted={is_mounted}
                />
                <ResetDMT5Password
                    text={localize('_t_How can I change my Deriv MT5 password?_t_')}
                    label="reset-dmt5-password"
                    is_mounted={is_mounted}
                />
                <DepositDMT5
                    text={localize('_t_How can I deposit funds into my Deriv MT5 real money account?_t_')}
                    label="deposit-to-dmt5"
                    is_mounted={is_mounted}
                />
                <LogInToMyDerivMT5Account
                    text={localize('_t_How do I log in to my Deriv MT5 account?_t_')}
                    label="log-in-to-my-Deriv-MT5-account"
                    is_mounted={is_mounted}
                />
                <InvestorPasswordForMyDerivMT5Account
                    text={localize('_t_How do I set an investor password for my Deriv MT5 account?_t_')}
                    label="investor-password-for-my-Deriv-MT5-account"
                    is_mounted={is_mounted}
                />
                <NameOfMyDerivMT5Server
                    text={localize('_t_What is the name of my Deriv MT5 server?_t_')}
                    label="name-of-my-Deriv-MT5-server"
                    is_mounted={is_mounted}
                />
                <MinimumAmountToOpenaPositionOnDerivMT5
                    text={localize('_t_What is the minimum amount to open a position on Deriv MT5?_t_')}
                    label="minimum-amount-to-open-a-position-on-Deriv-MT5"
                    is_mounted={is_mounted}
                />
                <DerivMT5PositionsAlwaysStartWithaLoss
                    text={localize('_t_Why do my Deriv MT5 positions always start with a loss?_t_')}
                    label="Deriv-MT5-positions-always-start-with-a-loss"
                    is_mounted={is_mounted}
                />
                <SwapFreeDerivMT5Accounts
                    text={localize('_t_Do you offer swap-free Deriv MT5 accounts?_t_')}
                    label="swap-free-Deriv-MT5-accounts"
                    is_mounted={is_mounted}
                />
                <ReactivateMyDerivMT5Account
                    text={localize('_t_How can I reactivate my Deriv MT5 account?_t_')}
                    label="reactivate-my-Deriv-MT5-account"
                    is_mounted={is_mounted}
                />
                <LeverageonmyDerivMT5Account
                    text={localize('_t_Can I change the leverage on my Deriv MT5 account?_t_')}
                    label="leverage-on-my-Deriv-MT5-account"
                    is_mounted={is_mounted}
                />
                <WhatTimeisShownintheMT5Terminal
                    text={localize('_t_What time is shown in the MT5 terminal?_t_')}
                    label="What-time-is-shown-in-the-MT5-terminal"
                    is_mounted={is_mounted}
                />
                <DownloadmyDerivMT5History
                    text={localize('_t_How can I download my Deriv MT5 history?_t_')}
                    label="download-my-Deriv-MT5-history"
                    is_mounted={is_mounted}
                />
                <DeletemyDerivMT5AccountHistory
                    text={localize('_t_Can I delete my Deriv MT5 account history?_t_')}
                    label="delete-my-Deriv-MT5-account-history"
                    is_mounted={is_mounted}
                />
                <LongCanIUsemyDerivMT5DemoAccount
                    text={localize('_t_For how long can I use my Deriv MT5 demo account?_t_')}
                    label="For-how-long-can-I-use-my-Deriv-MT5-demo-account"
                    is_mounted={is_mounted}
                />
                <WillmyinactiveDerivMT5AccountbeDeactivated
                    text={localize(
                        '_t_Will my inactive Deriv MT5 account be deactivated even though I still have a balance?_t_',
                    )}
                    label="Will-my-inactive-Deriv-MT5-account-be-deactivated"
                    is_mounted={is_mounted}
                />
                <CanIChangetheCurrencyofmyDerivMT5Account
                    text={localize('_t_Can I change the currency of my Deriv MT5 account?_t_')}
                    label="Can-I-change-the-currency-of-my-Deriv-MT5-account"
                    is_mounted={is_mounted}
                />
                <CanIChangetheServerformyDerivMT5Account
                    text={localize('_t_Can I change the server for my Deriv MT5 account?_t_')}
                    label="Can-I-change-the-server-for-my-Deriv-MT5-account"
                    is_mounted={is_mounted}
                />
                <MicroForexPairsonDerivMT5
                    text={localize('_t_Do you offer micro forex pairs on Deriv MT5?_t_')}
                    label="offer-micro-forex-pairs-on-Deriv-MT5"
                    is_mounted={is_mounted}
                />
                <MinimumVolumeforMicroForexPairs
                    text={localize('_t_What is the minimum volume for micro forex pairs?_t_')}
                    label="What-is-the-minimum-volume-for-micro-forex-pairs"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DMT5Article)
