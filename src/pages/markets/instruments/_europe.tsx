import React from 'react'
import Symbol from '../components/helper/_symbol'
import { europe } from '../static/content/_market-symbols'

const Europe = () => {
    return (
        <>
            {europe.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default Europe
