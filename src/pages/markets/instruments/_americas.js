import React from 'react'
import Symbol from '../components/helper/_symbol'
import { americas } from '../static/content/_market-symbols'

const Americas = () => {
    return (
        <>
            {americas.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default Americas
