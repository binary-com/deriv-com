import React from 'react'
import Symbol from '../components/helper/_symbol'
import { minor_pairs_options } from './_market-symbols'

// TODO create a _symbol.js component that takes in a market symbol and renders all these, Then we can remove a lot of files if we refactor it.
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
