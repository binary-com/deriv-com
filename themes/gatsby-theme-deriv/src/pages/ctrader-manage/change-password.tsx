import React from 'react'
import { WithIntl } from 'components/localization'
import ChangePassword from 'features/pages/ctrader-manage/change-password'
import { TGatsbyHead } from 'features/types'

const ChangePasswordPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return <ChangePassword region={region}/>
}

export default WithIntl()(ChangePasswordPage)
