import React from 'react'
import Symbol from '../components/helper/_symbol'
import { minor_pairs } from '../static/content/_market-symbols'

const MinorPairs = () => {
    return (
        <>
            {minor_pairs.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default MinorPairs
