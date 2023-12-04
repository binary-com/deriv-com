import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Analytics } from '@deriv/analytics'
import { WizardProps } from '../_types'
import AccountType from './_account-type'
import AccountPlan from './_account-plan'
import AccountAddress from './_account-address'
import AccountTerms from './_account-terms'
import AccountDetails from './_account-details'
import WizardComponent from './wizard-component'
import { useResidenceList } from 'features/hooks/use-residence-list'
import { Container } from 'components/containers'
import { isBrowser } from 'common/utility'

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
    setSignupStatus,
    affiliate_account,
    setAffiliateAccount,
    onSubmit,
}: WizardProps) => {
    const [step, setStep] = useState(1)
    const [next_btn_enabled, setNextBtnEnabled] = useState<boolean>(false)
    const restricted_countries = ['Iran', 'North Korea', 'Myanmar (Burma)', 'Syria', 'Cuba']
    const [residence_list] = useResidenceList({ restricted_countries })

    const is_individual = affiliate_account?.account_type == 1

    const analyticsData: Parameters<typeof Analytics.trackEvent>[1] = {
        form_source: isBrowser() && window?.location.hostname,
        form_name: 'default_diel_deriv',
    }

    useEffect(() => {
        show_wizard &&
            Analytics?.trackEvent('ce_partner_account_signup_form', {
                action: 'open_wizard',
                ...analyticsData,
            })
        return () => {
            Analytics?.trackEvent('ce_partner_account_signup_form', {
                action: 'close_wizard',
                ...analyticsData,
            })
        }
    }, [show_wizard])

    const updateAffiliateValues = (value, type) => {
        switch (type) {
            case 'account-type':
                setAffiliateAccount({
                    ...affiliate_account,
                    account_type: value,
                })
                break
            case 'account-plan':
                setAffiliateAccount({
                    ...affiliate_account,
                    account_plan: value,
                })
                break
            case 'account-details':
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
            case 'personal-details':
                setAffiliateAccount({
                    ...affiliate_account,
                    personal_details: {
                        first_name: value.first_name,
                        last_name: value.last_name,
                        date_birth: value.date_birth,
                        phone: value.phone,
                        prefix: value.prefix,
                        website_url: value.website_url,
                        second_website_url: value.second_website_url,
                        company_name: value.company_name,
                        company_registration_number: value.company_registration_number,
                        username: value.username,
                        password: value.password,
                    },
                })
                break
            case 'terms-of-use':
                setAffiliateAccount({
                    ...affiliate_account,
                    terms_of_use: {
                        non_pep_declaration_accepted: value.non_pep_declaration_accepted,
                        tnc_accepted: value.tnc_accepted,
                        general_terms_accepted: value.general_terms_accepted,
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
            setSignupStatus={setSignupStatus}
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
            <AccountPlan
                affiliate_account={affiliate_account}
                updateData={(value) => {
                    updateAffiliateValues(value, 'account-plan')
                }}
                onValidate={(valid) => {
                    setNextBtnEnabled(valid)
                }}
            />
            <AccountAddress
                affiliate_account={affiliate_account}
                is_individual={is_individual}
                updateData={(value) => {
                    updateAffiliateValues(value, 'account-details')
                }}
                onValidate={(valid) => {
                    setNextBtnEnabled(valid)
                }}
                residence_list={residence_list}
            />
            <AccountDetails
                affiliate_account={affiliate_account}
                is_individual={is_individual}
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
