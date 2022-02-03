import React from 'react'
import Symbol from '../components/helper/_symbol'
import { jump_indices } from '../static/content/_market-symbols'

const JumpIndices = () => {
    return (
        <>
            {jump_indices.map((symbol, index) => (
                <Symbol key={index} src={symbol.src} text={symbol.text} />
            ))}
        </>
    )
}

export default JumpIndices
