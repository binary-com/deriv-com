import React from 'react'
import Symbol from '../components/helper/_symbol'
import { stocks_asian_indices } from '../static/content/_market-symbols'

const AsianIndices = () => {
    return (
        <>
            {stocks_asian_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default AsianIndices
