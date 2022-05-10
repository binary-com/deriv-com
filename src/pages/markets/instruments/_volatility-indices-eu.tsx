import React from 'react'
import Symbol from '../components/helper/_symbol'
import { volatility_indices_eu } from '../static/content/_market-symbols'

const VolatilityIndicesEU = () => {
    return (
        <>
            {volatility_indices_eu.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default VolatilityIndicesEU
