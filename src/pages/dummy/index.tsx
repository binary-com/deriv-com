import React from 'react'
import { Dummy } from 'features/pages/dummy'
import { WithIntl } from 'components/localization'

const DummyPage = () => {
    return <Dummy />
}

export default WithIntl()(DummyPage)
