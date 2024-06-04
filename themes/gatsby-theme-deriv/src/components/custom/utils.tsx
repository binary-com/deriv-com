import { deriv_app_url } from 'common/constants'
import {
    addQueryParam,
    getDerivAppLocalizedURL,
    getLanguage,
    redirectToTradingPlatform,
} from 'common/utility'

export const handleGetTrading = () => {
    const sub_url = redirectToTradingPlatform()
    const trading_url_localized = getDerivAppLocalizedURL(
        `${deriv_app_url}/${sub_url}`,
        getLanguage(),
    )
    window.location.href = trading_url_localized
}

export const handleRedirectToTradersHub = () => {
    const trading_hub_url_localized = getDerivAppLocalizedURL(
        `${deriv_app_url}`,
        getLanguage(),
    )
    const redirect_link = addQueryParam(trading_hub_url_localized, 'redirect_from', 'deriv_com')
    window.location.href = redirect_link
}
