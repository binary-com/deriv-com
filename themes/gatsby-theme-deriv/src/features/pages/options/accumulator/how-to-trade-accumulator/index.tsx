import React from 'react'
import { Features } from '@deriv-com/blocks'
import { accumulatorOptionsVideoCard } from '../data'
import { Localize } from 'components/localization'
import { how_to_trade_accumulator_video_id } from 'common/constants'

interface HowToTradeAccumulatorProps {
    handleModalToggle: (isOpen: boolean, videoId: string) => void
}

const HowToTradeAccumulator = ({ handleModalToggle }: HowToTradeAccumulatorProps) => {
    return (
        <Features.Card
            hasPadding
            className="xl:[&>*:nth-child(1)]:!px-50"
            title={<Localize translate_text="_t_How to trade accumulator options_t_" />}
            cols="two"
            variant="ContentTop"
            cards={accumulatorOptionsVideoCard.map((card) => ({
                ...card,
                content: (
                    <div
                        onClick={() =>
                            handleModalToggle(card.id === 1, how_to_trade_accumulator_video_id)
                        }
                    >
                        {card.content}
                    </div>
                ),
            }))}
        />
    )
}

export default HowToTradeAccumulator
