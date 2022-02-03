import React from 'react'
import Symbol from '../components/helper/_symbol'
import { cryptocurrencies_multipliers } from '../static/content/_market-symbols'

const CryptocurrenciesMultipliers = () => {
    return (
        <>
            {cryptocurrencies_multipliers.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default CryptocurrenciesMultipliers
