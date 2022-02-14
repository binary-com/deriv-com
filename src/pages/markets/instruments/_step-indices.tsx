import React from 'react'
import Symbol from '../components/helper/_symbol'
import { STEPINDICES } from 'components/elements/symbols'
import { localize } from 'components/localization'

const StepIndices = () => {
    return (
        <>
            <Symbol src={STEPINDICES} text={localize('Step Index')} />
        </>
    )
}

export default StepIndices
