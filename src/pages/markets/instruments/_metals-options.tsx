import React from 'react'
import Symbol from '../components/helper/_symbol'
import { metals_options } from '../static/content/_market-symbols'

const MetalsOptions = () => {
    return (
        <>
            {metals_options.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default MetalsOptions
