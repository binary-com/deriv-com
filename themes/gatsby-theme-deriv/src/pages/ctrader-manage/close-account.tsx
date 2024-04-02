import React from 'react'
import { WithIntl } from 'components/localization'
import CloseAccount from 'features/pages/ctrader-manage/close-account'
import { TGatsbyHead } from 'features/types'

const CloseAccountPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return <CloseAccount region={region}/>
}

export default WithIntl()(CloseAccountPage)
