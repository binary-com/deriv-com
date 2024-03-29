import { deriv_app_url } from 'common/constants'
import { getDerivAppLocalizedURL, getLanguage, redirectToTradingPlatform } from 'common/utility'

export const handleGetTrading = () => {
    const sub_url = redirectToTradingPlatform()
    const trading_url_localized = getDerivAppLocalizedURL(
        `${deriv_app_url}/${sub_url}`,
        getLanguage(),
    )
    window.location.href = trading_url_localized
}

export const handleRedirectToTradersHub = () => {
    const redirect_from_query_param = '&redirect_from=deriv_com'
    const trading_hub_url_localized =
        getDerivAppLocalizedURL(`${deriv_app_url}/appstore/traders-hub`, getLanguage()) +
        redirect_from_query_param
    window.location.href = trading_hub_url_localized
}
