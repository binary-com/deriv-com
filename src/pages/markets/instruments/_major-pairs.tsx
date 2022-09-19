import React from 'react'
import Symbol from '../components/helper/_symbol'
import { major_pairs } from '../static/content/_market-symbols'

const MajorPairs = () => {
    return (
        <>
            {major_pairs.map((symbol) => (
                <Symbol
                    key={symbol.text.props.translate_text}
                    src={symbol.src}
                    text={symbol.text}
                />
            ))}
        </>
    )
}

export default MajorPairs
