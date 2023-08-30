import { isBrowser } from 'common/utility'

export const useAnalyticData = () => {
    const anonymous_id = isBrowser() && window?.rudderanalytics.getAnonymousId()
    const form_name = 'default_diel_deriv'
    const form_source = isBrowser() && window?.location.host

    return { form_name, form_source, anonymous_id }
}
