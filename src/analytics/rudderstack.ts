import * as RudderAnalytics from 'rudder-sdk-js'

export type SignupProvider = 'email' | 'phone' | 'google' | 'facebook' | 'apple'

export type VirtualSignupFormAction = {
    action:
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

export type RealAccountSignupFormAction = {
    action:
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

export type VirtualSignupEmailConfirmationAction = {
    action: 'received' | 'expired' | 'confirmed' | 'error'
    signup_provider?: SignupProvider
    form_source?: string
    email_md5?: string
    error_message?: string
}

export type TradeTypesFormAction =
    | {
          action: 'open' | 'close' | 'info_close'
          trade_type_name?: string
          tab_name?: string
          form_source?: string
          form_name?: string
          subform_name?: string
      }
    | {
          action: 'choose_trade_type'
          subform_name: 'info_old' | 'info_new'
          form_name: string
          trade_type_name: string
      }
    | {
          action: 'choose_trade_type'
          subform_name: 'trade_type'
          tab_name: string
          form_name: string
          trade_type_name: string
      }
    | {
          action: 'search'
          search_string: string
      }
    | {
          action: 'info_open'
          tab_name: string
          trade_type_name: string
      }
    | {
          action: 'info-switcher'
          info_switcher_mode: string
          trade_type_name: string
      }

export type IdentifyAction = {
    language: string
}

export type ExperimentViewedEvent = {
    experimentId: string
    variationId: string | number
}

export type TEvents = {
    ce_virtual_signup_form: VirtualSignupFormAction
    ce_real_account_signup_form: RealAccountSignupFormAction
    ce_virtual_signup_email_confirmation: VirtualSignupEmailConfirmationAction
    ce_trade_types_form: TradeTypesFormAction
    identify: IdentifyAction
    experiment_viewed: ExperimentViewedEvent
}

export type TTrackOptions = {
    is_anonymous: boolean
}

export class RudderStack {
    has_identified = false
    has_initialized = false
    current_page = ''
    private static _instance: RudderStack

    constructor() {
        this.init()
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
    init() {
        const is_production =
            process.env.CIRCLE_JOB === 'release_production' || process.env.NODE_ENV === 'production'

        const RUDDERSTACK_KEY = is_production
            ? '1oV5agvlcnCZ6IH94wCKM1oR8Pd'
            : '1lN3tsFD2nruGFgM5F074DC2hMB'

        if (RUDDERSTACK_KEY) {
            RudderAnalytics.load(RUDDERSTACK_KEY, 'https://deriv-dataplane.rudderstack.com')
            RudderAnalytics.ready(() => {
                this.has_initialized = true
            })
        }
    }

    /**
     *
     * @param user_id The user ID of the user to identify and associate all events with that particular user ID
     * @param payload Additional information passed to indentify the user
     */
    identifyEvent = (user_id: string, payload: TEvents['identify']) => {
        if (this.has_initialized) {
            RudderAnalytics.identify(user_id, payload)
            this.has_identified = true
        }
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
    track<T extends keyof TEvents>(event: T, payload: TEvents[T], options?: TTrackOptions) {
        if (this.has_initialized && (options?.is_anonymous || this.has_identified)) {
            try {
                RudderAnalytics.track(event, payload)
            } catch (err) {
                console.error(err)
            }
        }
    }
}

export default new RudderStack()
