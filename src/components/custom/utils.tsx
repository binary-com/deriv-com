import { deriv_app_url } from 'common/constants'
import { getDerivAppLocalizedURL, getLanguage, redirectToTradingPlatform } from 'common/utility'

export const handleGetTrading = () => {
    const sub_url = redirectToTradingPlatform()
    const trading_url_localized = getDerivAppLocalizedURL(
        `https://deriv-app-git-fork-shaheer-deriv-shaheer-wall-565languag-016277.binary.sx/${sub_url}`,
        getLanguage(),
    )
    window.location.href = trading_url_localized
}

export const handleRedirectToTradersHub = () => {
    const trading_hub_url_localized = getDerivAppLocalizedURL(
        `https://deriv-app-git-fork-shaheer-deriv-shaheer-wall-565languag-016277.binary.sx/appstore/traders-hub`,
        getLanguage(),
    )
    window.location.href = trading_hub_url_localized
}
