import React from 'react'
import Symbol from '../components/helper/_symbol'
import { accumulators_indices } from '../static/content/_market-symbols'

const AccumulatorsIndices = () => {
    return (
        <>
            {accumulators_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default AccumulatorsIndices
