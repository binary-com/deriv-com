import React from 'react'
import Symbol from '../components/helper/_symbol'
import { minor_pairs_cfds } from './_market-symbols'

const MinorPairsCFDS = () => {
    return (
        <>
            {minor_pairs_cfds.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default MinorPairsCFDS
