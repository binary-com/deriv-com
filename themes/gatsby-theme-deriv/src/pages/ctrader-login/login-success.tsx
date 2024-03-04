import React from 'react'
import { WithIntl } from 'components/localization'
import CtraderLoginSuccess from 'features/pages/ctrader-login/login-success'
import { TGatsbyHead } from 'features/types'

const CtraderLoginSuccessPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return <CtraderLoginSuccess region={region}/>
}

export default WithIntl()(CtraderLoginSuccessPage)
