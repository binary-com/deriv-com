import React from 'react'
import { WithIntl } from 'components/localization'
import Cashier from 'features/pages/ctrader-manage/cashier'
import { TGatsbyHead } from 'features/types'

const CashierPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return <Cashier region={region}/>
}

export default WithIntl()(CashierPage)
