import { State } from './storage'

// needs to wait for website_status before being called
// 'mt' is part of EU but account opening is not offered so the landing company response won't include the expected shortcode.
export const isEuCountry = () => {
    const eu_shortcode_regex = new RegExp('^(maltainvest|malta|iom)$')
    const eu_excluded_regex = new RegExp('^mt$')
    const financial_shortcode = State.getResponse(
        'landing_company.financial_company.shortcode',
    )
    const gaming_shortcode = State.getResponse(
        'landing_company.gaming_company.shortcode',
    )
    const clients_country = State.getResponse('website_status.clients_country')

    return financial_shortcode || gaming_shortcode
        ? eu_shortcode_regex.test(financial_shortcode) ||
              eu_shortcode_regex.test(gaming_shortcode)
        : eu_excluded_regex.test(clients_country)
}
