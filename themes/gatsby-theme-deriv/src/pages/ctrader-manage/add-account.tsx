import React from 'react'
import { WithIntl } from 'components/localization'
import AddAccount from 'features/pages/ctrader-manage/add-account'
import { TGatsbyHead } from 'features/types'

const AddAccountPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return <AddAccount region={region} />
}

export default WithIntl()(AddAccountPage)
