import { Analytics, TEvents } from '@deriv/analytics'

const trackEvent = ({
    action,
    partner_signup_error_message,
    user_choice,
    step_num,
    step_codename,
}: TEvents['ce_partner_account_signup_form']) => {
    Analytics?.trackEvent('ce_partner_account_signup_form', {
        action,
        partner_signup_error_message,
        user_choice,
        step_num,
        step_codename,
        form_name: 'ce_partner_account_signup_form',
    })
}
export default trackEvent
