import React from 'react'
import SignUp from 'features/pages/signup'
import { WithIntl } from 'components/localization'

const Signup = () => {
    return <SignUp />
}

export default WithIntl()(Signup)
