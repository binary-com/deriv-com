import React, { useState } from 'react'
import AffiliateSignupLayout, { SignUpWrapper } from './components/_layout'
import AccountType from './components/_account-type'
import AddressDetails from './components/_address-details'
import PhoneNumber from './components/_phone_number'
import PersonalDetails from './components/_personal-details'
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
        personal_details: {
            first_name: '',
            last_name: '',
            date_birth: '',
            website_url: '',
            social_media_url: '',
            password: '',
            company_name: '',
            company_registration_number: '',
            certificate_of_incorporation: null,
            citizen: null,
            currency: '',
        },
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
            case 'personal-details':
                setNextBtnEnabled(false)
                setAffiliateAccount({
                    ...affiliate_account,
                    personal_details: {
                        first_name: value.first_name,
                        last_name: value.last_name,
                        date_birth: value.date_birth,
                        social_media_url: value.social_media_url,
                        website_url: value.website_url,
                        password: value.password,
                        company_name: value.company_name,
                        company_registration_number: value.company_registration_number,
                        certificate_of_incorporation: value.certificate_of_incorporation,
                        citizen: value.citizen,
                        currency: value.currency,
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
                    <AddressDetails
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
                    <PersonalDetails
                        affiliate_personal_data={affiliate_account.personal_details}
                        is_individual={affiliate_account.account_type === 0 ? true : false}
                        updatedData={(value) => {
                            updateAffiliateValues(value, 'personal-details')
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
