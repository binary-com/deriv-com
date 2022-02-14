import React from 'react'
import Symbol from '../components/helper/_symbol'
import { energy } from '../static/content/_market-symbols'

const Energy = () => {
    return (
        <>
            {energy.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default Energy
