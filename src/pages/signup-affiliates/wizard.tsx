import React, { useEffect, useState } from 'react'
import AffiliateSignupLayout, { SignUpWrapper } from './components/_layout'
import AccountType from './components/_account-type'
import AccountDetails from './components/_account-details'
import PhoneNumber from './components/_phone_number'
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

    const [next_account_type, setNextAccount] = useState(false)

    const [affiliate_account, setAffiliateAccount] = useState({
        account_type: -1,
        address_details: null,
        phone_number: null,
        personal_details: null,
        terms_use: null,
    })

    const handleNext = () => {
        setNextAccount(true)
    }
    const updateAffiliateValues = (value) => {
        affiliate_account.account_type = value
        setAffiliateAccount({
            ...affiliate_account,
            account_type: value,
        })

        handleNext()
    }

    return (
        <AffiliateSignupLayout>
            <SignUpWrapper>
                <Wizard
                    title={localize('Add an affiliate account')}
                    steps_names={Steps}
                    enable_next_button={next_account_type ? true : false}
                >
                    <AccountType
                        cardSelected={affiliate_account.account_type}
                        updateData={updateAffiliateValues}
                    />
                    <AccountDetails />
                    <PhoneNumber />
                </Wizard>
            </SignUpWrapper>
        </AffiliateSignupLayout>
    )
}

export default WithIntl()(AffiliateSignup)
