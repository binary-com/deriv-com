import React, { useState } from 'react'
import WhyTradeAccumulator from './why-trade'
import WhatAreAccumulatorOptions from './what-are-accumulatr-options'
import AccumulatorAccrodian from './accrodian'
import HowToTradeAccumulator from './how-to-trade-accumulator'
import OptionsLayout from 'features/components/quill/options-layout'
import { BuildVariantType } from 'features/types'
import VideoModal from 'features/components/quill/videoModal'

const AccumulatorsOptions = ({ region }: BuildVariantType) => {
    const [isModalOpen, setIsModalOpen] = useState({ is_open: false, video_id: '' })

    const handleModalToggle = (action: boolean, video_id?: string) => {
        action && setIsModalOpen({ is_open: !isModalOpen.is_open, video_id: video_id || '' })
    }
    return (
        <OptionsLayout
            heading="_t_Move fast,<br/>when the market doesn’t_t_"
            description="_t_Amplify your gains in sideways markets with accumulator options.<br/> Up to 5% compounded growth per tick._t_"
            has_content_block
            region={region}
        >
            <WhyTradeAccumulator />
            <WhatAreAccumulatorOptions handleModalToggle={handleModalToggle} />
            <HowToTradeAccumulator handleModalToggle={handleModalToggle} />
            <VideoModal
                isOpen={isModalOpen.is_open}
                onClose={() => handleModalToggle(true)}
                video_id={isModalOpen.video_id}
            />
            <AccumulatorAccrodian />
        </OptionsLayout>
    )
}

export default AccumulatorsOptions
