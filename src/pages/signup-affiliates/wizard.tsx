import React from 'react'
import AffiliateSignupLayout, { SignUpWrapper } from './components/_layout'
import { WithIntl } from 'components/localization'

const AffiliateSignup = () => {
    return (
        <AffiliateSignupLayout>
            <SignUpWrapper>Should be empty and wizard will be triggered here</SignUpWrapper>
        </AffiliateSignupLayout>
    )
}

export default WithIntl()(AffiliateSignup)
