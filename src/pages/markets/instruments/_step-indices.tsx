import React from 'react'
import Symbol from '../components/helper/_symbol'
import { STEPINDICESNEW } from 'components/elements/symbols'
import { Localize } from 'components/localization'

const StepIndices = () => {
    return (
        <>
            <Symbol src={STEPINDICESNEW} text={<Localize translate_text="Step Index" />} />
        </>
    )
}

export default StepIndices
