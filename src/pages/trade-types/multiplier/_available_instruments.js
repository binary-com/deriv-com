import React from 'react'
import Loadable from '@loadable/component'
import Margin from './_margin.js'
import DigitalOptions from './_digital-options.js'
const AvailableTrades = Loadable(() => import('./_available-trades.js'))

const AvailableInstruments = () => {
    return (
        <AvailableTrades
                Margin={Margin}
                DigitalOptions={DigitalOptions}
            />
    );
}

export default AvailableInstruments