import React from 'react'
import Symbol from '../components/helper/_symbol'
import {
    volatility_indices,
    volatility_indices_trade_type_eu,
} from '../static/content/_market-symbols'
import useRegion from 'components/hooks/use-region'

const VolatilityIndices = () => {
    const { is_eu } = useRegion()

    return (
        <>
            {is_eu ? (
                <>
                    {volatility_indices_trade_type_eu.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            ) : (
                <>
                    {volatility_indices.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            )}
        </>
    )
}

export default VolatilityIndices
