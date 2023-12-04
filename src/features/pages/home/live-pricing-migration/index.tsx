import React from 'react'
import { LiveMarketBlock } from '@deriv-com/blocks'
import { CardSlider, CardsContainer } from '@deriv-com/components'
import { LivePriceData } from './data'
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
                slideClasses="max-w-[286px]"
                swiperData={{
                    spaceBetween: 16,
                    slidesPerView: 4,
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                        },
                        834: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    },
                }}
                cards={LivePriceData}
            />
            {/* <CardsContainer cols="four" variant="LiveMarketCard" cards={LivePriceData} />
            <CardsContainer cols="four" variant="LiveMarketCard" cards={LivePriceData} />
            <CardsContainer cols="four" variant="LiveMarketCard" cards={LivePriceData} />
            <CardsContainer cols="four" variant="LiveMarketCard" cards={LivePriceData} />
            <CardsContainer cols="four" variant="LiveMarketCard" cards={LivePriceData} />
            <CardsContainer cols="four" variant="LiveMarketCard" cards={LivePriceData} /> */}
        </LiveMarketBlock.Tab>
    )
}

export default LiveMarketSection
