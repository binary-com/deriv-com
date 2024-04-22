import React from 'react'
import Symbol from '../components/helper/_symbol'
import { jump_indices_eu } from '../static/content/_market-symbols'

const CrashBoomEU = () => {
    return (
        <>
            {jump_indices_eu.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default CrashBoomEU
