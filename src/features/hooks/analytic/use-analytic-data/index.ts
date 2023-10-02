import { RudderStack } from '@deriv/analytics'
import { getClientInformation, getDomain, getLanguage, isBrowser } from 'common/utility'

export const useAnalyticData = () => {
    const anonymous_id = isBrowser() && RudderStack.getAnonymousId()
    const form_name = 'default_diel_deriv'
    const form_source = isBrowser() && window?.location.host
    const language = getLanguage()
    const domain = getDomain()
    const client_information = getClientInformation(domain)

    if (client_information) {
        RudderStack.identifyEvent(client_information.loginid, {
            language,
        })
    }

    return { form_name, form_source, anonymous_id }
}
