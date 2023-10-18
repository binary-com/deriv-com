type SignupProvider = 'email' | 'phone' | 'google' | 'facebook' | 'apple'

type PartnerAccountSignupForm = {
    action:
        | 'open'
        | 'close'
        | 'open_wizard'
        | 'step_passed'
        | 'step_back'
        | 'close_wizard'
        | 'restore_wizard'
        | 'partners_signup_error'
        | 'other_error'
        | 'real_signup_finished'
    step_codename: string
    step_num: number
    form_source: string
    form_name: string
    partner_signup_error_message?: string
}
type VirtualSignupForm = {
    action?:
        | 'open'
        | 'started'
        | 'email_confirmation_sent'
        | 'email_confirmed'
        | 'signup_continued'
        | 'country_selection_screen_opened'
        | 'password_screen_opened'
        | 'signup_done'
        | 'signup_flow_error'
        | 'go_to_login'
    signup_provider?: SignupProvider
    form_source?: string
    form_name?: string
    error_message?: string
    email?: string
    app_id?: string
}
type RealAccountSignupForm = {
    action?:
        | 'open'
        | 'step_passed'
        | 'save'
        | 'restore'
        | 'close'
        | 'real_signup_error'
        | 'other_error'
        | 'real_signup_finished'
    step_codename?: string
    step_num?: number
    user_choice?: string
    source?: string
    form_name?: string
    real_signup_error_message?: string
    landing_company: string
}

type VirtualSignupEmailConfirmation = {
    action?: 'received' | 'expired' | 'confirmed' | 'error'
    signup_provider?: SignupProvider
    form_source?: string
    email_md5?: string
    error_message?: string
}
type TradeTypesForm = {
    action?:
        | 'open'
        | 'close'
        | 'choose_trade_type'
        | 'search'
        | 'info_open'
        | 'info-switcher'
        | 'info_close'
    trade_type_name?: string
    tab_name?: string
    search_string?: string
    info_switcher_mode?: 'description' | 'glossary'
    form_source?: string
    subform_name?: string
    account_type?: string
}
type DbotTypes = {
    action?:
        | 'open'
        | 'close'
        | 'search'
        | 'delete'
        | 'yes'
        | 'no'
        | 'search_string'
        | 'choose_shortcut'
        | 'bot_last_modified_time'
        | 'delete_popup_respond'
        | 'push_open_button'
        | 'push_user_guide'
        | 'save_your_bot'
        | 'choose_your_bot'
        | 'delete_your_bot'
    shortcut_name?: string
    form_source?: string
    search_string?: string
    delete_popup_respond?: string
    bot_last_modified_time?: number
    bot_name?: string
}

export type TEvents = {
    ce_partner_account_signup_form: PartnerAccountSignupForm
    ce_virtual_signup_form: VirtualSignupForm
    ce_real_account_signup_form: RealAccountSignupForm
    ce_virtual_signup_email_confirmation: VirtualSignupEmailConfirmation
    ce_trade_types_form: TradeTypesForm
    ce_bot_dashboard_form: DbotTypes
}

export type TCoreTrackData = {
    language: string
    account_type: 'CR' | 'VR' | 'MF' | 'VRTC'
    device_type: 'mobile' | 'desktop'
}
