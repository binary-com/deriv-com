import React from 'react'
import { WithIntl } from 'components/localization'
import LookbacksDigitalOptionsPage from 'features/pages/options/digital/lookbacks'

const LookBacksOptions = () => {
    return <LookbacksDigitalOptionsPage />
}

export default WithIntl()(LookBacksOptions)
