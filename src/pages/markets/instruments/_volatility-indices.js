import React from 'react'
import Symbol from '../components/helper/_symbol'
import { volatility_indices } from './_market-symbols'

const VolatilityIndices = () => {
    return (
        <>
            {volatility_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default VolatilityIndices
