import React from 'react'
import Symbol from '../components/helper/_symbol'
import { metals, metals_eu } from './_market-symbols'
import { ROW, UKEU } from 'components/containers'

const Metals = () => {
    return (
        <>
            <ROW>
                {metals.map((symbol, index) => (
                    <Symbol key={index} src={symbol.src} text={symbol.text} />
                ))}
            </ROW>
            <UKEU>
                {metals_eu.map((symbol, index) => (
                    <Symbol key={index} src={symbol.src} text={symbol.text} />
                ))}
            </UKEU>
        </>
    )
}

export default Metals
