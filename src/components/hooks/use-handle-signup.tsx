import React from 'react'
import { navigate, withPrefix } from 'gatsby'
import { useCountryRule } from './use-country-rule'
import { isEuDomain, getLanguage } from 'common/utility'
import { DerivStore } from 'store'

const useHandleSignup = (_is_ppc = false) => {
    const { is_loading, is_eu_location } = useCountryRule()
    const { setShowNonEuPopup } = React.useContext(DerivStore)
    const currentLanguage = getLanguage() + '/'
    const signUpPath = withPrefix('/')

    return () => {
        if (is_loading) {
            return
        } else if (!is_eu_location && isEuDomain()) {
            setShowNonEuPopup(true)
        } else if (_is_ppc) {
            navigate(`${signUpPath}${currentLanguage}landing/signup/`)
        } else {
            navigate(`${signUpPath}${currentLanguage}signup/`)
        }
    }
}

export default useHandleSignup
