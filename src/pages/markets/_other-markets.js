import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import Box from 'components/containers/box'
import Commodities from 'pages/markets-svg/_market-commodities.js'
//TODO: using temp svg as a function for having dynamic id
import Forex from 'pages/markets-svg/_market-forex.js'
import StockIndices from 'pages/markets-svg/_market-stock.js'
import SyntheticIndices from 'pages/markets-svg/_market-synthetic.js'

const markets_type = {
    forex: {
        icon: Forex,
        title: 'Forex',
        content:
            'Forex trading gives you the chance to profit from changes in the relative values of currencies on the forex market.',
        to: '/markets#forex',
        id: 'marketforexothermarkets',
    },
    Synthetic_Indices: {
        icon: SyntheticIndices,
        title: 'Synthetic Indices',
        content:
            'Synthetic Indices are our proprietary indices that simulate real-world market movements while being free of market and liquidity risks.',
        to: '/markets#synthetic',
        id: 'marketsyntheticothermarkets',
    },
    stock_indices: {
        icon: StockIndices,
        title: 'Stock indices',
        content:
            'Stock indices trading allows you to profit from the price movements in a market without buying the underlying assets.',
        to: '/markets#stock',
        id: 'marketstockothermarkets',
    },

    commodities: {
        icon: Commodities,
        title: 'Commodities',
        content:
            'Commodities trading on Deriv lets you profit from correctly predicting the market movement on precious metals and crude oil.',
        to: '/markets#commodities',
        id: 'marketcommoditiesothermarket',
    },
}

const Card = ({ name }) => {
    const Icon = markets_type[name].icon

    const StyledFlex = styled(Flex)`
        border-radius: 1.6rem;
        box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
        background-color: var(--color-white);
        top: 0;

        svg {
            width: 64px;
            height: 64px;
        }
    `
    return (
        <StyledFlex direction="column" height="29.6rem" width="28.2rem" p="2.4rem 2.4rem 6.4rem">
            <Icon dynamic_id={markets_type[name].id} />
            <Text weight="bold" mt="0.8rem">
                {localize(markets_type[name].title)}
            </Text>
            <Text mt="0.8rem">{localize(markets_type[name].content)}</Text>
        </StyledFlex>
    )
}

const OtherMarkets = ({ except }) => {
    const markets = ['forex', 'Synthetic_Indices', 'stock_indices', 'commodities']

    const Wrapper = styled(Box)`
        position: relative;
        width: 100%;
        height: 19.2rem;
        background-color: rgba(133, 172, 176, 0.24);
        border-radius: 16px;
    `
    const CardWrapper = styled(Flex)`
        left: 2.4rem;
        top: 4rem;
    `
    return (
        <SectionContainer padding="4rem 0 15.8rem 8rem">
            <Container height="34rem">
                <Header size="var(--text-size-header-1)" align="center" max_width="28.2rem">
                    {localize('Other markets you might be interested in')}
                </Header>
                <Wrapper>
                    <CardWrapper max_width="93rem" jc="space-around" position="absolute">
                        {markets.map((market) =>
                            market !== except ? <Card name={market} key={market} /> : null,
                        )}
                    </CardWrapper>
                </Wrapper>
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
