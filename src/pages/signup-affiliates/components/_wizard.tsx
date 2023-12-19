import React, { useCallback, useEffect, useState } from 'react'
import {
    AccountAddress,
    AccountDetails,
    AccountPlan,
    AccountTerms,
    AccountType,
} from '../_lazy-loading'
import { AffiliateAccountTypes, WizardProps } from '../_types'
import trackEvent from '../utils/_tracking'
import WizardComponent from './wizard-component'
import { useResidenceList } from 'features/hooks/use-residence-list'

const Wizard = ({
    show_wizard,
    setSignupStatus,
    affiliate_account,
    setAffiliateAccount,
    onSubmit,
}: WizardProps) => {
    const [step, setStep] = useState(1)
    const [next_btn_enabled, setNextBtnEnabled] = useState<boolean>(false)
    const [residence_list] = useResidenceList({
        restricted_countries: ['Iran', 'North Korea', 'Myanmar (Burma)', 'Syria', 'Cuba'],
    })

    const is_individual = affiliate_account?.account_type == 1

    useEffect(() => {
        show_wizard && trackEvent({ action: 'open_wizard' })
        return () => trackEvent({ action: 'close_wizard' })
    }, [show_wizard])

    useEffect(() => {
        if (is_individual) {
            setAffiliateAccount((prev) => ({
                ...prev,
                account_details: {
                    ...prev.account_details,
                    company_name: '',
                    company_registration_number: '',
                },
            }))
        }
    }, [is_individual])

    const updateAffiliateValues = useCallback(
        <T extends keyof AffiliateAccountTypes>(value: AffiliateAccountTypes[T], type: T): void => {
            setAffiliateAccount((prev) => ({
                ...prev,
                [type]: value,
            }))
        },
        [step],
    )

    return (
        <WizardComponent
            step={step}
            setStep={setStep}
            show_wizard={show_wizard}
            setSignupStatus={setSignupStatus}
            next_btn_enabled={next_btn_enabled}
            onSubmit={onSubmit}
        >
            <AccountType
                affiliate_account={affiliate_account}
                updateData={(value: AffiliateAccountTypes['account_type']): void => {
                    updateAffiliateValues<'account_type'>(value, 'account_type')
                }}
                onValidate={setNextBtnEnabled}
            />
            <AccountPlan
                affiliate_account={affiliate_account}
                updateData={(value: AffiliateAccountTypes['account_plan']): void => {
                    updateAffiliateValues<'account_plan'>(value, 'account_plan')
                }}
                onValidate={setNextBtnEnabled}
            />
            <AccountAddress
                affiliate_account={affiliate_account}
                is_individual={is_individual}
                updateData={(value: AffiliateAccountTypes['account_address']): void => {
                    updateAffiliateValues<'account_address'>(value, 'account_address')
                }}
                onValidate={setNextBtnEnabled}
                residence_list={residence_list}
            />
            <AccountDetails
                affiliate_account={affiliate_account}
                is_individual={is_individual}
                updateData={(value: AffiliateAccountTypes['account_details']): void => {
                    updateAffiliateValues<'account_details'>(value, 'account_details')
                }}
                onValidate={setNextBtnEnabled}
            />
            <AccountTerms
                affiliate_account={affiliate_account}
                updateData={(value: AffiliateAccountTypes['terms_of_use']): void => {
                    updateAffiliateValues<'terms_of_use'>(value, 'terms_of_use')
                }}
                onValidate={setNextBtnEnabled}
            />
        </WizardComponent>
    )
}

export default Wizard
