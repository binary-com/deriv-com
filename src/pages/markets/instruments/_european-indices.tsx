import React, { useEffect, useState } from 'react'
import Symbol from '../components/helper/_symbol'
import { stocks_european_indices } from '../static/content/_market-symbols'
import useRegion from 'components/hooks/use-region'

const stocks_european_indices_eu_endpoint = stocks_european_indices.filter((cfds) => {
    return cfds?.eu === true
})
const EuropeanIndices = () => {
    const { is_eu } = useRegion()
    const [content, seetContent] = useState(stocks_european_indices)

    useEffect(() => {
        if (is_eu) seetContent(stocks_european_indices_eu_endpoint)
    }, [is_eu])

    return (
        <>
            {content.map((symbol, index) => (
                <Symbol key={symbol.text && index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default EuropeanIndices
