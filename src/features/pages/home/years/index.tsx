import React from 'react'
import { Features } from '@deriv-com/blocks'
import { cards } from './data'
import { Localize } from 'components/localization'

const TwentyYearsStrong = () => {
    return (
        <Features.ContentSlider
            title={<Localize translate_text="_t_We're 24+ years strong_t_" />}
            cardSliderProps={{
                slideClasses: 'max-w-[296px] !h-auto mr-800',
                className: 'w-screen !mr-[calc((-100vw+100%)/2)] lg:w-full lg:!mr-auto',
                variant: 'ContentBottom',
                cards: cards,
            }}
        />
    )
}

export default TwentyYearsStrong
