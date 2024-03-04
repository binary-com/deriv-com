import React from 'react'
import { WithIntl } from 'components/localization'
import CtraderSignupCredentials from 'features/pages/ctrader-signup/signup-credentials'
import { TGatsbyHead } from 'features/types'

const CtraderSignupCredentialsPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext

    return <CtraderSignupCredentials region={region}/>
}

export default WithIntl()(CtraderSignupCredentialsPage)
