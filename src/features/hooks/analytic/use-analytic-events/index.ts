import { useCallback } from 'react'
import { useAnalyticData } from 'features/hooks/analytic/use-analytic-data'

type AnalyticsTypes = 'ce_virtual_signup_form' | 'ce_real_account_signup_form'

type AnalyticsEventsTypes =
    | 'open'
    | 'started'
    | 'email_confirmation_sent'
    | 'email'
    | 'google'
    | 'facebook'
    | 'apple'

export const useAnalyticsEvents = (event: AnalyticsTypes) => {
    const { form_source, form_name } = useAnalyticData()

    const analytic_events = {
        [event]: useCallback((action: AnalyticsEventsTypes) => {
            window.rudderanalytics.track(
                event,
                { action, form_source, form_name },
                // for demo
                () => {
                    console.log(`${isMobile ? `${action} on mobile` : action}`, `${event} happened`)
                },
            )
        }, []),
    }

    return { onAnalyticEvent: analytic_events[event] }
}
