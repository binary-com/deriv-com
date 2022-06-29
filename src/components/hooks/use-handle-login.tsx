import React from 'react'
import { useCountryRule } from './use-country-rule'
import { isEuDomain, redirectToTradingPlatform } from 'common/utility'
import { DerivStore } from 'store'
import Login from 'common/login'

const useHandleLogin = () => {
    const { is_loading, is_row } = useCountryRule()
    const { setShowNonEuPopup } = React.useContext(DerivStore)

    return () => {
        if (is_loading) {
            return
        } else if (is_row && isEuDomain()) {
            setShowNonEuPopup(true)
        } else {
            redirectToTradingPlatform()
            Login.redirectToLogin()
        }
    }
}

export default useHandleLogin
