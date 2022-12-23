import React from 'react'
import Symbol from '../components/helper/_symbol'
import {
    volatility_indices,
    volatility_indices_trade_type_eu,
} from '../static/content/_market-symbols'
import { useCountryRule } from 'components/hooks/use-country-rule'

const VolatilityIndices = () => {
    const { is_eu } = useCountryRule()

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
