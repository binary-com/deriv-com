import React from 'react'
import { WithIntl } from 'components/localization'
import AddMoreAccounts from 'features/pages/ctrader-manage/add-more-accounts'
import { TGatsbyHead } from 'features/types'

const AddMoreAccountsPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return <AddMoreAccounts region={region}/>
}

export default WithIntl()(AddMoreAccountsPage)
