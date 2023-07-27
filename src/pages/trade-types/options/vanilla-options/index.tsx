import React from 'react'
import VanillaOptions from 'features/pages/options/vanilla'
import { WithIntl } from 'components/localization'

const VanillaOptionsPage = () => {
    return <VanillaOptions />
}

export default WithIntl()(VanillaOptionsPage)
