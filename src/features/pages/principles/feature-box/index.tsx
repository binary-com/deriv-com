import React from 'react'
import { CardContent } from '@deriv-com/components'
import { Features } from '@deriv-com/blocks'
import { ReliableSteps } from '../data'

interface DetailsBoxeType {
    content: CardContent[]
}
const DetailsBoxes = ({ content }: DetailsBoxeType) => {
    return (
        <>
            <Features.Card
                cols="two"
                variant="ContentTop"
                cards={content}
                className="hidden lg:block"
            />
            <Features.ContentSlider
                className="!bg-background-primary-container block lg:hidden"
                cardSliderProps={{
                    cards: content,
                    variant: 'ContentBottom',
                    slideClasses: 'max-w-[286px]',
                    className: 'min-h-[383px]',
                }}
            />
        </>
    )
}

export default DetailsBoxes
