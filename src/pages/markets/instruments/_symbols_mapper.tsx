import React from 'react'
import Symbol from '../components/helper/_symbol'
import type { MarketSymbol } from '../static/content/_market-symbols'

const SymbolsMapper = (market_symbols: MarketSymbol[]) => {
    return (
        <>
            {market_symbols.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default SymbolsMapper
