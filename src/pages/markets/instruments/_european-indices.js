import React from 'react'
import Symbol from '../components/helper/_symbol'
import { stocks_european_indices } from './_market-symbols'

const EuropeanIndices = () => {
    return (
        <>
            {stocks_european_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default EuropeanIndices
