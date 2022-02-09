import React from 'react'
import Symbol from '../components/helper/_symbol'
import { energy, energy_eu } from './_market-symbols'
import { ROW, UKEU } from 'components/containers'

const Energy = () => {
    return (
        <>
            <ROW>
                {energy.map((symbol, index) => (
                    <Symbol key={index} src={symbol.src} text={symbol.text} />
                ))}
            </ROW>
            <UKEU>
                {energy_eu.map((symbol, index) => (
                    <Symbol key={index} src={symbol.src} text={symbol.text} />
                ))}
            </UKEU>
        </>
    )
}

export default Energy
