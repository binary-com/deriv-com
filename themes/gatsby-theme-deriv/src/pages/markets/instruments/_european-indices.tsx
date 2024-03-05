import React from 'react'
import Symbol from '../components/helper/_symbol'
import { stocks_european_indices } from '../static/content/_market-symbols'
import useBuildVariant from 'features/hooks/use-build-variant'

const stocks_european_indices_eu_endpoint = stocks_european_indices.filter((cfds) => {
    return cfds?.eu === true
})
const EuropeanIndices = () => {
    const { region } = useBuildVariant()
    const content = region === 'eu' ? stocks_european_indices_eu_endpoint : stocks_european_indices

    return (
        <>
            {content.map((symbol, index) => (
                <Symbol key={symbol.text && index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default EuropeanIndices
