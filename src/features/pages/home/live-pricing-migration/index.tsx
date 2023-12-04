import React from 'react'
import { LiveMarketBlock } from '@deriv-com/blocks'
import { CardSlider } from '@deriv-com/components'
import { LivePriceData, swiperOption } from './data'
import { Localize, localize } from 'components/localization'

const LiveMarketSection = () => {
    return (
        <LiveMarketBlock.Tab
            className="bg-background-primary-base"
            header={localize('_t_Top trading assets & unique market indices_t_')}
            description={
                <Localize
                    translate_text="_t_<0>Forex at your fingertips.</0> Currency trading with major, minor, and exotic pairs. _t_"
                    components={[<strong key={0} />]}
                />
            }
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
            <CardSlider
                variant="LiveMarketCard"
                swiperData={swiperOption}
                slideClasses="max-w-[286px]"
                cards={LivePriceData}
            />
            <CardSlider
                variant="LiveMarketCard"
                swiperData={swiperOption}
                slideClasses="max-w-[286px]"
                cards={LivePriceData}
            />
            <CardSlider
                variant="LiveMarketCard"
                swiperData={swiperOption}
                slideClasses="max-w-[286px]"
                cards={LivePriceData}
            />
            <CardSlider
                variant="LiveMarketCard"
                swiperData={swiperOption}
                slideClasses="max-w-[286px]"
                cards={LivePriceData}
            />
            <CardSlider
                variant="LiveMarketCard"
                swiperData={swiperOption}
                slideClasses="max-w-[286px]"
                cards={LivePriceData}
            />
            <CardSlider
                variant="LiveMarketCard"
                swiperData={swiperOption}
                slideClasses="max-w-[286px]"
                cards={LivePriceData}
            />
        </LiveMarketBlock.Tab>
    )
}

export default LiveMarketSection
