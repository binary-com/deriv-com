import { Dispatch, ReactElement, SetStateAction } from 'react'

type ResidenceType = { name?: string; display_name?: string; prefix?: string; symbol?: string }

type AffiliateAccountTypes = {
    email: string
    account_type: number
    account_plan: number
    account_address: {
        country: ResidenceType
        state: ResidenceType
        city: string
        street: string
        postal_code: string
    }
    account_details: {
        first_name: string
        last_name: string
        date_birth: Date
        phone: string
        website_url: string
        second_website_url: string
        company_name: string
        company_registration_number: string
        username: string
        password: string
    }
    terms_of_use: {
        non_pep_declaration_accepted: boolean
        tnc_accepted: boolean
        tnc_affiliate_accepted: boolean
        promote_eu: boolean
    }
}
type AffiliateSendTypes = {
    address_city: string
    address_postcode: string
    address_state: string
    address_street: string
    commission_plan: number
    country: string
    date_of_birth: string
    email: string
    first_name: string
    last_name: string
    non_pep_declaration: number
    over_18_declaration: number
    phone: string
    phone_code: number
    tnc_accepted: number
    tnc_affiliate_accepted: number
    type_of_account: number
    user_name: string
    password: string
    website_url: string
    whatsapp_number: string
    whatsapp_number_phoneCode: number
    company_name?: string
    company_registration_number?: string
}

type setAffiliateAccountTypes = Dispatch<SetStateAction<AffiliateAccountTypes>>

type AffiliateAccountProps = {
    affiliate_account?: AffiliateAccountTypes
    setAffiliateAccount?: setAffiliateAccountTypes
    onSubmit?: () => void
}

export type SignUpStatusTypes =
    | 'Username not available'
    | 'lost connection'
    | 'unhandled error'
    | 'success'
    | 'loading'
    | 'Your website is not a valid entry'
    | 'wizard opened'
    | 'closing wizard'
    | ''
export type setSignUpStatusTypes = Dispatch<SetStateAction<SignUpStatusTypes>>

export type SignUpStatusProps = {
    signup_status: SignUpStatusTypes
    setSignupStatus: setSignUpStatusTypes
} & AffiliateAccountProps

type SubmitTypes = {
    is_online: boolean
    affiliate_account: AffiliateAccountTypes

    setSignupStatus: setSignUpStatusTypes
    // once our API register this call we can remove type below
    affiliateSend: (data?: AffiliateSendTypes) => Promise<void>
}

type SetShowWizardType = Dispatch<SetStateAction<boolean>>

type WizardProps = {
    show_wizard: boolean
    setSignupStatus: setSignUpStatusTypes
} & AffiliateAccountProps

type SignUpFormProps = {
    setShowWizard: SetShowWizardType
} & AffiliateAccountProps

type WizardComponentTypes = {
    children?: ReactElement[]
    next_btn_enabled: boolean
    setNextBtnEnabled?: Dispatch<SetStateAction<boolean>>
    step: number
    setStep: Dispatch<SetStateAction<number>>
    max_step?: number
} & Pick<WizardProps, 'onSubmit'>

type WizardComponentsProps = WizardComponentTypes & WizardProps

type WizardStepProps<T extends keyof AffiliateAccountTypes> = {
    affiliate_account: AffiliateAccountTypes
    updateData: (value: AffiliateAccountTypes[T]) => void
    onValidate: (value: boolean) => void
    residence_list?: ResidenceType[]
    is_individual?: boolean
}

export type {
    AffiliateAccountTypes,
    setAffiliateAccountTypes,
    WizardStepProps,
    WizardComponentsProps,
    WizardComponentTypes,
    WizardProps,
    SignUpFormProps,
    SubmitTypes,
}
