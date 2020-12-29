import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { RANGEBREAK100, RANGEBREAK200 } from 'components/elements/symbols'

const RangeBreak = () => {
    return (
        <>
            <Symbol>
                <img src={RANGEBREAK100} alt="rangebreak 100" />
                <Text>{localize('Range Break 100 Index')}</Text>
            </Symbol>
            <Symbol>
                <img src={RANGEBREAK200} alt="rangebreak 200" />
                <Text>{localize('Range Break 200 Index')}</Text>
            </Symbol>
        </>
    )
}

export default RangeBreak
