import React from 'react'
import Symbol from '../components/helper/_symbol'
import { continuous_indices_options } from '../static/content/_market-symbols'

const ContinuousIndicesOptions = () => {
    return (
        <>
            {continuous_indices_options.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default ContinuousIndicesOptions
