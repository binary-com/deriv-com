import React from 'react'
import Symbol from '../components/helper/_symbol'
import { cryptocurrencies_margin } from './_market-symbols'

const CryptocurrenciesMargin = () => {
    return (
        <>
            {cryptocurrencies_margin.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default CryptocurrenciesMargin
