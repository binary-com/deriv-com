import { useCallback } from 'react'
import { RudderStack, SignupProvider, TEvents } from '@deriv/analytics'
import { useAnalyticData } from 'features/hooks/analytic/use-analytic-data'

type ExtractAction<T> = T extends { action: infer A } ? A : never
type ActionForEvent<E extends keyof TEvents> = ExtractAction<TEvents[E]>

export const useAnalyticsEvents = <T extends keyof TEvents>(event: keyof TEvents) => {
    const { form_source, form_name } = useAnalyticData()

    const analytic_events = {
        [event]: useCallback((action: ActionForEvent<T>, signup_provider?: SignupProvider) => {
            RudderStack.track(
                event,
                { action, signup_provider, form_source, form_name },
                { is_anonymous: true },
            )
        }, []),
    }

    return { onAnalyticEvent: analytic_events[event] }
}
