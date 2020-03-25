import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Container } from 'components/containers'
import { localize } from 'components/localization'
import { Text, Header, StyledLink } from 'components/elements'
// icons
import Forex from 'images/svg/market-forex.svg'
import Commodities from 'images/svg/market-commodities.svg'
import StockIndices from 'images/svg/market-stock-indices.svg'
import SyntheticIndices from 'images/svg/market-synthetic-indices.svg'

const markets_type = {
    'forex': {
        'icon': Forex,
        'title': 'Forex',
        'content': 'Forex gives you the chance to profit from changes in the relative values of currencies on the forex market.',
        'to': '/markets#forex',
    },
    'stock indices': {
        'icon': StockIndices,
        'title': 'Stock indices',
        'content': 'Stock indices trading allows you to profit from the price movements in a market without buying assets.',
        'to': '/markets#stock',
    },
    'Synthetic Indices': {
        'icon': SyntheticIndices,
        'title': 'Synthetic Indices',
        'content': 'Synthetic Indices are our proprietary indices that simulate real-world market movements while being free of market and liquidity risks.',
        'to': '/markets#synthetic',
    },
    'commodities': {
        'icon': Commodities,
        'title': 'Commodities trading',
        'content': 'Commodities on Deriv lets you profit from correctly predicting the market movement on precious metals and crude oil.',
        'to': '/markets#commodities',
    },
}

const Link = styled(StyledLink)`
    color: var(--color-red);
    text-decoration: none;
    font-weight: bold;
`
const CardWrapper = styled(Flex)`
    padding: 8rem 0;

    ${Flex} {
        border-left: 1px solid var(--color-grey-8);
        padding-left: 1.2rem;
    }
    div: first-child {
        border-left: none;
        padding-left: 0;
    }
`
const Card = ({ name }) => {
    const Icon = styled(markets_type[name].icon)`
        width: 64px;
        height: 64px;
    `
    return (
        <Flex direction='column' max_width='38.4rem' jc='space-between' height='24rem'>
            <div>
                <Icon />
                <Text weight='bold' mt='0.8rem'>{localize(markets_type[name].title)}</Text>
                <Text mt='0.8rem'>{localize(markets_type[name].content)}</Text>
            </div>
            <div>
                <Text size='var(--text-size-xs)' lh='1.43' padding='1rem 1.6rem'>
                    <Link to={markets_type[name].to}>{localize('Learn more about ' + name)}</Link>
                </Text>
            </div>
        </Flex >
    )
}

const OtherMarkets = ({ except }) => {
    const markets = ['forex', 'commodities', 'stock indices', 'Synthetic Indices']
    return (
        <Container direction='column'>
            <Header size='var(--text-size-header-1)' mb='4rem' align='center'>{localize('Other markets you might be interested in')}</Header>
            <CardWrapper jc='space-between'>
                {markets.map(market => market !== except ? (<Card name={market} key={market} />) : (null))}
            </CardWrapper>
        </Container>
    )
}

OtherMarkets.propTypes = {
    except: PropTypes.string,
}
Card.propTypes = {
    name: PropTypes.string,
}
export default OtherMarkets
