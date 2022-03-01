import React from 'react'
import Symbol from '../components/helper/_symbol'
import { energy_cfds } from './_market-symbols'

const EnergyCFDs = () => {
    return (
        <>
            {energy_cfds.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default EnergyCFDs
