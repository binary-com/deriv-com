import React from 'react'
import Symbol from '../components/helper/_symbol'
import { metals } from '../static/content/_market-symbols'

const Metals = () => {
    return (
        <>
            {metals.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default Metals
