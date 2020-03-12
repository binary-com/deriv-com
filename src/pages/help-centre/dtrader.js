import React from 'react'
import styled from 'styled-components'
import { Article } from './_article'
import { Text, Header } from 'components/elements/typography'
import { localize, WithIntl } from 'components/localization'

const ArticleWrapper = styled.div`
    max-width: 71.2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    font-size: var(--text-size-s);
    line-height: 1.5;
    margin-left: 12.6rem;
`
const WhatIsDMT5 = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('What is DTrader?')}
        </Header>
        <Text>
            {localize(
                'DTrader is an advanced trading platform that allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options.',
            )}
        </Text>
    </ArticleWrapper>
)
const DTraderMarkets = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('What markets can I trade on DTrader?')}
        </Header>
        <Text>
            {localize(
                'You can trade forex, stock indices, commodities, and synthetic indices on DTrader.',
            )}
        </Text>
    </ArticleWrapper>
)
const DTraderContracts = () => (
    <ArticleWrapper>
        <Header as="h4" margin=" 0 0 2.4rem 0" lh="1.5">
            {localize('What contract types can I use on DTrader?')}
        </Header>
        <Text>
            {localize(
                'We offer three contract types on DTrader: Ups & Downs, Highs & Lows, and Digits.',
            )}
        </Text>
    </ArticleWrapper>
)

const DTraderArticle = () => {
    return (
        <Article header="DTrader">
            <WhatIsDMT5 text={localize('What is DTrader?')} label="what-is-dtrader" />
            <DTraderMarkets
                text={localize('What markets can I trade on DTrader?')}
                label="markets-on-dtrader"
            />
            <DTraderContracts
                text={localize('What contract types can I use on DTrader?')}
                label="contracts-on-dtrader"
            />
        </Article>
    )
}

export default WithIntl()(DTraderArticle)
