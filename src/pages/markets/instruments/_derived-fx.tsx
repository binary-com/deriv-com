import React from 'react'
import Symbol from '../components/helper/_symbol'
import { derived_fx } from '../static/content/_market-symbols'

const DerivedCFDs = () => {
    return (
        <>
            {derived_fx.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default DerivedCFDs
