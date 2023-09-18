import React, { useState } from 'react'
import styled from 'styled-components'
import { WizardComponentProps } from '../_types'
import AccountType from './_account-type'
import AccountDetails from './_account-details'
import PhoneNumber from './_phone_number'
import AccountTerms from './_account-terms'
import PersonalDetails from './_account-personal-details'
import Wizard from './wizard'
import { useResidenceList } from 'features/hooks/use-residence-list'
import { Container } from 'components/containers'

export const SignUpWrapper = styled(Container)`
    display: flex;
    flex-direction: column;
    padding: 40px;
    margin: 0;
    height: 510px;
    width: 100%;
    max-width: 486px;
    background: var(--color-white);
    border-radius: 6px;
    box-shadow: 0px 12px 16px -4px #0e0e0e14;
`

const WizardComponent = ({
    show_wizard,
    setShowWizard,
    affiliate_account,
    setAffiliateAccount,
    onSubmit,
    onAnalyticEvent,
}: WizardComponentProps) => {
    const [step, setStep] = useState(1)
    const [next_btn_enabled, setNextBtnEnabled] = useState<boolean>(false)
    const [residence_list] = useResidenceList()

    const updateAffiliateValues = (value, type) => {
        switch (type) {
            case 'account-type':
                onAnalyticEvent('affiliates: account type')
                setAffiliateAccount({
                    ...affiliate_account,
                    account: { type: value.type, plan: value.plan },
                })
                break

            case 'account-details':
                onAnalyticEvent('affiliates: account details')
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
                onAnalyticEvent('affiliates: phone number')
                setAffiliateAccount({
                    ...affiliate_account,
                    phone_number: {
                        phone: value.phone,
                        prefix: value.prefix,
                    },
                })
                break
            case 'personal-details':
                onAnalyticEvent('affiliates: personal details')
                setAffiliateAccount({
                    ...affiliate_account,
                    personal_details: {
                        username: value.username,
                        first_name: value.first_name,
                        last_name: value.last_name,
                        date_birth: value.date_birth,
                        social_media_url: value.social_media_url,
                        website_url: value.website_url,
                        password: value.password,
                        company_name: value.company_name,
                        company_registration_number: value.company_registration_number,
                        currency: value.currency,
                    },
                })
                break
            case 'terms-of-use':
                onAnalyticEvent('affiliates: terms of use')
                setAffiliateAccount({
                    ...affiliate_account,
                    terms_of_use: {
                        non_pep_declaration: value.non_pep_declaration,
                        tnc_accepted: value.tnc_accepted,
                        general_terms: value.general_terms,
                        is_eu_checked: value.is_eu_checked,
                        is_partner_checked: value.is_partner_checked,
                    },
                })
                break
        }
    }

    return (
        <Wizard
            step={step}
            setStep={setStep}
            show_wizard={show_wizard}
            setShowWizard={setShowWizard}
            next_btn_enabled={next_btn_enabled}
            setNextBtnEnabled={setNextBtnEnabled}
            onSubmit={onSubmit}
        >
            <AccountType
                affiliate_data={affiliate_account.account}
                updateData={(value) => {
                    updateAffiliateValues(value, 'account-type')
                }}
                onValidate={(valid) => {
                    setNextBtnEnabled(valid)
                }}
            />
            <AccountDetails
                affiliate_data={affiliate_account.address_details}
                updateData={(value) => {
                    updateAffiliateValues(value, 'account-details')
                }}
                onValidate={(valid) => {
                    setNextBtnEnabled(valid)
                }}
                residence_list={residence_list}
            />
            <PhoneNumber
                affiliate_data={affiliate_account.phone_number}
                updateData={(value) => {
                    updateAffiliateValues(value, 'phone-number')
                }}
                onValidate={(valid) => {
                    setNextBtnEnabled(valid)
                }}
            />
            <PersonalDetails
                affiliate_data={affiliate_account.personal_details}
                is_individual={affiliate_account.account.type == 1}
                updateData={(value) => {
                    updateAffiliateValues(value, 'personal-details')
                }}
                onValidate={(valid) => {
                    setNextBtnEnabled(valid)
                }}
            />
            <AccountTerms
                affiliate_data={affiliate_account.terms_of_use}
                updateData={(value) => {
                    updateAffiliateValues(value, 'terms-of-use')
                }}
                onValidate={(valid) => {
                    setNextBtnEnabled(valid)
                }}
            />
        </Wizard>
    )
}

export default WizardComponent
