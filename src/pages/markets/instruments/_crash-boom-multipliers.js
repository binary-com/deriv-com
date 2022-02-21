import React from 'react'
import Symbol from '../components/helper/_symbol'
import { crash_boom_multipliers } from './_market-symbols'

const CrashBoomMultipliers = () => {
    return (
        <>
            <>
                {crash_boom_multipliers.map((symbol, index) => (
                    <Symbol key={index} src={symbol.src} text={symbol.text} />
                ))}
            </>
        </>
    )
}

export default CrashBoomMultipliers
