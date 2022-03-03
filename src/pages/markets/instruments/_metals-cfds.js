import React from 'react'
import Symbol from '../components/helper/_symbol'
import { metals_cfds } from './_market-symbols'

const MetalsCFDs = () => {
    return (
        <>
            {metals_cfds.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default MetalsCFDs
