import React from 'react'
import Symbol from '../components/helper/_symbol'
import { smart_fx } from './_market-symbols'

const SmartFX = () => {
    return (
        <>
            {smart_fx.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default SmartFX
