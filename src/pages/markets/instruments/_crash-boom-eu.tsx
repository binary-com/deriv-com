import React from 'react'
import Symbol from '../components/helper/_symbol'
import { crash_boom_eu } from '../static/content/_market-symbols'

const CrashBoomEU = () => {
    return (
        <>
            {crash_boom_eu.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default CrashBoomEU
