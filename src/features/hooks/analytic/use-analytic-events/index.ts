import { useCallback } from 'react'
import { RudderStack } from '@deriv/analytics'
import { useAnalyticData } from 'features/hooks/analytic/use-analytic-data'

type AnalyticsTypes = 'ce_virtual_signup_form' | 'ce_real_account_signup_form'

type AnalyticsEventsTypes = 'open' | 'started' | 'email_confirmation_sent'

type SignupProvider = 'email' | 'phone' | 'google' | 'facebook' | 'apple'

export const useAnalyticsEvents = (event: AnalyticsTypes) => {
    const { form_source, form_name } = useAnalyticData()
    // console.log(RudderStack)

    const analytic_events = {
        [event]: useCallback((action: AnalyticsEventsTypes, signup_provider?: SignupProvider) => {
            RudderStack.track(
                event,
                { action, signup_provider, form_source, form_name },
                { is_anonymous: true },
            )
        }, []),
    }

    return { onAnalyticEvent: analytic_events[event] }
}
