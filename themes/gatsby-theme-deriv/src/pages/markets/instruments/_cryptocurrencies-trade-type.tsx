import React from 'react'
import Symbol from '../components/helper/_symbol'
import { cryptocurrencies_trade_type } from '../static/content/_market-symbols'

const CryptocurrenciesTradeType = () => {
    return (
        <>
            {cryptocurrencies_trade_type.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default CryptocurrenciesTradeType
