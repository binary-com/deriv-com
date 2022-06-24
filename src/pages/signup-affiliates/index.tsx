import React from 'react'
import AffiliateSignupLayout, { SignUpWrapper } from './components/_layout'
import { WithIntl } from 'components/localization'

const AffiliateSignup = () => {
    return (
        <AffiliateSignupLayout>
            <SignUpWrapper>Create the new clean sign up form here</SignUpWrapper>
        </AffiliateSignupLayout>
    )
}

export default WithIntl()(AffiliateSignup)
