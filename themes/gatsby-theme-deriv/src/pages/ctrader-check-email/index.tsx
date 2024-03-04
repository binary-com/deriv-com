import React from 'react'
import { WithIntl } from 'components/localization'
import CtraderCheckEmail from 'features/pages/ctrader-check-email'
import { TGatsbyHead } from 'features/types'

const CtraderCheckEmailPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return <CtraderCheckEmail region={region} />
}

export default WithIntl()(CtraderCheckEmailPage)
