import React from 'react'
import Symbol from '../components/helper/_symbol'
import { minor_options_pairs } from '../static/content/_market-symbols'

const MinorOptionsPairs = () => {
    return (
        <>
            {minor_options_pairs.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default MinorOptionsPairs
