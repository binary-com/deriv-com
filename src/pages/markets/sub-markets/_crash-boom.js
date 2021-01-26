import React from 'react'
import Symbol from '../components/helper/_symbol'
import { crash_boom } from './_market-symbols'

const CrashBoom = () => {
    return (
        <>
            {crash_boom.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default CrashBoom
