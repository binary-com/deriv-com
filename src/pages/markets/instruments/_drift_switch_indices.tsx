import React from 'react'
import Symbol from '../components/helper/_symbol'
import { drift_switch_indices } from '../static/content/_market-symbols'

const DriftSwitchIndices = () => {
    return (
        <>
            {drift_switch_indices.map((symbol) => (
                <Symbol
                    key={symbol.text}
                    src={symbol.src}
                    text={symbol.text}
                    has_demo_tag={false}
                />
            ))}
        </>
    )
}

export default DriftSwitchIndices
