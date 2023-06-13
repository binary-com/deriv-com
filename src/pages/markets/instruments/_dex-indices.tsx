import React from 'react'
import Symbol from '../components/helper/_symbol'
import { dex_indices } from '../static/content/_market-symbols'

const DexIndices = () => {
    return (
        <>
            {dex_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default DexIndices
