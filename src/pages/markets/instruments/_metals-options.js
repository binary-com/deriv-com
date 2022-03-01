import React from 'react'
import Symbol from '../components/helper/_symbol'
import { metals_options } from './_market-symbols'
import { ROW } from 'components/containers'

const MetalsOptions = () => {
    return (
        <ROW>
            {metals_options.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </ROW>
    )
}

export default MetalsOptions
