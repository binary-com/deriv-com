import React from 'react'
import { navigate } from 'gatsby'
import { useCountryRule } from './use-country-rule'
import { isEuDomain } from 'common/utility'
import { DerivStore } from 'store'

const useHandleSignup = (_is_ppc = false) => {
    const { is_non_eu } = useCountryRule()
    const { setShowNonEuPopup } = React.useContext(DerivStore)

    return () => {
        if (is_non_eu && isEuDomain()) {
            setShowNonEuPopup(true)
        } else if (_is_ppc) {
            navigate('/landing/signup/')
        } else {
            navigate('/signup')
        }
    }
}

export default useHandleSignup
