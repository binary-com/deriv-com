import { Dispatch, ReactElement, SetStateAction } from 'react'

type CountryType = { name?: string; display_name?: string; prefix?: string; symbol?: string }
export type AffiliateAccountTypes = {
    email: string
    account: { type: number; plan: number }
    address_details: {
        country: CountryType
        state: string
        city: string
        street: string
        postal_code: string
    }
    phone_number: { phone: string; prefix: string }
    personal_details: {
        username: string
        first_name: string
        last_name: string
        date_birth: string
        website_url: string
        social_media_url: string
        password: string
        company_name: string
        company_registration_number: string
        currency: string
    }
    terms_of_use: {
        non_pep_declaration: boolean
        tnc_accepted: boolean
        general_terms: boolean
        is_eu_checked: boolean
        is_partner_checked: boolean
    }
}
export type setAffiliateAccountTypes = Dispatch<SetStateAction<AffiliateAccountTypes>>
export type SignUpStatusTypes =
    | 'Username not available'
    | 'lost connection'
    | 'success'
    | 'Your website is not a valid entry'
    | ''
export type setSignUpStatusTypes = Dispatch<SetStateAction<SignUpStatusTypes>>
export type SubmitTypes = {
    is_online: boolean
    affiliate_account: AffiliateAccountTypes

    setSignupStatus: setSignUpStatusTypes
    // once types will add in our API we can remove type below
    send_register: (data?: any) => Promise<void>
}

export type WizardComponentProps = {
    show_wizard: boolean
    setShowWizard: Dispatch<SetStateAction<boolean>>
    affiliate_account?: AffiliateAccountTypes
    setAffiliateAccount?: setAffiliateAccountTypes
    onSubmit: () => void
}
export type WizardTypes = {
    children?: ReactElement[]
    next_btn_enabled: boolean
    setNextBtnEnabled: Dispatch<SetStateAction<boolean>>
    step: number
    setStep: Dispatch<SetStateAction<number>>
    max_step?: number
} & Pick<WizardComponentProps, 'onSubmit'>
export type WizardProps = WizardTypes & WizardComponentProps
export type WizardStepProps = {
    affiliate_data: any
    updateData: (e: any) => void
    onValidate: (e: boolean) => void
    residence_list?: CountryType[]
    is_individual?: boolean
}
