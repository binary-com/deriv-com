import React from 'react'
import Symbol from '../components/helper/_symbol'
import { basket_indices } from './_market-symbols'

const BasketIndices = () => {
    return (
        <>
            {basket_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default BasketIndices
