import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { BOOM500, BOOM1000, CRASH500, CRASH1000 } from 'components/elements/symbols'

const CrashBoom = () => {
    return (
        <>
            <Symbol>
                <img src={BOOM1000} />
                <Text>{localize('Boom 1000 Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={BOOM500} />
                <Text>{localize('Boom 500 Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={CRASH1000} />
                <Text>{localize('Crash 1000 Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={CRASH500} />
                <Text>{localize('Crash 500 Index')}</Text>
            </Symbol>
        </>
    )
}

export default CrashBoom
