import React from 'react'
import Symbol from '../components/helper/_symbol'
import { minor_pairs_options } from './_market-symbols'

const MinorPairsOptions = () => {
    return (
        <>
            {minor_pairs_options.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default MinorPairsOptions
