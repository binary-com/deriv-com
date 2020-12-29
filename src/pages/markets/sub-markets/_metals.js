import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { GOLDUSD, PALLADIUMUSD, PLATINUMUSD, SILVERUSD } from 'components/elements/symbols'

const Metals = () => {
    return (
        <>
            <Symbol>
                <img src={GOLDUSD} />
                <Text>{localize('Gold/USD')}</Text>
            </Symbol>
            <Symbol>
                <img src={PALLADIUMUSD} />
                <Text>{localize('Palladium/USD')}</Text>
            </Symbol>
            <Symbol>
                <img src={PLATINUMUSD} />
                <Text>{localize('Platinum/USD')}</Text>
            </Symbol>
            <Symbol>
                <img src={SILVERUSD} />
                <Text>{localize('Silver/USD')}</Text>
            </Symbol>
        </>
    )
}

export default Metals
