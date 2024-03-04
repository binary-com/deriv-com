import React from 'react'
import { WithIntl } from 'components/localization'
import CtraderSignup from 'features/pages/ctrader-signup'
import { TGatsbyHead } from 'features/types'

const CtraderSignupPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return <CtraderSignup region={region}/>
}

export default WithIntl()(CtraderSignupPage)
