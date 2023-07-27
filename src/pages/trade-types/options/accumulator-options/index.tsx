import React from 'react'
import AccumulatorsOptions from 'features/pages/options/accumulator'
import { WithIntl } from 'components/localization'

const AccumulatorsOptionsPage = () => {
    return <AccumulatorsOptions />
}

export default WithIntl()(AccumulatorsOptionsPage)
