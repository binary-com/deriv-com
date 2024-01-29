import React from 'react'
import Symbol from '../components/helper/_symbol'
import { stocks_american_indices } from '../static/content/_market-symbols'

const AmericanStocks = () => {
    return (
        <>
            {stocks_american_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default AmericanStocks
