import React from 'react'
import { WithIntl } from 'components/localization'
import CtraderLogin from 'features/pages/ctrader-login'

const CtraderLoginPage = () => <CtraderLogin organization_verification={organization_verification.current} />

export default WithIntl()(CtraderLoginPage)
