import React from 'react'
import { Article, ArticleProps } from './_article'
import { ArticleWrapper, ExternalLink, StyledHeader } from './_help-centre-style'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import { deriv_app_url } from 'common/constants'
import { Text } from 'components/elements'
import { localize, Localize, WithIntl } from 'components/localization'

const Forex = ({ text, label, is_mounted }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What is forex?')}</StyledHeader>
        <Text>
            {localize(
                'Forex is the global decentralised market for the buying and selling of currencies.',
            )}
        </Text>
    </ArticleWrapper>
)

const Commodities = ({ text, label, is_mounted }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What are commodities?')}</StyledHeader>
        <Text>
            {localize(
                'A commodity is either grown or produced naturally in the environment. Examples include crude oil, metals, gold, and silver.',
            )}
        </Text>
    </ArticleWrapper>
)

const StockIndices = ({ text, label, is_mounted }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What are stock indices?')}</StyledHeader>
        <Text>
            {localize(
                'Stock indices measure the value of a selection of companies in the stock market. This allows investors to see how a particular set of assets is performing.',
            )}
        </Text>
    </ArticleWrapper>
)

const SyntheticIndices = ({ text, label, is_mounted }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What are synthetic indices?')}</StyledHeader>
        <Text>
            {localize(
                'Exclusive to Deriv, synthetic indices are our very own set of synthetic markets engineered to simulate real-world market movements, unaffected by the sways of actual events and other outside disruptions.',
            )}
        </Text>
    </ArticleWrapper>
)

const CFD = ({ text, label, is_mounted }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What are contracts for difference (CFDs)?')}</StyledHeader>
        <Text>
            {localize(
                'A contract for differences (CFD) is a contract that pays the difference between the value of an asset at the time of opening a trade and its value at closing the trade.',
            )}
        </Text>
    </ArticleWrapper>
)

const DigitalOptions = ({ text, label, is_mounted }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What are digital options?')}</StyledHeader>
        <Text>
            {localize(
                'A digital option is a financial instrument with a fixed payout where you predict the outcome from only two possible results.',
            )}
        </Text>
    </ArticleWrapper>
)

const TradingPlatforms = ({ text, label, is_mounted }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('How many trading platforms do you offer?')}</StyledHeader>
        <Text>
            {localize(
                'We offer three trading platforms: DTrader, DBot, and DMT5. Each platform caters to a variety of trading styles and experiences, whether you’re a new or seasoned trader.',
            )}
        </Text>
    </ArticleWrapper>
)

const AutomateTradingStrategy = ({ text, label, is_mounted }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('How can I automate my trading strategy?')}</StyledHeader>
        <Text>
            {localize(
                'You can create and run your own automated trading strategies with DBot. You can also download ready-made trading robots (also known as Expert Advisors) for DMT5 by going to the ‘Market’ tab in the DMT5 platform.',
            )}
        </Text>
    </ArticleWrapper>
)

const TradingLimits = ({ text, label, is_mounted }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">{localize('What are my trading limits?')}</StyledHeader>
        <Text>
            <Localize
                translate_text="You can see your account’s trading limits by going to <0>Settings > Security and safety ></0> <1>Account limits</1>. Please note that if your account balance exceeds the maximum account cash balance, you must withdraw funds from your account to bring your account balance below the maximum limit."
                components={[
                    <strong key={0} />,
                    <ExternalLink
                        to={`${deriv_app_url}/account/account-limits`}
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

const WeekendContracts = ({ text, label, is_mounted }: ArticleProps) => (
    <ArticleWrapper>
        <StyledHeader as="h4">
            {localize('What contracts are available for trading on weekends?')}
        </StyledHeader>
        <Text>{localize('Synthetic indices are available for trading 24/7.')}</Text>
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
                <SyntheticIndices
                    text={localize('What are synthetic indices?')}
                    label="what-are-synthetic-indices"
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
                    text={localize('What are my trading limits?')}
                    label="trading-limits"
                    is_mounted={is_mounted}
                />
                <WeekendContracts
                    text={localize('What contracts are available for trading on weekends?')}
                    label="contracts-available-on-weekends"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(TradingArticle)
