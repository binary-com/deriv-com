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
