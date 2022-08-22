import React from 'react'
import Symbol from '../components/helper/_symbol'
import { stocks_european_indices } from '../static/content/_market-symbols'
import { EU, ROW } from 'components/containers/visibility'

const stocks_european_indices_eu_endpoint = stocks_european_indices.filter((cfds) => {
    return cfds?.eu === true
})
const EuropeanIndices = () => {
    return (
        <>
            <ROW>
                <>
                    {stocks_european_indices.map((symbol, index) => (
                        <Symbol key={symbol.text && index} src={symbol.src} text={symbol.text} />
                    ))}
                </>
            </ROW>
            <EU>
                <>
                    {stocks_european_indices_eu_endpoint.map((symbol, index) => (
                        <Symbol
                            key={symbol.text && index}
                            src={symbol.src}
                            text={symbol.text}
                            eu={symbol.eu}
                        />
                    ))}
                </>
            </EU>
        </>
    )
}

export default EuropeanIndices
