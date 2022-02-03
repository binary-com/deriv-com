import React from 'react'
import Symbol from '../components/helper/_symbol'
import { asia_oceania } from '../static/content/_market-symbols'

const AsiaOceania = () => {
    return (
        <>
            {asia_oceania.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default AsiaOceania
