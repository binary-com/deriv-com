import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import {
    OTCUK,
    OTCSWISS,
    OTCGERMAN,
    OTCFRENCH,
    OTCDUTCH,
    EURO50INDEX,
} from 'components/elements/symbols'

const Europe = () => {
    return (
        <>
            <Symbol>
                <img src={OTCDUTCH} />
                <Text>{localize('Dutch Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={EURO50INDEX} />
                <Text>{localize('Euro 50 Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={OTCFRENCH} />
                <Text>{localize('French Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={OTCGERMAN} />
                <Text>{localize('German Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={OTCSWISS} />
                <Text>{localize('Swiss Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={OTCUK} />
                <Text>{localize('UK Index')}</Text>
            </Symbol>
        </>
    )
}

export default Europe
