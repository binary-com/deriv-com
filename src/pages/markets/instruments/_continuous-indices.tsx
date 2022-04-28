import React from 'react'
import Symbol from '../components/helper/_symbol'
import { continuous_indices } from '../static/content/_market-symbols'

const ContinuousIndices = () => {
    return (
        <>
            {continuous_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default ContinuousIndices
