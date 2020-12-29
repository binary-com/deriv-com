import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { AUDINDEX, EURINDEX, GBPINDEX, USDINDEX } from 'components/elements/symbols'

const SmartFX = () => {
    return (
        <>
            <Symbol>
                <img src={AUDINDEX} />
                <Text>{localize('AUD Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURINDEX} />
                <Text>{localize('EUR Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={GBPINDEX} />
                <Text>{localize('GBP Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={USDINDEX} />
                <Text>{localize('USD Index')}</Text>
            </Symbol>
        </>
    )
}

export default SmartFX
