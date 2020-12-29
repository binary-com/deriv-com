import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { MARKETBULL, MARKETBEAR } from 'components/elements/symbols.js'

const DailyResetIndices = () => {
    return (
        <>
            <Symbol>
                <img src={MARKETBEAR} />
                <Text>{localize('Bear Market Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={MARKETBULL} />
                <Text>{localize('Bull Market Index')}</Text>
            </Symbol>
        </>
    )
}

export default DailyResetIndices
