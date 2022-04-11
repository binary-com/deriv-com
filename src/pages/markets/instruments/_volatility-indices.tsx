import React from 'react'
import Symbol from '../components/helper/_symbol'
import {
    volatility_indices,
    volatility_indices_trade_type_eu,
} from '../static/content/_market-symbols'
import { DerivStore } from 'store'

const VolatilityIndices = () => {
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <>
            {is_eu_country ? (
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
