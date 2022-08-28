import React from 'react'
import styled from 'styled-components'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader, StyledText } from './_help-centre-style'
import device from 'themes/device.ts'
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
                '_t_Foreign exchange, or forex, is the global market of the world’s currencies, where the values of different currencies are pitted against each other in the form of forex pairs, such as EUR/USD, AUD/JPY, etc. The forex market determines the exchange rates of each currency._t_',
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="_t_Read <0>this article</0> to learn more about trading forex on Deriv._t_"
                components={[
                    <StyledLink
                        to={'/academy/blog/posts/what-is-forex-live-trading/'}
                        target="_blank"
                        external="true"
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
                '_t_A commodity is either grown or produced naturally in the environment, such as agricultural products, livestock, crude oil, and precious metals like gold and silver._t_',
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="_t_Read <0>this article</0> to learn more about trading commodities on Deriv._t_"
                components={[
                    <StyledLink
                        to={'/academy/blog/posts/what-are-commodities/'}
                        target="_blank"
                        external="true"
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
                '_t_Stock indices measure the value of a group of companies in the stock market. This allows investors to see how a particular set of assets is performing._t_',
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="_t_Read <0>this article</0> to learn more about trading stocks on Deriv._t_"
                components={[
                    <StyledLink
                        to={'/academy/blog/posts/what-are-stocks-how-and-where-to-trade-them/'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
    </ArticleWrapper>
)

const SyntheticIndices = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                "_t_Available 24/7, our synthetic indices emulate price movements of real-world markets with varying levels of volatility. As they aren't based on actual underlying assets, they are unaffected by real-world market events._t_",
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="_t_The pricing of our synthetic indices is backed by algorithms that are audited for fairness by an independent third party. Due to regulatory requirements, synthetic indices are unavailable in some countries. Refer to ‘Product offering’ in our <0>terms of use</0> for more info._t_"
                components={[
                    <StyledLink
                        to={'/tnc/general-terms.pdf'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </StyledText>
        <StyledText>
            <Localize
                translate_text="_t_Read <0>this article</0> to learn more about trading synthetic indices on Deriv._t_"
                components={[
                    <StyledLink
                        to={'/academy/blog/posts/an-introduction-to-synthetic-indices-trading/'}
                        target="_blank"
                        external="true"
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
                "_t_CFDs let you predict the price movement of underlying assets without actually owning them. With CFDs, you open a position based on your prediction, and you'll earn a profit if you close your position when the price moves in your favour._t_",
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="_t_Read <0>this article</0> to learn more about trading CFDs on Deriv._t_"
                components={[
                    <StyledLink
                        to={'/academy/blog/posts/what-is-cfd-trading/'}
                        target="_blank"
                        external="true"
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
                "_t_Digital options allow you to predict the price movement of underlying assets without actually owning them. With digital options, you open a position based on your prediction, with a set duration that closes your position automatically. You'll earn a profit if your position is closed when the price is in your favour._t_",
            )}
        </Text>
    </ArticleWrapper>
)

const TradingPlatforms = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            <Localize
                translate_text="_t_We have a diverse suite of 6 trading platforms: <0>Deriv MT5</0>, <1>Deriv X</1>, <2>DTrader</2>, <3>DBot</3>, <4>SmartTrader</4>, and <5>Binary Bot</5>. Each of these platforms is designed to fit any trading style, regardless of your trading experience._t_"
                components={[
                    <StyledLink
                        to={'/dmt5/'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <StyledLink
                        to={'/derivx/'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                    <StyledLink
                        to={'/dtrader/'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={2}
                    />,
                    <StyledLink
                        to={'/dbot/'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={3}
                    />,
                    <StyledLink
                        to={'https://smarttrader.deriv.com/en/trading.html'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={4}
                    />,
                    <StyledLink
                        to={'https://bot.deriv.com/'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={5}
                    />,
                ]}
            />
        </Text>
        <StyledText>
            {localize(
                '_t_Note: DBot, SmartTrader, and Binary Bot are not available in the EU and UK._t_',
            )}
        </StyledText>
    </ArticleWrapper>
)

const AutomateTradingStrategy = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize(
                '_t_You can automate your trading strategy using a trading bot. A trading bot is an automated computer program that purchases trade contracts for you while following a specific set of instructions that you provide._t_',
            )}
        </Text>
        <StyledText>
            <Localize
                translate_text="_t_Build your trading bot for free on <0>DBot</0> or <1>Binary Bot</1>; no coding is needed. You’ll also find free pre-built strategies on DBot that you can customise to your needs._t_"
                components={[
                    <StyledLink
                        to={'/dbot/'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <StyledLink
                        to={'https://bot.deriv.com/'}
                        target="_blank"
                        external="true"
                        weight="bold"
                        rel="noopener noreferrer"
                        key={1}
                    />,
                ]}
            />
        </StyledText>
        <StyledText>
            <Localize
                translate_text="_t_Read <0>this article</0> to learn more about automated trading on Deriv._t_"
                components={[
                    <StyledLink
                        to={'/academy/blog/posts/automated-trading-what-you-need-to-know/'}
                        target="_blank"
                        external="true"
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
                translate_text="_t_Trading limits are only applicable to your Deriv real account. You can see the limits on your account on the <0>Account limits</0> page (you must be <1>logged in</1>)._t_"
                components={[
                    <ExternalLink
                        to={`${deriv_app_url}/account/account-limits`}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                    <ExternalLink
                        to={'https://oauth.deriv.com/oauth2/authorize?app_id=16929'}
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

const WeekendContracts = ({ text }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{text}</StyledHeader>
        <Text>
            {localize('_t_Synthetic indices and cryptocurrencies are available for trading 24/7._t_')}
        </Text>
    </ArticleWrapper>
)

const TradingArticle = () => {
    const [is_mounted] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load
    return (
        <div>
            <Article
                header={localize('_t_Trading_t_')}
                title={localize('_t_Help centre | Frequently asked questions | Trading | Deriv_t_')}
                description={localize('_t_Frequently asked questions - Trading_t_')}
            >
                <Forex
                    text={localize('_t_What is forex?_t_')}
                    label="what-is-forex"
                    is_mounted={is_mounted}
                />
                <Commodities
                    text={localize('_t_What are commodities?_t_')}
                    label="what-are-commodities"
                />
                <StockIndices
                    text={localize('_t_What are stock indices?_t_')}
                    label="what-are-stock-indices"
                    is_mounted={is_mounted}
                />
                <SyntheticIndices
                    text={localize('_t_What are synthetic indices?_t_')}
                    label="what-are-synthetic-indices"
                    is_mounted={is_mounted}
                />
                <CFD
                    text={localize('_t_What are contracts for difference (CFDs)?_t_')}
                    label="what-are-cfds"
                    is_mounted={is_mounted}
                />
                <DigitalOptions
                    text={localize('_t_What are digital options?_t_')}
                    label="what-are-digital-options"
                    is_mounted={is_mounted}
                />
                <TradingPlatforms
                    text={localize('_t_How many trading platforms do you offer?_t_')}
                    label="how-many-trading-platforms"
                    is_mounted={is_mounted}
                />
                <AutomateTradingStrategy
                    text={localize('_t_How can I automate my trading strategy?_t_')}
                    label="how-to-automate-trading-strategy"
                    is_mounted={is_mounted}
                />
                <TradingLimits
                    text={localize('_t_What are the trading limits on my account?_t_')}
                    label="trading-limits"
                    is_mounted={is_mounted}
                />
                <WeekendContracts
                    text={localize('_t_What assets are available for trading on weekends?_t_')}
                    label="contracts-available-on-weekends"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(TradingArticle)
