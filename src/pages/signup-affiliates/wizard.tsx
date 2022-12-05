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
        },
        phone_number: '',
        personal_details: null,
        terms_use: {
            non_pep_declaration: false,
            tnc_accepted: false,
            is_brokers_checked: false,
            is_partner_checked: false,
            is_eu_checked: false,
        },
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
                    },
                })
                break

            case 'phone-number':
                setNextBtnEnabled(false)
                setAffiliateAccount({
                    ...affiliate_account,
                    phone_number: value,
                })
                break

            case 'terms-use':
                setNextBtnEnabled(false)
                setAffiliateAccount({
                    ...affiliate_account,
                    terms_use: {
                        non_pep_declaration: value.non_pep_declaration,
                        tnc_accepted: value.tnc_accepted,
                        is_brokers_checked: value.is_brokers_checked,
                        is_partner_checked: value.is_partner_checked,
                        is_eu_checked: value.is_eu_checked,
                    },
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
                        updatedData={(value) => {
                            updateAffiliateValues(value, 'phone-number')
                        }}
                        onValidate={(valid) => {
                            setNextBtnEnabled(valid)
                        }}
                    />
                    <AccountTerms
                        affiliate_terms_data={affiliate_account.terms_use}
                        updatedData={(value) => {
                            updateAffiliateValues(value, 'terms-use')
                        }}
                        onValidate={(valid) => {
                            setNextBtnEnabled(valid)
                        }}
                    />
                </Wizard>
            </SignUpWrapper>
        </AffiliateSignupLayout>
    )
}

export default WithIntl()(AffiliateSignup)
