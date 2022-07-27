import React from 'react'
import { navigate } from 'gatsby'
import { useCountryRule } from './use-country-rule'
import { isEuDomain } from 'common/utility'
import { DerivStore } from 'store'

const useHandleSignup = (_is_ppc = false) => {
    const { is_loading, is_eu_location } = useCountryRule()
    const { setShowNonEuPopup } = React.useContext(DerivStore)
    const currentLocation = window.location.pathname.split('/').slice(0, 4).join('/')

    return () => {
        if (is_loading) {
            return
        } else if (!is_eu_location && isEuDomain()) {
            setShowNonEuPopup(true)
        } else if (_is_ppc) {
            navigate(`${currentLocation}landing/signup/`)
        } else {
            navigate(`${currentLocation}signup/`)
        }
    }
}

export default useHandleSignup
