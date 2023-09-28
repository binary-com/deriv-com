import React, { useState } from 'react'
import styled from 'styled-components'
import { WizardProps } from '../_types'
import AccountType from './_account-type'
import AccountDetails from './_account-details'
import PhoneNumber from './_phone_number'
import AccountTerms from './_account-terms'
import PersonalDetails from './_account-personal-details'
import WizardComponent from './wizard-component'
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
    box-shadow: 0 12px 16px -4px #0e0e0e14;
`

const Wizard = ({
    show_wizard,
    setShowWizard,
    affiliate_account,
    setAffiliateAccount,
    onSubmit,
    onAnalyticEvent,
}: WizardProps) => {
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
                        non_pep_declaration_accepted: value.non_pep_declaration_accepted,
                        tnc_accepted: value.tnc_accepted,
                        general_terms_accepted: value.general_terms_accepted,
                        is_eu_checked: value.is_eu_checked,
                        is_partner_checked: value.is_partner_checked,
                    },
                })
                break
        }
    }

    return (
        <WizardComponent
            step={step}
            setStep={setStep}
            show_wizard={show_wizard}
            setShowWizard={setShowWizard}
            next_btn_enabled={next_btn_enabled}
            setNextBtnEnabled={setNextBtnEnabled}
            onSubmit={onSubmit}
        >
            <AccountType
                affiliate_account={affiliate_account}
                updateData={(value) => {
                    updateAffiliateValues(value, 'account-type')
                }}
                onValidate={(valid) => {
                    setNextBtnEnabled(valid)
                }}
            />
            <AccountDetails
                affiliate_account={affiliate_account}
                updateData={(value) => {
                    updateAffiliateValues(value, 'account-details')
                }}
                onValidate={(valid) => {
                    setNextBtnEnabled(valid)
                }}
                residence_list={residence_list}
            />
            <PhoneNumber
                affiliate_account={affiliate_account}
                updateData={(value) => {
                    updateAffiliateValues(value, 'phone-number')
                }}
                onValidate={(valid) => {
                    setNextBtnEnabled(valid)
                }}
            />
            <PersonalDetails
                affiliate_account={affiliate_account}
                is_individual={affiliate_account.account.type == 1}
                updateData={(value) => {
                    updateAffiliateValues(value, 'personal-details')
                }}
                onValidate={(valid) => {
                    setNextBtnEnabled(valid)
                }}
            />
            <AccountTerms
                affiliate_account={affiliate_account}
                updateData={(value) => {
                    updateAffiliateValues(value, 'terms-of-use')
                }}
                onValidate={(valid) => {
                    setNextBtnEnabled(valid)
                }}
            />
        </WizardComponent>
    )
}

export default Wizard
