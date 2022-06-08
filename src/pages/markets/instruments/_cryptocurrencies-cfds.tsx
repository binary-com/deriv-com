import React from 'react'
import Symbol from '../components/helper/_symbol'
import { cryptocurrencies_cfds, cryptocurrencies_cfds_ROW } from '../static/content/_market-symbols'
import { EU, ROW } from 'components/containers/visibility'

const CryptocurrenciesCFDs = () => {
    return (
        <>
            <EU>
                <>
                    {cryptocurrencies_cfds.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            </EU>
            <ROW>
                <>
                    {cryptocurrencies_cfds_ROW.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            </ROW>
        </>
    )
}

export default CryptocurrenciesCFDs
