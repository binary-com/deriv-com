import React from 'react'
import Symbol from '../components/helper/_symbol'
import { cryptocurrencies_cfds } from '../static/content/_market-symbols'

const CryptocurrenciesCFDs = () => {
    return (
        <>
            {cryptocurrencies_cfds.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default CryptocurrenciesCFDs
