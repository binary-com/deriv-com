import React from 'react'
import { Features } from '@deriv-com/blocks'
import { accumulatorCards, mobileCards } from '../data'
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

const WhyTradeAccumulator = () => {
    return (
        <>
            <Features.Card
                className="hidden lg:block"
                title={<Localize translate_text="_t_Why trade accumulator options on Deriv_t_" />}
                description={
                    <Localize translate_text="_t_Looking for a fast-paced, strategic and potentially explosive way to trade?_t_" />
                }
                cols="three"
                cards={accumulatorCards}
            />
            <Features.ContentSlider
                className="lg:hidden"
                title={<Localize translate_text="_t_Why trade accumulator options on Deriv_t_" />}
                description={
                    <Localize translate_text="_t_Looking for a fast-paced, strategic and potentially explosive way to trade?_t_" />
                }
                cardSliderProps={{
                    swiperData: swiperOption,
                    slideClasses: 'max-w-[296px] !h-auto !mr-gap-none !ml-gap-none',
                    className: 'w-screen lg:w-full [&>*:nth-child(1)]:!gap-gap-lg ',
                    variant: 'ContentLeft',
                    cards: mobileCards,
                    dir: is_rtl() ? 'rtl' : 'ltr',
                }}
            />
        </>
    )
}

export default WhyTradeAccumulator
