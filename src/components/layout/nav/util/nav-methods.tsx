// Global methods of nav components
import { useState } from 'react'
import { getLanguage, getDerivAppLocalizedURL, redirectToTradingPlatform } from 'common/utility'
import { deriv_app_url } from 'common/constants'

export const handleScroll = (show, hide) => {
    const show_height = 400
    window.scrollY > show_height ? show() : hide()
}

export const useMoveButton = () => {
    const [show_button, setShowButton] = useState(false)
    const showButton = () => setShowButton(!show_button)
    const hideButton = () => setShowButton(false)
    return [show_button, showButton, hideButton] as const // here, we freeze the array to a tuple, so we can not change it out of this methods
}

export const handleGetTrading = () => {
    const sub_url = redirectToTradingPlatform()
    const trading_url_localized = getDerivAppLocalizedURL(
        `${deriv_app_url}/${sub_url}`,
        getLanguage(),
    )
    window.location.href = trading_url_localized
}
