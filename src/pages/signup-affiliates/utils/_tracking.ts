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
        form_name: 'ce_partner_account_signup_form',
        ...(user_choice && { user_choice }),
        ...(step_num && { step_num }),
        ...(step_codename && { step_codename }),
        ...(partner_signup_error_message && { partner_signup_error_message }),
    })
}
export default trackEvent
