import React from 'react'
import Symbol from '../components/helper/_symbol'
import { daily_reset_indices } from '../static/content/_market-symbols'

const DailyResetIndices = () => {
    return (
        <>
            {daily_reset_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default DailyResetIndices
