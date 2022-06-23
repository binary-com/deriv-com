import React from 'react'
import { useCountryRule } from './use-country-rule'
import { isEuDomain, redirectToTradingPlatform } from 'common/utility'
import { DerivStore } from 'store'
import Login from 'common/login'

const useHandleLogin = () => {
    const { is_non_eu } = useCountryRule()
    const { setShowNonEuPopup } = React.useContext(DerivStore)

    return () => {
        if (is_non_eu && isEuDomain()) {
            setShowNonEuPopup(true)
        } else {
            redirectToTradingPlatform()
            Login.redirectToLogin()
        }
    }
}

export default useHandleLogin
