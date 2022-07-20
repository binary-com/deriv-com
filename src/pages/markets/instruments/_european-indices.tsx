import React from 'react'
import Symbol from '../components/helper/_symbol'
import { stocks_european_indices } from '../static/content/_market-symbols'
import { EU, ROW } from 'components/containers/visibility'

const stocks_european_indices_EU = stocks_european_indices.filter((cfds) => {
    return cfds?.eu === true
})
const EuropeanIndices = () => {
    return (
        <>
            <ROW>
                <>
                    {stocks_european_indices.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            </ROW>
            <EU>
                <>
                    {stocks_european_indices_EU.map((symbol, index) => (
                        <Symbol key={index} src={symbol.src} text={symbol.text} eu={symbol.eu} />
                    ))}
                </>
            </EU>
        </>
    )
}

export default EuropeanIndices
