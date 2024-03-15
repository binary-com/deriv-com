import React from 'react'
import { Features } from '@deriv-com/blocks'
import { cards } from './data'
import { Localize, is_rtl } from 'components/localization'

interface SwiperOption {
    spaceBetween: number
    slidesPerView: number | 'auto'
    reverseDirection: true
    freeMode: true
}
const swiperOption: SwiperOption = {
    spaceBetween: 16,
    slidesPerView: 'auto',
    reverseDirection: true,
    freeMode: true,
}
const TradingResponsibly = () => {
    return (
        <Features.ContentSlider
            className="!bg-background-secondary-container"
            title={<Localize translate_text="_t_Trading responsibly_t_" />}
            cardSliderProps={{
                swiperData: swiperOption,
                slideClasses: 'max-w-[296px] !h-auto !mr-gap-none !ml-gap-none',
                className: 'w-screen lg:w-full [&>*:nth-child(1)]:!gap-gap-lg ',
                variant: 'ContentBottom',
                cards: cards,
                dir: is_rtl() ? 'rtl' : 'ltr',
            }}
        />
    )
}

export default TradingResponsibly
