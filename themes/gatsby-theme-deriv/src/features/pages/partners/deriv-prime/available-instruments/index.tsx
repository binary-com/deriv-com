import React from 'react'
import { other_markets_items_deriv_prime } from './_data'
import OtherMarketsSlider from 'features/components/molecules/other-markets-slider'

const AvailableInstruments = () => {
    return (
        <OtherMarketsSlider
            available_markets={other_markets_items_deriv_prime}
            title="_t_Available instruments_t_"
        />
    )
}

export default AvailableInstruments
