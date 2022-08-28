import React from 'react'
import Symbol from '../components/helper/_symbol'
import { STEPINDICESNEW } from 'components/elements/symbols'
import { localize } from 'components/localization'

const StepIndices = () => {
    return (
        <>
            <Symbol src={STEPINDICESNEW} text={localize('_t_Step Index_t_')} />
        </>
    )
}

export default StepIndices
