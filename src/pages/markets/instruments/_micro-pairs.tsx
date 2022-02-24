import React from 'react'
import Symbol from '../components/helper/_symbol'
import { micro_pairs } from '../static/content/_market-symbols'

const MicroPairs = () => {
    return (
        <>
            {micro_pairs.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default MicroPairs
