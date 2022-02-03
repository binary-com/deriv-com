import React from 'react'
import Symbol from '../components/helper/_symbol'
import { major_pairs } from '../static/content/_market-symbols'

const MajorPairs = () => {
    return (
        <>
            {major_pairs.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default MajorPairs
