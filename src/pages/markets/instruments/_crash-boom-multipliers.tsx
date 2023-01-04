import React from 'react'
import Symbol from '../components/helper/_symbol'
import { crash_boom_multipliers, crash_boom_trade_type_eu } from '../static/content/_market-symbols'
import { RegionContext } from 'store/region-context'

const CrashBoomMultipliers = () => {
    const { is_eu } = React.useContext(RegionContext)

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
                    {crash_boom_multipliers.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            )}
        </>
    )
}

export default CrashBoomMultipliers
