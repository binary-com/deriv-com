import { AttributesTypes, Growthbook } from './growthbook'
import { RudderStack, SignupProvider, TEvents } from './rudderstack'

type ExtractAction<T> = T extends { action: infer A } ? A : never
type ActionForEvent<E extends keyof TEvents> = ExtractAction<TEvents[E]>

type Options = {
    growthbookKey: string
    growthbookDecryptionKey: string
    rudderstackKey: string
    enableDevMode?: boolean
}

export function createAnalyticsInstance(options?: Options) {
    let _growthbook: Growthbook, _rudderstack: RudderStack

    const initialise = ({
        growthbookKey,
        growthbookDecryptionKey,
        rudderstackKey,
        enableDevMode,
    }: Options) => {
        _rudderstack = RudderStack.getRudderStackInstance(rudderstackKey)
        _growthbook = Growthbook.getGrowthBookInstance(
            growthbookKey,
            growthbookDecryptionKey,
            enableDevMode,
        )
    }

    if (options) {
        initialise(options)
    }

    const setAttributes = ({
        country,
        user_language,
        device_language,
        device_type,
    }: AttributesTypes) => {
        _growthbook.setAttributes({
            id: getId(),
            country,
            user_language,
            device_language,
            device_type,
        })
    }

    const getFeatureState = (id: string) => _growthbook.getFeatureState(id)?.experimentResult?.name
    const getFeatureValue = (id: string) => _growthbook.getFeatureValue(id)
    const getId = () => _rudderstack.getUserId() || _rudderstack.getAnonymousId()

    const registerAnalyticsEvent = <T extends keyof TEvents>(
        event: keyof TEvents,
        form_source: string,
        form_name: string,
    ) => {
        const analytic_events = {
            [event]: (action: ActionForEvent<T>, signup_provider?: SignupProvider) => {
                _rudderstack.track(
                    event,
                    { action, signup_provider, form_source, form_name },
                    { is_anonymous: !!_rudderstack.getAnonymousId() },
                )
            },
        }
        return analytic_events[event]
    }

    const getInstances = () => ({ ab: _growthbook, tracking: _rudderstack })

    return {
        initialise,
        setAttributes,
        getFeatureState,
        getFeatureValue,
        getId,
        registerAnalyticsEvent,
        getInstances,
    }
}

export const Analytics = createAnalyticsInstance()
export default Analytics
