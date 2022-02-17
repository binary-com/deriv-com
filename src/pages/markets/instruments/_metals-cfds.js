import React from 'react'
import Symbol from '../components/helper/_symbol'
import { metals_cfds, metals_cfds_eu } from './_market-symbols'
import { ROW, UKEU } from 'components/containers'

const MetalsCFDs = () => {
    return (
        <>
            <ROW>
                {metals_cfds.map((symbol, index) => (
                    <Symbol key={index} src={symbol.src} text={symbol.text} />
                ))}
            </ROW>
            <UKEU>
                {metals_cfds_eu.map((symbol, index) => (
                    <Symbol key={index} src={symbol.src} text={symbol.text} />
                ))}
            </UKEU>
        </>
    )
}

export default MetalsCFDs
