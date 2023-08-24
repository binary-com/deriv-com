import React from 'react'
import Symbol from '../components/helper/_symbol'
import { drift_switch_indices } from '../static/content/_market-symbols'

const DriftSwitchIndices = () => {
    return (
        <>
            {drift_switch_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default DriftSwitchIndices
