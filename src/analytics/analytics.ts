import { AttributesTypes, Growthbook } from './growthbook'
import { RudderStack, SignupProvider, TEvents } from './rudderstack'

type ExtractAction<T> = T extends { action: infer A } ? A : never
type ActionForEvent<E extends keyof TEvents> = ExtractAction<TEvents[E]>
export class Analytics {
    public static _growthbook: Growthbook
    public static _rudderstack: RudderStack

    public static getAnalyticInstance(
        clientKey: string,
        decryptionKey: string,
        RUDDERSTACK_STAGING_KEY: string,
        RUDDERSTACK_PRODUCTION_KEY: string,
        NODE_ENV: string,
    ) {
        this._growthbook = Growthbook.getGrowthBookInstance(clientKey, decryptionKey, NODE_ENV)
        this._rudderstack = RudderStack.getRudderStackInstance(
            RUDDERSTACK_STAGING_KEY,
            RUDDERSTACK_PRODUCTION_KEY,
            NODE_ENV,
        )
    }

    public static setAttributes({
        country,
        user_language,
        device_language,
        device_type,
    }: AttributesTypes) {
        this._growthbook.setAttributes({
            id: Analytics.getId(),
            country,
            user_language,
            device_language,
            device_type,
        })
    }

    public static getFeatureState(id: string) {
        return Analytics._growthbook.getExperimentValue(id)
    }
    public static getFeatureValue(id: string) {
        return Analytics._growthbook.getFeatureValue(id)
    }

    public static getId() {
        return Analytics._rudderstack.getUserId() || Analytics._rudderstack.getAnonymousId()
    }

    public static registerAnalyticsEvent = <T extends keyof TEvents>(
        event: keyof TEvents,
        form_source: string,
        form_name: string,
    ) => {
        const analytic_events = {
            [event]: (action: ActionForEvent<T>, signup_provider?: SignupProvider) => {
                this._rudderstack.track(
                    event,
                    { action, signup_provider, form_source, form_name },
                    { is_anonymous: !!this._rudderstack.getAnonymousId() },
                )
            },
        }

        return analytic_events[event]
    }
    // to get instances directly
    public static getInstances() {
        return { ab: Analytics._growthbook, tracking: Analytics._rudderstack }
    }
}
