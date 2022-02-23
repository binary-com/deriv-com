import React from 'react'
import Symbol from '../components/helper/_symbol'
import { crash_boom_multipliers, crash_boom_eu } from './_market-symbols'
import { DerivStore } from 'store'

const CrashBoomMultipliers = () => {
    const { is_eu_country } = React.useContext(DerivStore)

    return (
        <>
            <>
                {!is_eu_country
                    ? crash_boom_multipliers.map((symbol, index) => (
                          <Symbol key={index} src={symbol.src} text={symbol.text} />
                      ))
                    : crash_boom_eu.map((symbol, index) => (
                          <Symbol key={index} src={symbol.src} text={symbol.text} />
                      ))}
            </>
        </>
    )
}

export default CrashBoomMultipliers
