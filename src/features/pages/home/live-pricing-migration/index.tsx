import React from 'react'
import { LiveMarketBlock } from '@deriv-com/blocks'
import { CardsContainer } from '@deriv-com/components'
import { LivePriceData } from './data'
import { localize } from 'components/localization'

const LiveMarketSection = () => {
    return (
        <LiveMarketBlock.Tab
            className="bg-background-primary-base"
            header={localize('_t_Top trading assets & unique market indices_t_')}
            description={localize(
                '_t_Forex at your fingertips. Currency trading with major, minor, and exotic pairs. _t_',
            )}
            link={{ href: '/', content: 'See all forex pairs' }}
            tabs={[
                { children: 'Forex' },
                { children: 'Derived indices' },
                { children: 'ETFs' },
                { children: 'Stocks & indices' },
                { children: 'Cryptocurrencies' },
                { children: 'Commodities' },
            ]}
        >
            <CardsContainer cols="four" variant="LiveMarketCard" cards={LivePriceData} />
            <CardsContainer cols="four" variant="LiveMarketCard" cards={LivePriceData} />
            <CardsContainer cols="four" variant="LiveMarketCard" cards={LivePriceData} />
            <CardsContainer cols="four" variant="LiveMarketCard" cards={LivePriceData} />
            <CardsContainer cols="four" variant="LiveMarketCard" cards={LivePriceData} />
            <CardsContainer cols="four" variant="LiveMarketCard" cards={LivePriceData} />
        </LiveMarketBlock.Tab>
    )
}

export default LiveMarketSection
