import React from 'react'
import { useCountryRule } from './use-country-rule'
import { redirectToTradingPlatform } from 'common/utility'
import Login from 'common/login'

const useHandleLogin = () => {
    const { is_loading } = useCountryRule()

    return () => {
        if (is_loading) {
            return
        } else {
            redirectToTradingPlatform()
            Login.redirectToLogin()
        }
    }
}

export default useHandleLogin
