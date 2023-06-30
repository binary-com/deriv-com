import React from 'react'
import Symbol from '../components/helper/_symbol'
import { TMarketSymbol } from '../static/content/_types'

const SymbolsMapper = (market_symbols: TMarketSymbol[]) => {
    return (
        <>
            {market_symbols.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default SymbolsMapper
