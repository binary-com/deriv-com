import * as RudderAnalytics from 'rudder-sdk-js'
import { TEvents } from './types'

export class RudderStack {
    has_identified = false
    has_initialized = false
    current_page = ''
    private static _instance: RudderStack

    constructor(RUDDERSTACK_KEY: string) {
        this.init(RUDDERSTACK_KEY)
    }

    public static getRudderStackInstance(RUDDERSTACK_KEY: string) {
        if (!RudderStack._instance) {
            RudderStack._instance = new RudderStack(RUDDERSTACK_KEY)
            return RudderStack._instance
        }
        return RudderStack._instance
    }

    /**
     * @returns The anonymous ID assigned to the user before the identify event was called
     */
    getAnonymousId() {
        return RudderAnalytics.getAnonymousId()
    }

    /**
     * @returns The user ID that was assigned to the user after calling identify event
     */
    getUserId() {
        return RudderAnalytics.getUserId()
    }

    /**
     * Initializes the Rudderstack SDK. Ensure that the appropriate environment variables are set before this is called.
     * For local/staging environment, ensure that `RUDDERSTACK_STAGING_KEY` and `RUDDERSTACK_URL` is set.
     * For production environment, ensure that `RUDDERSTACK_PRODUCTION_KEY` and `RUDDERSTACK_URL` is set.
     */
    init(RUDDERSTACK_KEY: string) {
        RudderAnalytics.load(RUDDERSTACK_KEY, 'https://deriv-dataplane.rudderstack.com')
        RudderAnalytics.ready(() => {
            this.has_initialized = true
            this.has_identified = !!(this.getUserId() || this.getAnonymousId())
        })
    }

    /**
     *
     * @param user_id The user ID of the user to identify and associate all events with that particular user ID
     * @param payload Additional information passed to identify the user
     */
    identifyEvent = (user_id: string, payload: { language: string }) => {
        RudderAnalytics.identify(user_id, payload)
        this.has_identified = true
    }

    /**
     * Pushes page view event to Rudderstack
     *
     * @param curret_page The name or URL of the current page to track the page view event
     */
    pageView(current_page: string, platform = 'Deriv App') {
        if (this.has_initialized && this.has_identified && current_page !== this.current_page) {
            RudderAnalytics.page(platform, current_page)
            this.current_page = current_page
        }
    }

    /**
     * Pushes reset event to rudderstack
     */
    reset() {
        if (this.has_initialized) {
            RudderAnalytics.reset()
            this.has_identified = false
        }
    }

    /**
     * Pushes track events to Rudderstack. When this method is called before `identifyEvent` method is called, the events tracked will be associated with an anonymous ID.
     * Otherwise, if the events needs to be associated with a user ID, call `identifyEvent` with the user ID passed first before calling this method.
     *
     * @param event The event name to track
     * @param payload Additional information related to the event
     */
    track<T extends keyof TEvents>(event: T, payload: TEvents[T]) {
        if (this.has_initialized && this.has_identified) {
            try {
                RudderAnalytics.track(event, payload)
            } catch (err) {
                console.error(err)
            }
        }
    }
}
