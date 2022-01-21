import React from 'react'
import Symbol from '../components/helper/_symbol'
import { energy, energy_eu } from './_market-symbols'
import { DerivStore } from 'store'

const Energy = () => {
    const { is_eu_country, is_uk_country } = React.useContext(DerivStore)

    return (
        <>
            {!is_eu_country && !is_uk_country
                ? energy.map((symbol, index) => (
                      <Symbol key={index} src={symbol.src} text={symbol.text} />
                  ))
                : energy_eu.map((symbol, index) => (
                      <Symbol key={index} src={symbol.src} text={symbol.text} />
                  ))}
        </>
    )
}

export default Energy
