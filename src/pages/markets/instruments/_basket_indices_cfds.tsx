import React from 'react'
import Symbol from '../components/helper/_symbol'
import { basket_indices_cfds } from '../static/content/_market-symbols'

const BasketIndicesCfds = () => {
    return (
        <>
            {basket_indices_cfds.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default BasketIndicesCfds
