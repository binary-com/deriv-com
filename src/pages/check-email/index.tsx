import React from 'react'
import { WithIntl } from 'components/localization'
import CheckEmailContainer from 'features/pages/check-email'

const CheckEmail = () => {
    return <CheckEmailContainer />
}
export default WithIntl()(CheckEmail)
