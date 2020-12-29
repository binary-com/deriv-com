import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { OTCAUSTRALIAN, OTCHONGKONG, OTCJAPANESE } from 'components/elements/symbols'

const AsiaOceania = () => {
    return (
        <>
            <Symbol>
                <img src={OTCAUSTRALIAN} />
                <Text>{localize('Australian Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={OTCHONGKONG} />
                <Text>{localize('Hong Kong Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={OTCJAPANESE} />
                <Text>{localize('Japanese Index')}</Text>
            </Symbol>
        </>
    )
}

export default AsiaOceania
