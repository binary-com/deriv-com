import React from 'react'
import Symbol from '../components/_symbol'
import { exotic_pairs } from './_market-symbols'

const ExoticPairs = () => {
    return (
        <>
            {exotic_pairs.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default ExoticPairs
