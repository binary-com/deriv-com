import React from 'react'
import Symbol from '../components/helper/_symbol'
import { range_break } from '../static/content/_market-symbols'

const RangeBreak = () => {
    return (
        <>
            {range_break.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default RangeBreak
