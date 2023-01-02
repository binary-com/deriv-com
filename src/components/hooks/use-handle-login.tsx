import React from 'react'
import { useCountryRule } from './use-country-rule'
import { isEuDomain, redirectToTradingPlatform } from 'common/utility'
import Login from 'common/login'
import { PopupContext } from 'store/PopupContext'

const useHandleLogin = () => {
    const { is_loading, is_eu_location } = useCountryRule()
    const { setShowNonEuPopup } = React.useContext(PopupContext)

    return () => {
        if (is_loading) {
            return
        } else if (!is_eu_location && isEuDomain()) {
            setShowNonEuPopup(true)
        } else {
            redirectToTradingPlatform()
            Login.redirectToLogin()
        }
    }
}

export default useHandleLogin
