import React from 'react'
import { WithIntl } from 'components/localization'
import CtraderSignupSuccess from 'features/pages/ctrader-signup/signup-success'
import { TGatsbyHead } from 'features/types'

const CtraderSignupSuccessPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return <CtraderSignupSuccess region={region}/>
}

export default WithIntl()(CtraderSignupSuccessPage)
