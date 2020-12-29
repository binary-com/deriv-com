import React from 'react'
import { Symbol } from '../_markets-style'
import { Text } from 'components/elements'
import { localize } from 'components/localization'
import { STEPINDICES } from 'components/elements/symbols'

const StepIndices = () => {
    return (
        <>
            <Symbol>
                <img src={STEPINDICES} />
                <Text>{localize('Step Index')}</Text>
            </Symbol>
        </>
    )
}

export default StepIndices
