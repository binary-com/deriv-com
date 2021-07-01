import React from 'react'
import PropTypes from 'prop-types'
import { usePageLoaded } from '../../components/hooks/use-page-loaded'
import { Article } from './_article'
import { ArticleWrapper, StyledHeader } from './_help-centre-style'
import { Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

const WhatIsDMT5 = (props) => (
    <ArticleWrapper>
       {props.is_mounted && <StyledHeader as="h4">{localize('What is DTrader?')}</StyledHeader>}
        <Text>
            {localize(
                'DTrader is an advanced trading platform that allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options.',
            )}
        </Text>
    </ArticleWrapper>
)
WhatIsDMT5.propTypes = {
    children: PropTypes.any,
    is_mounted: PropTypes.bool,
};

const DTraderMarkets = (props) => (
    <ArticleWrapper>
        {props.is_mounted &&<StyledHeader as="h4">{localize('What markets can I trade on DTrader?')}</StyledHeader>}
        <Text>
            {localize(
                'You can trade forex, stock indices, commodities, and synthetic indices on DTrader.',
            )}
        </Text>
    </ArticleWrapper>
)
DTraderMarkets.propTypes = {
    children: PropTypes.any,
    is_mounted: PropTypes.bool,
};

const DTraderContracts = (props) => (
    <ArticleWrapper>
       {props.is_mounted && <StyledHeader as="h4">{localize('What contract types can I use on DTrader?')}</StyledHeader>}
        <Text>
            {localize(
                'We offer three contract types on DTrader: Ups & Downs, Highs & Lows, and Digits.',
            )}
        </Text>
    </ArticleWrapper>
)
DTraderContracts.propTypes = {
    children: PropTypes.any,
    is_mounted: PropTypes.bool,
};

const DTraderArticle = () => {
    const [is_mounted,] = usePageLoaded(false) // needed to fix tab highlighting not being rerendered during first load

    return (
        <div>
            <Article
                header="DTrader"
                title={localize('Help centre | Frequently asked questions | DTrader | Deriv')}
                description={localize('Frequently asked questions - DTrader')}
            >
                <WhatIsDMT5
                text={localize('What is DTrader?')}
                label="what-is-dtrader"
                is_mounted={is_mounted}
                />
                <DTraderMarkets
                    text={localize('What markets can I trade on DTrader?')}
                    label="markets-on-dtrader"
                    is_mounted={is_mounted}
                />
                <DTraderContracts
                    text={localize('What contract types can I use on DTrader?')}
                    label="contracts-on-dtrader"
                    is_mounted={is_mounted}
                />
            </Article>
        </div>
    )
}

export default WithIntl()(DTraderArticle)
