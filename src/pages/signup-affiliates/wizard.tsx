import React, { useState } from 'react'
import AffiliateSignupLayout, { SignUpWrapper } from './components/_layout'
import AccountType from './components/_account-type'
import AccountDetails from './components/_account-details'
import PhoneNumber from './components/_phone_number'
import AccountTerms from './components/_account-terms'
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

    const [next_btn_enabled, setNextBtnEnabled] = useState(false)

    const [affiliate_account, setAffiliateAccount] = useState({
        account_type: -1,
        address_details: {
            country: null,
            state: '',
            city: '',
            street: '',
            postal_code: '',
            phone_code: '',
        },
        phone_number: '',
        personal_details: null,
        terms_use: null,
    })

    const updateAffiliateValues = (value, type) => {
        switch (type) {
            case 'account-type':
                setAffiliateAccount({ ...affiliate_account, account_type: value })
                break

            case 'account-details':
                setNextBtnEnabled(false)
                setAffiliateAccount({
                    ...affiliate_account,
                    address_details: {
                        country: value.country,
                        state: value.state,
                        city: value.city,
                        street: value.street,
                        postal_code: value.postal_code,
                        phone_code: value.phone_code,
                    },
                })

                break

            case 'phone-number':
                setNextBtnEnabled(false)
                setAffiliateAccount({
                    ...affiliate_account,
                    phone_number: value.phone,
                })
                break
        }
    }

    return (
        <AffiliateSignupLayout>
            <SignUpWrapper>
                <Wizard
                    title={localize('Add an affiliate account')}
                    steps_names={Steps}
                    enable_next_button={next_btn_enabled}
                >
                    <AccountType
                        cardSelected={affiliate_account.account_type}
                        updatedData={(index) => {
                            updateAffiliateValues(index, 'account-type')
                        }}
                        onValidate={(valid) => {
                            setNextBtnEnabled(valid)
                        }}
                    />
                    <AccountDetails
                        affiliate_address_data={affiliate_account.address_details}
                        updatedData={(value) => {
                            updateAffiliateValues(value, 'account-details')
                        }}
                        onValidate={(valid) => {
                            setNextBtnEnabled(valid)
                        }}
                    />
                    <PhoneNumber
                        affiliate_phone_number={affiliate_account.phone_number}
                        affiliate_phone_code={affiliate_account.address_details.phone_code}
                        updatedData={(value) => {
                            updateAffiliateValues(value, 'phone-number')
                        }}
                        onValidate={(valid) => {
                            setNextBtnEnabled(valid)
                        }}
                    />
                    <AccountTerms />
                </Wizard>
            </SignUpWrapper>
        </AffiliateSignupLayout>
    )
}

export default WithIntl()(AffiliateSignup)
