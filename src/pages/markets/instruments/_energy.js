import React from 'react'
import Symbol from '../components/helper/_symbol'
import { energy, energy_eu } from './_market-symbols'
import { EU } from 'components/containers/visibility'

const Energy = () => {
    return (
        <>
            {EU &&
                energy_eu.map((symbol, index) => (
                    <Symbol key={index} src={symbol.src} text={symbol.text} />
                ))}
            {!EU &&
                energy.map((symbol, index) => (
                    <Symbol key={index} src={symbol.src} text={symbol.text} />
                ))}
        </>
    )
}

export default Energy
