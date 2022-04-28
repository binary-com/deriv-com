import React from 'react'
import Symbol from '../components/helper/_symbol'
import { energy_options } from '../static/content/_market-symbols'

const EnergyOptions = () => {
    return (
        <>
            {energy_options.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default EnergyOptions
