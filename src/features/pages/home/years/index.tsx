import React from 'react'
import { Features } from '@deriv-com/blocks'
import { swiperOption } from '../live-pricing-migration/utils'
import { cards } from './data'
import { Localize, is_rtl } from 'components/localization'

const TwentyYearsStrong = () => {
    return (
        <Features.ContentSlider
            title={<Localize translate_text="_t_We're 25 years strong_t_" />}
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

export default TwentyYearsStrong
