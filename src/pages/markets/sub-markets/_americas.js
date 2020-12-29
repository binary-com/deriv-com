import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { OTCUS, OTCUSTECH, OTCWALLSTREET } from 'components/elements/symbols'

const Americas = () => {
    return (
        <>
            <Symbol>
                <img src={OTCUS} />
                <Text>{localize('US Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={OTCUSTECH} />
                <Text>{localize('US Tech Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={OTCWALLSTREET} />
                <Text>{localize('Wall Street Index')}</Text>
            </Symbol>
        </>
    )
}

export default Americas
