import React from 'react'
import { Features } from '@deriv-com/blocks'
import { ReliableSteps } from '../data'
import { Localize } from 'components/localization'

const DetailsBoxes = () => {
    return (
        <>
            <Features.Card
                cols="two"
                variant="ContentTop"
                cards={ReliableSteps}
                className="hidden lg:block"
            />
            <Features.ContentSlider
                className="!bg-background-primary-container block lg:hidden"
                cardSliderProps={{
                    cards: ReliableSteps,
                    variant: 'ContentBottom',
                    slideClasses: 'max-w-[286px] min-h-[383px] w-full h-full',
                    className: 'min-h-[383px]',
                }}
            />
        </>
    )
}

export default DetailsBoxes
