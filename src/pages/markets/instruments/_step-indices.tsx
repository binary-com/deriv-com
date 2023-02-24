import React from 'react'
import Symbol from '../components/helper/_symbol'
import { STEPINDICESNEW } from 'components/elements/symbols'
import { Localize } from 'components/localization'

const StepIndices = () => {
    return (
        <>
            <Symbol src={STEPINDICESNEW} text={<Localize translate_text="_t_Step Index_t_" />} />
        </>
    )
}

export default StepIndices
