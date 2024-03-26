import React from 'react'
import { WithIntl } from 'components/localization'
import CtraderLogin from 'features/pages/ctrader-login'
import { TGatsbyHead } from 'features/types'

const CtraderLoginPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return <CtraderLogin region={region}/>
}

export default WithIntl()(CtraderLoginPage)
