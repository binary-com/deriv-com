import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import { getLanguage } from '../../common/utility'
import SignUpSuccessContainer from 'features/pages/signup-success'
import { WithIntl } from 'components/localization'

const SignupSuccess = () => {
    const [registeredEmail, setRegisteredEmail] = useState('')
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const email = params.get('email')
        const success_url = `/${getLanguage()}/signup-success`

        setRegisteredEmail(email?.replaceAll(' ', '+'))
        navigate(email ? success_url : `/${getLanguage()}/`, { replace: true })
    }, [])

    return <SignUpSuccessContainer email={registeredEmail} />
}

export default WithIntl()(SignupSuccess)
