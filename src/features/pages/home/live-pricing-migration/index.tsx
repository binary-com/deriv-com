import React from 'react'
import { LiveMarket } from '@deriv-com/blocks'
import { LivePriceData } from './data'
import { localize } from 'components/localization'

const LiveMarketSection = () => {
    return (
        <LiveMarket
            header={localize('_t_Top trading assets & unique market indices_t_')}
            className="bg-background-primary-base"
            disclaimer="*Prices are used for currency conversion and are published for reference only. Prices shown on our website are indicative and for reference only."
            link={{ href: '/', content: 'See all forex pairs' }}
            cardSliderProps={{
                cards: LivePriceData,
                variant: 'LiveMarketCard',
                slideClasses: 'max-w-[286px]',
                swiperData: {
                    spaceBetween: 16,
                    breakpoints: {
                        1280: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 'auto',
                        },
                    },
                    pagination: undefined,
                },
            }}
        />
    )
}

export default LiveMarketSection
