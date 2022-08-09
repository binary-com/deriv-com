import React from 'react'
import AffiliateSignupLayout, { SignUpWrapper } from './components/_layout'
import AccountType from './components/_account-type'
import { WithIntl, localize } from 'components/localization'
import { Wizard } from 'components/form'

const AffiliateSignup = () => {
    const Steps = [
        'Account type',
        'Address details',
        'Phone number',
        'Personal details',
        'Terms of use',
    ]
    return (
        <AffiliateSignupLayout>
            <SignUpWrapper>
                <Wizard
                    title={localize('Create partner account')}
                    steps_names={Steps}
                    enable_next_button={true}
                >
                    <AccountType />
                </Wizard>
            </SignUpWrapper>
        </AffiliateSignupLayout>
    )
}

export default WithIntl()(AffiliateSignup)
