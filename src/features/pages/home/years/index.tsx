import React from 'react'
import { Features } from '@deriv-com/blocks'
import { cards } from './data'
import { Localize } from 'components/localization'

const TwentyYearsStrong = () => {
    return (
        <Features.ContentSlider
            title={<Localize translate_text="_t_We're 24+ years strong_t_" />}
            cardSliderProps={{
                slideClasses: 'max-w-[296px]',
                variant: 'ContentBottom',
                cards: cards,
            }}
        />
    )
}

export default TwentyYearsStrong
