import React from 'react'
import Symbol from '../components/helper/_symbol'
import { swap_free_pairs } from '../static/content/_market-symbols'

const SwapFreePairs = () => {
    return (
        <>
            {swap_free_pairs.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default SwapFreePairs
