import React from 'react'
import Symbol from '../components/helper/_symbol'
import { cryptocurrencies } from './_market-symbols'

const Cryptocurrencies = () => {
    return (
        <>
            {cryptocurrencies.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default Cryptocurrencies
