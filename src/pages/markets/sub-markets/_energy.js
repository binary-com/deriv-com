import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { OILUSD } from 'components/elements/symbols.js'

const Energy = () => {
    return (
        <>
            <Symbol>
                <img src={OILUSD} />
                <Text>{localize('Oil/USD')}</Text>
            </Symbol>
        </>
    )
}

export default Energy
