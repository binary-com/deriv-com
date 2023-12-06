import React from 'react'
import { Features } from '@deriv-com/blocks'
import { cards } from './data'
import { localize } from 'components/localization'

const WhyTradeInDeriv = () => {
    return (
        <>
            <Features.ContentSlider
                title={localize('_t_Why trade forex on Deriv_t_')}
                className="!bg-background-primary-container)"
                cardSliderProps={{
                    cards: cards,
                    variant: 'ContentBottom',
                    slideClasses: 'max-w-[240px]',
                    className: 'w-full',
                }}
            />
        </>
    )
}
export default WhyTradeInDeriv
