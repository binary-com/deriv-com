import React from 'react'
import Symbol from '../components/helper/_symbol'
import { crash_boom, crash_boom_trade_type_eu } from '../static/content/_market-symbols'
import { DerivStore } from 'store'

const CrashBoom = () => {
    const { is_eu_country } = React.useContext(DerivStore)
    return (
        <>
            {is_eu_country ? (
                <>
                    {crash_boom_trade_type_eu.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            ) : (
                <>
                    {crash_boom.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            )}
        </>
    )
}

export default CrashBoom
