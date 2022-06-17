import React from 'react'
import Symbol from '../components/helper/_symbol'
import { cryptocurrencies_cfds } from '../static/content/_market-symbols'
import { EU, ROW } from 'components/containers/visibility'

const CryptocurrenciesCFDs = () => {
    return (
        <>
            <EU>
                <>
                    {cryptocurrencies_cfds.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} row={symbol.row} />
                    ))}
                </>
            </EU>
            <ROW>
                <>
                    {cryptocurrencies_cfds.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} row={symbol.row} />
                    ))}
                </>
            </ROW>
        </>
    )
}

export default CryptocurrenciesCFDs
