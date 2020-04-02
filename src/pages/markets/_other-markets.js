import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Container, SectionContainer } from 'components/containers'
import { localize, LocalizedLink } from 'components/localization'
import { Text, Header } from 'components/elements'
//TODO: using temp svg as a function for having dynamic id
import Forex from 'pages/markets-svg/_market-forex.js'
import Commodities from 'pages/markets-svg/_market-commodities.js'
import StockIndices from 'pages/markets-svg/_market-stock.js'
import SyntheticIndices from 'pages/markets-svg/_market-synthetic.js'

const markets_type = {
    forex: {
        icon: Forex,
        title: 'Forex',
        content:
            'Forex gives you the chance to profit from changes in the relative values of currencies on the forex market.',
        to: '/markets#forex',
        id: 'marketforexothermarkets',
    },
    'stock indices': {
        icon: StockIndices,
        title: 'Stock indices',
        content:
            'Stock indices trading allows you to profit from the price movements in a market without buying the underlying assets.',
        to: '/markets#stock',
        id: 'marketstockothermarkets',
    },
    'Synthetic Indices': {
        icon: SyntheticIndices,
        title: 'Synthetic Indices',
        content:
            'Synthetic Indices are our proprietary indices that simulate real-world market movements while being free of market and liquidity risks.',
        to: '/markets#synthetic',
        id: 'marketsyntheticothermarkets',
    },
    commodities: {
        icon: Commodities,
        title: 'Commodities trading',
        content:
            'Commodities trading on Deriv lets you profit from correctly predicting the market movement on precious metals and crude oil.',
        to: '/markets#commodities',
        id: 'marketcommoditiesothermarket',
    },
}

const Link = styled(LocalizedLink)`
    color: var(--color-red);
    text-decoration: none;
    font-weight: bold;
`
const CardWrapper = styled(Flex)`
    ${Flex} {
        border-left: 1px solid var(--color-grey-8);
        padding-left: 1.2rem;
    }
    div:first-child {
        border-left: none;
        padding-left: 0;
    }
`
const Card = ({ name }) => {
    const Icon = markets_type[name].icon
    const ContentWrapper = styled.div`
        svg {
            width: 64px;
            height: 64px;
        }
    `
    return (
        <Flex direction="column" max_width="38.4rem" jc="space-between" height="24rem">
            <ContentWrapper>
                <Icon dynamic_id={markets_type[name].id} />
                <Text weight="bold" mt="0.8rem">
                    {localize(markets_type[name].title)}
                </Text>
                <Text mt="0.8rem">{localize(markets_type[name].content)}</Text>
            </ContentWrapper>
            <div>
                <Text size="var(--text-size-xs)" lh="1.43" padding="1rem 1.6rem">
                    <Link to={markets_type[name].to}>{localize('Learn more about ' + name)}</Link>
                </Text>
            </div>
        </Flex>
    )
}

const OtherMarkets = ({ except }) => {
    const markets = ['forex', 'commodities', 'stock indices', 'Synthetic Indices']
    return (
        <SectionContainer>
            <Container direction="column">
                <Header size="var(--text-size-header-1)" mb="4rem" align="center">
                    {localize('Other markets you might be interested in')}
                </Header>
                <CardWrapper jc="space-between">
                    {markets.map((market) =>
                        market !== except ? <Card name={market} key={market} /> : null,
                    )}
                </CardWrapper>
            </Container>
        </SectionContainer>
    )
}

OtherMarkets.propTypes = {
    except: PropTypes.string,
}
Card.propTypes = {
    name: PropTypes.string,
}
export default OtherMarkets
