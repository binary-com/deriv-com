import React from 'react'
import Symbol from '../components/helper/_symbol'
import { basket_indices_commodities } from '../static/content/_market-symbols'

const BasketIndicesCommodities = () => {
    return (
        <>
            {basket_indices_commodities.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default BasketIndicesCommodities
