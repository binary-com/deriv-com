import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader, StyledText } from './_help-centre-style'
import device from 'themes/device'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { deriv_app_url } from 'common/constants'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'

const StyledLink = styled(ExternalLink)`
    @media ${device.tabletL} {
        font-size: 16px;
    }
`

const Forex = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'Foreign exchange, or forex, is the global market of the world’s currencies, where the values of different currencies are pitted against each other in the form of forex pairs, such as EUR/USD, AUD/JPY, etc. The forex market determines the exchange rates of each currency.',
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="Read <0>this article</0> to learn more about trading forex on Deriv."
                components={[
                    <StyledLink
                        to={'/academy/blog/posts/what-is-forex-live-trading/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const Derived = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'Derived indices consist of asset prices generated from real-world and simulated markets and indices, with little to no influence from real-world events.  You can trade from a variety of derived indices, including synthetic indices, derived FX indices, and basket indices.',
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="Available 24/7, our synthetic indices emulate price movements of real-world markets with varying levels of volatility. As they aren't based on actual underlying assets, they are unaffected by real-world market events. The pricing of our synthetic indices is backed by algorithms that are audited for fairness by an independent third party. Read <0>this article</0> to learn more about trading synthetic indices on Deriv."
                components={[
                    <StyledLink
                        to={'/academy/blog/posts/an-introduction-to-synthetic-indices-trading/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
        <StyledText>
            <Localize translate_text="Derived FX indices are simulated assets with prices derived from the price movements of real major forex pairs. Our algorithms track real-world currency prices and dampen fluctuations caused by news events and market sentiment. Plus, you can choose to trade them at the volatility you prefer." />
        </StyledText>
        <StyledText>
            <Localize translate_text="With basket indices, you can trade your favourite asset against a basket of five major global currencies, each weighted by 20%." />
        </StyledText>

        <StyledText>
            <Localize
                translate_text="Due to regulatory requirements, derived indices are unavailable in some countries. Refer to ‘Product offering’ in our <0>terms of use</0> for more info."
                components={[
                    <StyledLink
                        to={'/tnc/general-terms.pdf'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const Commodities = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'A commodity is either grown or produced naturally in the environment, such as agricultural products, livestock, crude oil, and precious metals like gold and silver.',
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="Read <0>this article</0> to learn more about trading commodities on Deriv."
                components={[
                    <StyledLink
                        to={'/academy/blog/posts/what-are-commodities/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const StockIndices = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'Stock indices measure the value of a group of companies in the stock market. This allows investors to see how a particular set of assets is performing.',
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="Read <0>this article</0> to learn more about trading stocks on Deriv."
                components={[
                    <StyledLink
                        to={'/academy/blog/posts/what-are-stocks-how-and-where-to-trade-them/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const CFD = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "CFDs let you predict the price movement of underlying assets without actually owning them. With CFDs, you open a position based on your prediction, and you'll earn a profit if you close your position when the price moves in your favour.",
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="Read <0>this article</0> to learn more about trading CFDs on Deriv."
                components={[
                    <StyledLink
                        to={'/academy/blog/posts/what-is-cfd-trading/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const DigitalOptions = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "Digital options allow you to predict the price movement of underlying assets without actually owning them. With digital options, you open a position based on your prediction, with a set duration that closes your position automatically. You'll earn a profit if your position is closed when the price is in your favour.",
            )}
        </Text>
    </ArticleWrapper>
)

const TradingPlatforms = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="We have a diverse suite of 6 trading platforms: <0>Deriv MT5</0>, <1>Deriv X</1>, <2>DTrader</2>, <3>DBot</3>, <4>SmartTrader</4>, and <5>Binary Bot</5>. Each of these platforms is designed to fit any trading style, regardless of your trading experience."
                components={[
                    <StyledLink
                        to={'/dmt5/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <StyledLink
                        to={'/derivx/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                    <StyledLink
                        to={'/dtrader/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={2}
                    />,
                    <StyledLink
                        to={'/dbot/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={3}
                    />,
                    <StyledLink
                        to={'https://smarttrader.deriv.com/en/trading.html'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={4}
                    />,
                    <StyledLink
                        to={'https://bot.deriv.com/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={5}
                    />,
                ]}
            />
        </Text>
        <StyledText>
            {localize(
                'Note: DBot, SmartTrader, and Binary Bot are not available in the EU and UK.',
            )}
        </StyledText>
    </ArticleWrapper>
)

const AutomateTradingStrategy = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                'You can automate your trading strategy using a trading bot. A trading bot is an automated computer program that purchases trade contracts for you while following a specific set of instructions that you provide.',
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="Build your trading bot for free on <0>DBot</0> or <1>Binary Bot</1>; no coding is needed. You’ll also find free pre-built strategies on DBot that you can customise to your needs."
                components={[
                    <StyledLink
                        to={'/dbot/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <StyledLink
                        to={'https://bot.deriv.com/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </StyledText>
        <StyledText>
            <Localize
                translate_text="Read <0>this article</0> to learn more about automated trading on Deriv."
                components={[
                    <StyledLink
                        to={'/academy/blog/posts/automated-trading-what-you-need-to-know/'}
                        target="_blank"
                        external
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const TradingLimits = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="Trading limits are only applicable to your Deriv real account. You can see the limits on your account on the <0>Account limits</0> page (you must be <1>logged in</1>)."
                components={[
                    <ExternalLink
                        to={`${deriv_app_url}/account/account-limits`}
                        external
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <ExternalLink
                        to={'https://oauth.deriv.com/oauth2/authorize?app_id=16929'}
                        external
                        target="_blank"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </Text>
    </ArticleWrapper>
)

const WeekendContracts = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize('Synthetic indices and cryptocurrencies are available for trading 24/7.')}
        </Text>
    </ArticleWrapper>
)

const TradingArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load
    return (
        <div>
            <Article
                header={localize('Trading')}
                title={localize('Help centre | Frequently asked questions | Trading | Deriv')}
                description={localize('Frequently asked questions - Trading')}
            >
                <Forex
                    text={localize('What is forex?')}
                    label="what-is-forex"
                    is_mounted={is_mounted}
                />
                <Commodities
                    text={localize('What are commodities?')}
                    label="what-are-commodities"
                />
                <StockIndices
                    text={localize('What are stock indices?')}
                    label="what-are-stock-indices"
                    is_mounted={is_mounted}
                />
                <Derived
                    text={localize('What is Derived?')}
                    label="what-is-derived"
                    is_mounted={is_mounted}
                />
                <CFD
                    text={localize('What are contracts for difference (CFDs)?')}
                    label="what-are-cfds"
                    is_mounted={is_mounted}
                />
                <DigitalOptions
                    text={localize('What are digital options?')}
                    label="what-are-digital-options"
                    is_mounted={is_mounted}
                />
                <TradingPlatforms
                    text={localize('How many trading platforms do you offer?')}
                    label="how-many-trading-platforms"
                    is_mounted={is_mounted}
                />
                <AutomateTradingStrategy
                    text={localize('How can I automate my trading strategy?')}
                    label="how-to-automate-trading-strategy"
                    is_mounted={is_mounted}
                />
                <TradingLimits
                    text={localize('What are the trading limits on my account?')}
                    label="trading-limits"
                    is_mounted={is_mounted}
                />
                <WeekendContracts
                    text={localize('What assets are available for trading on weekends?')}
                    label="contracts-available-on-weekends"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(TradingArticle)
