import React from 'react'
import Symbol from '../components/helper/_symbol'
import { crash_boom, crash_boom_trade_type_eu } from '../static/content/_market-symbols'
import { useCountryRule } from 'components/hooks/use-country-rule'

const CrashBoom = () => {
    const { is_eu } = useCountryRule()
    return (
        <>
            {is_eu ? (
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
